const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Database connection
let pool = null;
let dbConnected = false;

if (process.env.DATABASE_URL) {
    // Disable SSL for internal Railway connections (private network)
    // SSL is only needed for external connections
    const useSSL = process.env.DATABASE_URL.includes('railway.app') && !process.env.DATABASE_URL.includes('.internal');
    pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: useSSL ? { rejectUnauthorized: false } : false
    });
} else {
    console.warn('⚠️ DATABASE_URL not set - running in demo mode (data will not persist)');
}

// In-memory storage for demo mode
const demoUsers = new Map();
const demoStats = new Map();
const demoSessions = new Map(); // userId -> sessions[]
const demoGroupMessages = []; // Chat de groupe

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || 'effaceur_secret_key_2024';

// Initialize database tables
async function initDB() {
    if (!pool) {
        console.log('Running in demo mode - no database');
        return;
    }
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                avatar VARCHAR(10) DEFAULT '🏀',
                current_week INTEGER DEFAULT 1,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS completed_sessions (
                id SERIAL PRIMARY KEY,
                user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
                session_key VARCHAR(20) NOT NULL,
                session_name VARCHAR(100) NOT NULL,
                xp_earned INTEGER DEFAULT 0,
                duration INTEGER DEFAULT 0,
                calories INTEGER DEFAULT 0,
                completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS completed_exercises (
                id SERIAL PRIMARY KEY,
                user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
                session_id INTEGER REFERENCES completed_sessions(id) ON DELETE CASCADE,
                exercise_name VARCHAR(100) NOT NULL,
                rating INTEGER CHECK (rating >= 1 AND rating <= 5),
                notes TEXT,
                completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS user_stats (
                id SERIAL PRIMARY KEY,
                user_id INTEGER UNIQUE REFERENCES users(id) ON DELETE CASCADE,
                total_xp INTEGER DEFAULT 0,
                total_workouts INTEGER DEFAULT 0,
                total_minutes INTEGER DEFAULT 0,
                total_calories INTEGER DEFAULT 0,
                current_streak INTEGER DEFAULT 0,
                best_streak INTEGER DEFAULT 0,
                last_workout_date DATE,
                badges TEXT DEFAULT '[]',
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS group_messages (
                id SERIAL PRIMARY KEY,
                user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
                content TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );

            CREATE INDEX IF NOT EXISTS idx_sessions_user ON completed_sessions(user_id);
            CREATE INDEX IF NOT EXISTS idx_exercises_user ON completed_exercises(user_id);
            CREATE INDEX IF NOT EXISTS idx_sessions_date ON completed_sessions(completed_at);
            CREATE INDEX IF NOT EXISTS idx_group_messages_date ON group_messages(created_at);
        `);
        console.log('Database initialized successfully');
    } catch (error) {
        console.error('Database initialization error:', error);
    }
}

// Auth Middleware
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Token requis' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Token invalide' });
        }
        req.user = user;
        next();
    });
}

// ==================== AUTH ROUTES ====================

// Register
app.post('/api/auth/register', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: 'Pseudo et mot de passe requis' });
        }

        if (username.length < 2) {
            return res.status(400).json({ error: 'Pseudo trop court (min 2 caracteres)' });
        }

        if (password.length < 4) {
            return res.status(400).json({ error: 'Mot de passe trop court (min 4 caracteres)' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Demo mode (no database)
        if (!pool) {
            if (demoUsers.has(username)) {
                return res.status(400).json({ error: 'Ce pseudo est deja pris' });
            }

            const userId = Date.now();
            const user = { id: userId, username, password: hashedPassword, avatar: '🏀', current_week: 1 };
            demoUsers.set(username, user);
            demoStats.set(userId, { total_xp: 0, total_workouts: 0, current_streak: 0, best_streak: 0, badges: '[]' });

            const token = jwt.sign({ id: userId, username }, JWT_SECRET, { expiresIn: '30d' });

            return res.status(201).json({
                message: 'Compte cree!',
                token,
                user: { id: userId, username, avatar: '🏀', currentWeek: 1 }
            });
        }

        // Database mode
        // Check if user exists
        const existingUser = await pool.query(
            'SELECT id FROM users WHERE username = $1',
            [username]
        );

        if (existingUser.rows.length > 0) {
            return res.status(400).json({ error: 'Ce pseudo est deja pris' });
        }

        // Create user
        const result = await pool.query(
            'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username, avatar, current_week',
            [username, hashedPassword]
        );

        const user = result.rows[0];

        // Create initial stats
        await pool.query(
            'INSERT INTO user_stats (user_id) VALUES ($1)',
            [user.id]
        );

        // Generate token
        const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '30d' });

        res.status(201).json({
            message: 'Compte cree!',
            token,
            user: {
                id: user.id,
                username: user.username,
                avatar: user.avatar,
                currentWeek: user.current_week
            }
        });
    } catch (error) {
        console.error('Register error:', error);
        res.status(500).json({ error: 'Erreur serveur: ' + error.message });
    }
});

// Login
app.post('/api/auth/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: 'Pseudo et mot de passe requis' });
        }

        // Demo mode (no database)
        if (!pool) {
            const user = demoUsers.get(username);
            if (!user) {
                return res.status(401).json({ error: 'Pseudo ou mot de passe incorrect' });
            }

            const validPassword = await bcrypt.compare(password, user.password);
            if (!validPassword) {
                return res.status(401).json({ error: 'Pseudo ou mot de passe incorrect' });
            }

            const token = jwt.sign({ id: user.id, username }, JWT_SECRET, { expiresIn: '30d' });
            const stats = demoStats.get(user.id) || {};

            return res.json({
                message: 'Connexion reussie',
                token,
                user: { id: user.id, username, avatar: user.avatar, currentWeek: user.current_week },
                stats: {
                    totalXP: stats.total_xp || 0,
                    totalWorkouts: stats.total_workouts || 0,
                    totalMinutes: stats.total_minutes || 0,
                    totalCalories: stats.total_calories || 0,
                    currentStreak: stats.current_streak || 0,
                    bestStreak: stats.best_streak || 0,
                    badges: JSON.parse(stats.badges || '[]')
                }
            });
        }

        // Database mode
        // Find user
        const result = await pool.query(
            'SELECT * FROM users WHERE username = $1',
            [username]
        );

        if (result.rows.length === 0) {
            return res.status(401).json({ error: 'Pseudo ou mot de passe incorrect' });
        }

        const user = result.rows[0];

        // Check password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ error: 'Pseudo ou mot de passe incorrect' });
        }

        // Generate token
        const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '30d' });

        // Get stats
        const statsResult = await pool.query(
            'SELECT * FROM user_stats WHERE user_id = $1',
            [user.id]
        );
        const stats = statsResult.rows[0] || {};

        res.json({
            message: 'Connexion reussie',
            token,
            user: {
                id: user.id,
                username: user.username,
                avatar: user.avatar,
                currentWeek: user.current_week
            },
            stats: {
                totalXP: stats.total_xp || 0,
                totalWorkouts: stats.total_workouts || 0,
                totalMinutes: stats.total_minutes || 0,
                totalCalories: stats.total_calories || 0,
                currentStreak: stats.current_streak || 0,
                bestStreak: stats.best_streak || 0,
                badges: JSON.parse(stats.badges || '[]')
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Erreur serveur: ' + error.message });
    }
});

// Get current user
app.get('/api/auth/me', authenticateToken, async (req, res) => {
    try {
        // Demo mode
        if (!pool) {
            const user = [...demoUsers.values()].find(u => u.id === req.user.id);
            if (!user) {
                return res.status(404).json({ error: 'Utilisateur non trouve' });
            }
            const stats = demoStats.get(user.id) || {};
            return res.json({
                user: { id: user.id, username: user.username, avatar: user.avatar, currentWeek: user.current_week },
                stats: {
                    totalXP: stats.total_xp || 0,
                    totalWorkouts: stats.total_workouts || 0,
                    totalMinutes: stats.total_minutes || 0,
                    totalCalories: stats.total_calories || 0,
                    currentStreak: stats.current_streak || 0,
                    bestStreak: stats.best_streak || 0,
                    badges: JSON.parse(stats.badges || '[]')
                }
            });
        }

        const result = await pool.query(
            'SELECT id, username, avatar, current_week FROM users WHERE id = $1',
            [req.user.id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Utilisateur non trouve' });
        }

        const user = result.rows[0];

        // Get stats
        const statsResult = await pool.query(
            'SELECT * FROM user_stats WHERE user_id = $1',
            [user.id]
        );
        const stats = statsResult.rows[0] || {};

        res.json({
            user: {
                id: user.id,
                username: user.username,
                avatar: user.avatar,
                currentWeek: user.current_week
            },
            stats: {
                totalXP: stats.total_xp || 0,
                totalWorkouts: stats.total_workouts || 0,
                totalMinutes: stats.total_minutes || 0,
                totalCalories: stats.total_calories || 0,
                currentStreak: stats.current_streak || 0,
                bestStreak: stats.best_streak || 0,
                lastWorkoutDate: stats.last_workout_date,
                badges: JSON.parse(stats.badges || '[]')
            }
        });
    } catch (error) {
        console.error('Get me error:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// ==================== SESSIONS ROUTES ====================

// Complete a session
app.post('/api/sessions/complete', authenticateToken, async (req, res) => {
    try {
        const { sessionKey, sessionName, xpEarned, duration, calories, exercises } = req.body;
        const userId = req.user.id;
        const today = new Date().toISOString().split('T')[0];

        // Demo mode (no database)
        if (!pool) {
            // Create session
            const session = {
                id: Date.now(),
                user_id: userId,
                session_key: sessionKey,
                session_name: sessionName,
                xp_earned: xpEarned,
                duration: duration,
                calories: calories,
                completed_at: new Date().toISOString()
            };

            // Store session
            if (!demoSessions.has(userId)) {
                demoSessions.set(userId, []);
            }
            demoSessions.get(userId).push(session);

            // Update stats
            let stats = demoStats.get(userId) || {
                total_xp: 0,
                total_workouts: 0,
                total_minutes: 0,
                total_calories: 0,
                current_streak: 0,
                best_streak: 0,
                last_workout_date: null,
                badges: '[]'
            };

            // Calculate streak
            let newStreak = 1;
            if (stats.last_workout_date) {
                const lastDateStr = stats.last_workout_date;
                const yesterday = new Date();
                yesterday.setDate(yesterday.getDate() - 1);
                const yesterdayStr = yesterday.toISOString().split('T')[0];

                if (lastDateStr === today) {
                    newStreak = stats.current_streak;
                } else if (lastDateStr === yesterdayStr) {
                    newStreak = stats.current_streak + 1;
                }
            }

            stats.total_xp += xpEarned;
            stats.total_workouts += 1;
            stats.total_minutes += duration;
            stats.total_calories += calories;
            stats.current_streak = newStreak;
            stats.best_streak = Math.max(stats.best_streak, newStreak);
            stats.last_workout_date = today;

            demoStats.set(userId, stats);

            return res.json({
                message: 'Séance enregistrée !',
                session,
                stats: {
                    totalXP: stats.total_xp,
                    totalWorkouts: stats.total_workouts,
                    totalMinutes: stats.total_minutes,
                    totalCalories: stats.total_calories,
                    currentStreak: stats.current_streak,
                    bestStreak: stats.best_streak
                }
            });
        }

        // Database mode
        // Insert session
        const sessionResult = await pool.query(
            `INSERT INTO completed_sessions (user_id, session_key, session_name, xp_earned, duration, calories)
             VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
            [userId, sessionKey, sessionName, xpEarned, duration, calories]
        );

        const session = sessionResult.rows[0];

        // Insert exercises if provided
        if (exercises && exercises.length > 0) {
            for (const ex of exercises) {
                await pool.query(
                    `INSERT INTO completed_exercises (user_id, session_id, exercise_name, rating, notes)
                     VALUES ($1, $2, $3, $4, $5)`,
                    [userId, session.id, ex.name, ex.rating || null, ex.notes || null]
                );
            }
        }

        // Update user stats
        // Get current stats
        const currentStats = await pool.query(
            'SELECT * FROM user_stats WHERE user_id = $1',
            [userId]
        );

        let newStreak = 1;
        let bestStreak = 1;

        if (currentStats.rows.length > 0) {
            const stats = currentStats.rows[0];
            const lastDate = stats.last_workout_date;

            if (lastDate) {
                const lastDateStr = new Date(lastDate).toISOString().split('T')[0];
                const yesterday = new Date();
                yesterday.setDate(yesterday.getDate() - 1);
                const yesterdayStr = yesterday.toISOString().split('T')[0];

                if (lastDateStr === today) {
                    // Same day, keep streak
                    newStreak = stats.current_streak;
                } else if (lastDateStr === yesterdayStr) {
                    // Consecutive day
                    newStreak = stats.current_streak + 1;
                }
                // Else streak resets to 1
            }

            bestStreak = Math.max(stats.best_streak, newStreak);
        }

        await pool.query(
            `INSERT INTO user_stats (user_id, total_xp, total_workouts, total_minutes, total_calories, current_streak, best_streak, last_workout_date)
             VALUES ($1, $2, 1, $3, $4, $5, $6, $7)
             ON CONFLICT (user_id) DO UPDATE SET
                total_xp = user_stats.total_xp + $2,
                total_workouts = user_stats.total_workouts + 1,
                total_minutes = user_stats.total_minutes + $3,
                total_calories = user_stats.total_calories + $4,
                current_streak = $5,
                best_streak = $6,
                last_workout_date = $7,
                updated_at = CURRENT_TIMESTAMP`,
            [userId, xpEarned, duration, calories, newStreak, bestStreak, today]
        );

        // Get updated stats
        const updatedStats = await pool.query(
            'SELECT * FROM user_stats WHERE user_id = $1',
            [userId]
        );

        res.json({
            message: 'Séance enregistrée !',
            session,
            stats: {
                totalXP: updatedStats.rows[0].total_xp,
                totalWorkouts: updatedStats.rows[0].total_workouts,
                totalMinutes: updatedStats.rows[0].total_minutes,
                totalCalories: updatedStats.rows[0].total_calories,
                currentStreak: newStreak,
                bestStreak: bestStreak
            }
        });
    } catch (error) {
        console.error('Complete session error:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// Get user's completed sessions
app.get('/api/sessions', authenticateToken, async (req, res) => {
    try {
        // Demo mode
        if (!pool) {
            const sessions = demoSessions.get(req.user.id) || [];
            return res.json({ sessions: sessions.slice().reverse().slice(0, 50) });
        }

        const result = await pool.query(
            `SELECT * FROM completed_sessions
             WHERE user_id = $1
             ORDER BY completed_at DESC
             LIMIT 50`,
            [req.user.id]
        );

        res.json({ sessions: result.rows });
    } catch (error) {
        console.error('Get sessions error:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// Get session with exercises
app.get('/api/sessions/:id', authenticateToken, async (req, res) => {
    try {
        const sessionResult = await pool.query(
            'SELECT * FROM completed_sessions WHERE id = $1 AND user_id = $2',
            [req.params.id, req.user.id]
        );

        if (sessionResult.rows.length === 0) {
            return res.status(404).json({ error: 'Séance non trouvée' });
        }

        const exercisesResult = await pool.query(
            'SELECT * FROM completed_exercises WHERE session_id = $1 ORDER BY id',
            [req.params.id]
        );

        res.json({
            session: sessionResult.rows[0],
            exercises: exercisesResult.rows
        });
    } catch (error) {
        console.error('Get session error:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// ==================== EXERCISES ROUTES ====================

// Rate an exercise
app.post('/api/exercises/rate', authenticateToken, async (req, res) => {
    try {
        const { sessionId, exerciseName, rating, notes } = req.body;

        // Check if already rated
        const existing = await pool.query(
            `SELECT id FROM completed_exercises
             WHERE session_id = $1 AND exercise_name = $2 AND user_id = $3`,
            [sessionId, exerciseName, req.user.id]
        );

        if (existing.rows.length > 0) {
            // Update existing
            await pool.query(
                `UPDATE completed_exercises
                 SET rating = $1, notes = $2
                 WHERE id = $3`,
                [rating, notes, existing.rows[0].id]
            );
        } else {
            // Insert new
            await pool.query(
                `INSERT INTO completed_exercises (user_id, session_id, exercise_name, rating, notes)
                 VALUES ($1, $2, $3, $4, $5)`,
                [req.user.id, sessionId, exerciseName, rating, notes]
            );
        }

        res.json({ message: 'Note enregistrée' });
    } catch (error) {
        console.error('Rate exercise error:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// ==================== SOCIAL ROUTES ====================

// Get all users with their stats (leaderboard)
app.get('/api/community/leaderboard', authenticateToken, async (req, res) => {
    try {
        // Demo mode
        if (!pool) {
            const leaderboard = [];
            for (const [username, user] of demoUsers) {
                const stats = demoStats.get(user.id) || {};
                leaderboard.push({
                    id: user.id,
                    username: user.username,
                    avatar: user.avatar || '🏀',
                    current_week: user.current_week || 1,
                    total_xp: stats.total_xp || 0,
                    total_workouts: stats.total_workouts || 0,
                    current_streak: stats.current_streak || 0,
                    best_streak: stats.best_streak || 0
                });
            }
            leaderboard.sort((a, b) => b.total_xp - a.total_xp);
            return res.json({ leaderboard: leaderboard.slice(0, 50) });
        }

        const result = await pool.query(
            `SELECT
                u.id, u.username, u.avatar, u.current_week,
                COALESCE(s.total_xp, 0) as total_xp,
                COALESCE(s.total_workouts, 0) as total_workouts,
                COALESCE(s.current_streak, 0) as current_streak,
                COALESCE(s.best_streak, 0) as best_streak
             FROM users u
             LEFT JOIN user_stats s ON u.id = s.user_id
             ORDER BY s.total_xp DESC NULLS LAST
             LIMIT 50`
        );

        res.json({ leaderboard: result.rows });
    } catch (error) {
        console.error('Get leaderboard error:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// Get recent activity from all users
app.get('/api/community/feed', authenticateToken, async (req, res) => {
    try {
        // Demo mode
        if (!pool) {
            const feed = [];
            for (const [userId, sessions] of demoSessions) {
                const user = [...demoUsers.values()].find(u => u.id === userId);
                if (user) {
                    for (const session of sessions) {
                        feed.push({
                            id: session.id,
                            session_name: session.session_name,
                            xp_earned: session.xp_earned,
                            duration: session.duration,
                            completed_at: session.completed_at,
                            user_id: userId,
                            username: user.username,
                            avatar: user.avatar || '🏀'
                        });
                    }
                }
            }
            feed.sort((a, b) => new Date(b.completed_at) - new Date(a.completed_at));
            return res.json({ feed: feed.slice(0, 30) });
        }

        const result = await pool.query(
            `SELECT
                cs.id, cs.session_name, cs.xp_earned, cs.duration, cs.completed_at,
                u.id as user_id, u.username, u.avatar
             FROM completed_sessions cs
             JOIN users u ON cs.user_id = u.id
             ORDER BY cs.completed_at DESC
             LIMIT 30`
        );

        res.json({ feed: result.rows });
    } catch (error) {
        console.error('Get feed error:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// Get specific user's profile
app.get('/api/community/user/:id', authenticateToken, async (req, res) => {
    try {
        const userResult = await pool.query(
            `SELECT
                u.id, u.username, u.avatar, u.current_week, u.created_at,
                COALESCE(s.total_xp, 0) as total_xp,
                COALESCE(s.total_workouts, 0) as total_workouts,
                COALESCE(s.total_minutes, 0) as total_minutes,
                COALESCE(s.current_streak, 0) as current_streak,
                COALESCE(s.best_streak, 0) as best_streak,
                COALESCE(s.badges, '[]') as badges
             FROM users u
             LEFT JOIN user_stats s ON u.id = s.user_id
             WHERE u.id = $1`,
            [req.params.id]
        );

        if (userResult.rows.length === 0) {
            return res.status(404).json({ error: 'Utilisateur non trouvé' });
        }

        const sessionsResult = await pool.query(
            `SELECT session_name, xp_earned, completed_at
             FROM completed_sessions
             WHERE user_id = $1
             ORDER BY completed_at DESC
             LIMIT 10`,
            [req.params.id]
        );

        res.json({
            user: userResult.rows[0],
            recentSessions: sessionsResult.rows
        });
    } catch (error) {
        console.error('Get user profile error:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// ==================== USER SETTINGS ====================

// Update user settings
app.patch('/api/user/settings', authenticateToken, async (req, res) => {
    try {
        const { avatar, currentWeek } = req.body;

        // Demo mode
        if (!pool) {
            const user = [...demoUsers.values()].find(u => u.id === req.user.id);
            if (user) {
                if (avatar) user.avatar = avatar;
                if (currentWeek) user.current_week = currentWeek;
            }
            return res.json({ message: 'Paramètres mis à jour' });
        }

        const updates = [];
        const values = [];
        let paramCount = 1;

        if (avatar) {
            updates.push(`avatar = $${paramCount++}`);
            values.push(avatar);
        }
        if (currentWeek) {
            updates.push(`current_week = $${paramCount++}`);
            values.push(currentWeek);
        }

        if (updates.length === 0) {
            return res.status(400).json({ error: 'Aucune modification' });
        }

        values.push(req.user.id);

        await pool.query(
            `UPDATE users SET ${updates.join(', ')} WHERE id = $${paramCount}`,
            values
        );

        res.json({ message: 'Paramètres mis à jour' });
    } catch (error) {
        console.error('Update settings error:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// Update badges
app.post('/api/user/badges', authenticateToken, async (req, res) => {
    try {
        const { badges } = req.body;

        // Demo mode
        if (!pool) {
            const stats = demoStats.get(req.user.id);
            if (stats) {
                stats.badges = JSON.stringify(badges);
            }
            return res.json({ message: 'Badges mis à jour' });
        }

        await pool.query(
            `UPDATE user_stats SET badges = $1 WHERE user_id = $2`,
            [JSON.stringify(badges), req.user.id]
        );

        res.json({ message: 'Badges mis à jour' });
    } catch (error) {
        console.error('Update badges error:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// ==================== CHAT DE GROUPE ====================

// Get chat messages
app.get('/api/chat/messages', authenticateToken, async (req, res) => {
    try {
        // Demo mode
        if (!pool) {
            const messages = demoGroupMessages.slice(-50).map(msg => {
                const user = [...demoUsers.values()].find(u => u.id === msg.user_id);
                return {
                    id: msg.id,
                    content: msg.content,
                    created_at: msg.created_at,
                    user_id: msg.user_id,
                    username: user?.username || 'Inconnu',
                    avatar: user?.avatar || '🏀'
                };
            });
            return res.json({ messages });
        }

        const result = await pool.query(
            `SELECT gm.id, gm.content, gm.created_at, gm.user_id,
                    u.username, u.avatar
             FROM group_messages gm
             JOIN users u ON gm.user_id = u.id
             ORDER BY gm.created_at DESC
             LIMIT 50`
        );

        res.json({ messages: result.rows.reverse() });
    } catch (error) {
        console.error('Get chat messages error:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// Send chat message
app.post('/api/chat/send', authenticateToken, async (req, res) => {
    try {
        const { content } = req.body;
        const userId = req.user.id;

        if (!content || content.trim().length === 0) {
            return res.status(400).json({ error: 'Message vide' });
        }

        if (content.length > 500) {
            return res.status(400).json({ error: 'Message trop long (max 500 caractères)' });
        }

        // Demo mode
        if (!pool) {
            const user = [...demoUsers.values()].find(u => u.id === userId);
            const message = {
                id: Date.now(),
                user_id: userId,
                content: content.trim(),
                created_at: new Date().toISOString(),
                username: user?.username || 'Inconnu',
                avatar: user?.avatar || '🏀'
            };
            demoGroupMessages.push(message);
            return res.json({ message });
        }

        const result = await pool.query(
            `INSERT INTO group_messages (user_id, content)
             VALUES ($1, $2)
             RETURNING id, content, created_at, user_id`,
            [userId, content.trim()]
        );

        const userResult = await pool.query(
            'SELECT username, avatar FROM users WHERE id = $1',
            [userId]
        );

        res.json({
            message: {
                ...result.rows[0],
                username: userResult.rows[0].username,
                avatar: userResult.rows[0].avatar
            }
        });
    } catch (error) {
        console.error('Send chat message error:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// ==================== SERVE FRONTEND ====================

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Start server
app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    await initDB();
});
