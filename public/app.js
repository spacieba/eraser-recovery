// ============================================
// L'EFFACEUR - Application avec Auth & API
// ============================================

const API_URL = '';  // Same origin

// Programme complet (simplifié pour lisibilité)
const PROGRAM = {
    phase1: {
        name: "Reconditionnement",
        weeks: [1, 2],
        sessions: {
            A: { name: "Cardio + Bas du corps", day: "Lundi", duration: 60, calories: 450, xp: 150, icon: "🦵",
                blocks: [
                    { name: "ECHAUFFEMENT", duration: 10, exercises: [
                        { name: "Mobilite chevilles", reps: "20 cercles/cheville", icon: "🦶", instructions: ["Assis, 20 cercles par cheville"], tips: "Echauffez bien les articulations" },
                        { name: "Cat-Cow", reps: "15 reps", icon: "🐱", instructions: ["4 pattes, alterner dos rond/creux"], tips: "Respirez" },
                        { name: "Marche fente-genou", reps: "10m", icon: "🚶", instructions: ["Alterner jambes, serrer genoux"], tips: "Buste droit" }
                    ]},
                    { name: "BLOC CARDIO", duration: 20, exercises: [
                        { name: "Jumping Jacks", duration: 40, rest: 20, reps: "25-30", sets: 4, icon: "⭐", instructions: ["Pieds joints puis ecartes, bras en V"], tips: "Rythme regulier" },
                        { name: "Mountain Climbers", duration: 40, rest: 20, reps: "20-24", sets: 4, icon: "🏔️", instructions: ["Position pompe, alterner genoux"], tips: "Dos plat" },
                        { name: "Squat Pulses", duration: 40, rest: 20, reps: "40 sec", sets: 4, icon: "🔥", instructions: ["Squat 90, micro-mouvements"], tips: "Ca brule!" },
                        { name: "Shadow Boxing", duration: 40, rest: 20, reps: "40-50", sets: 4, icon: "🥊", instructions: ["Position semi-flechie, frappes"], tips: "Restez bas" },
                        { name: "Skaters", duration: 40, rest: 20, reps: "10-12/cote", sets: 4, icon: "⛸️", instructions: ["Sauts lateraux"], tips: "Controlez" }
                    ]},
                    { name: "RENFORCEMENT", duration: 25, exercises: [
                        { name: "Squats larges", reps: "3x12", rest: 90, icon: "🏋️", instructions: ["Pieds largeur epaules+10cm, descente 3sec"], tips: "Genoux alignes" },
                        { name: "Fentes statiques", reps: "3x10/jambe", rest: 60, icon: "🦿", instructions: ["Genou arriere a 5cm du sol"], tips: "Buste vertical" },
                        { name: "Pont fessier 1 jambe", reps: "3x12/jambe", rest: 45, icon: "🌉", instructions: ["Monter bassin, tenir 2sec"], tips: "Serrez fort" },
                        { name: "Mollets excentriques", reps: "3x8/jambe", rest: 60, icon: "🦶", instructions: ["Descente 5 sec sur 1 pied"], tips: "CRUCIAL!" }
                    ]},
                    { name: "RETOUR AU CALME", duration: 5, exercises: [
                        { name: "Etirements", duration: 300, reps: "5 min", icon: "🧘", instructions: ["Quadriceps, ischio, mollets"], tips: "Respirez" }
                    ]}
                ]
            },
            B: { name: "Explosivite + Haut du corps", day: "Mercredi", duration: 60, calories: 400, xp: 150, icon: "💪",
                blocks: [
                    { name: "ECHAUFFEMENT", duration: 10, exercises: [
                        { name: "Mobilite complete", reps: "5 min", icon: "🔄", instructions: ["Chevilles, hanches, epaules"], tips: "Prenez votre temps" },
                        { name: "Jumping jacks legers", reps: "20", icon: "⭐", instructions: ["Activation cardio"], tips: "Progressif" }
                    ]},
                    { name: "CARDIO-EXPLOSIF", duration: 20, exercises: [
                        { name: "High Knees", duration: 45, rest: 15, reps: "50-60", sets: 3, icon: "🏃", instructions: ["Course sur place, genoux 90"], tips: "Buste droit" },
                        { name: "Inchworms", duration: 45, rest: 15, reps: "6-8", sets: 3, icon: "🐛", instructions: ["Marcher mains vers planche"], tips: "Jambes tendues" },
                        { name: "Fentes alternees", duration: 45, rest: 15, reps: "14-16", sets: 3, icon: "🦿", instructions: ["Tempo controle"], tips: "Fluide" },
                        { name: "Plank Jacks", duration: 45, rest: 15, reps: "20-24", sets: 3, icon: "🧱", instructions: ["Planche, ecarter pieds"], tips: "Gainage" },
                        { name: "Butt Kicks", duration: 45, rest: 15, reps: "50-60", sets: 3, icon: "🦵", instructions: ["Talons vers fessiers"], tips: "Rapide" }
                    ]},
                    { name: "HAUT DU CORPS", duration: 25, exercises: [
                        { name: "Pompes", reps: "4x10-12", rest: 60, icon: "💪", instructions: ["Coudes 45, descendre a 5cm"], tips: "Qualite" },
                        { name: "Rowing elastique", reps: "3x15", rest: 45, icon: "🚣", instructions: ["Tirer coudes arriere"], tips: "Omoplates serrees" },
                        { name: "Gainage planche", duration: 45, reps: "3x45sec", rest: 60, icon: "🧱", instructions: ["Corps aligne"], tips: "Ne cambrez pas" },
                        { name: "Gainage lateral", duration: 30, reps: "3x30sec/cote", rest: 45, icon: "📐", instructions: ["Hanches hautes"], tips: "Stabilite" }
                    ]},
                    { name: "RETOUR AU CALME", duration: 5, exercises: [
                        { name: "Etirements haut", duration: 300, reps: "5 min", icon: "🧘", instructions: ["Epaules, pecs, dos"], tips: "Detendez-vous" }
                    ]}
                ]
            },
            C: { name: "Course + Coordination", day: "Samedi", duration: 60, calories: 500, xp: 175, icon: "🏀",
                blocks: [
                    { name: "ECHAUFFEMENT", duration: 10, exercises: [
                        { name: "Routine + Pas chasses", reps: "2x10m/sens", icon: "👟", instructions: ["Lateraux explosifs"], tips: "Restez bas" },
                        { name: "Course arriere", reps: "2x10m", icon: "🔙", instructions: ["Regardez par-dessus l'epaule"], tips: "Prudence" }
                    ]},
                    { name: "COURSE", duration: 30, exercises: [
                        { name: "Course continue", duration: 1200, reps: "20 min", icon: "🏃", instructions: ["65-70% FCmax"], tips: "Conversationnel" },
                        { name: "Intervalles VMA", duration: 120, rest: 60, reps: "3x2min", sets: 3, icon: "⚡", instructions: ["Vitesse soutenue"], tips: "Donnez tout!" }
                    ]},
                    { name: "BASKET COORDINATION", duration: 25, exercises: [
                        { name: "Appuis basket", reps: "3x10", icon: "🏀", instructions: ["Depart, feinte, equilibre"], tips: "Qualite appuis" },
                        { name: "Deplacements def", duration: 30, rest: 30, reps: "4x30sec", icon: "🛡️", instructions: ["Position basse, reactif"], tips: "Explosif" },
                        { name: "Side steps", reps: "3x8/cote", icon: "↔️", instructions: ["Reception 1 temps, equilibre"], tips: "Stabilisez" },
                        { name: "Power dribles", duration: 45, reps: "3x45sec", icon: "🏀", instructions: ["Dribles bas, forts"], tips: "Force et controle" }
                    ]},
                    { name: "RETOUR AU CALME", duration: 5, exercises: [
                        { name: "Etirements complets", duration: 300, reps: "5 min", icon: "🧘", instructions: ["Tous les muscles"], tips: "Bravo!" }
                    ]}
                ]
            },
            daily: { name: "Routine quotidienne", day: "Mar, Jeu, Ven, Dim", duration: 15, calories: 80, xp: 50, icon: "🌅",
                blocks: [
                    { name: "MOBILITE", duration: 3, exercises: [
                        { name: "Position chevalier", duration: 60, reps: "1min/cote", icon: "🦵", instructions: ["Ouvrir hanches"], tips: "Respirez" },
                        { name: "Flip flaps", duration: 60, reps: "1min", icon: "🦋", instructions: ["Genoux lateraux"], tips: "Fluide" }
                    ]},
                    { name: "GAINAGE", duration: 6, exercises: [
                        { name: "Planche", duration: 40, reps: "3x40sec", icon: "🧱", instructions: ["Corps aligne"], tips: "Tenez" },
                        { name: "Planche laterale", duration: 20, reps: "2x20sec/cote", icon: "📐", instructions: ["Hanches hautes"], tips: "Stable" },
                        { name: "Superman", reps: "3x10", icon: "🦸", instructions: ["Lever bras/jambes opposes"], tips: "Controle" }
                    ]},
                    { name: "PREVENTIF", duration: 6, exercises: [
                        { name: "Mollets excentriques", reps: "2x10/jambe", icon: "🦶", instructions: ["Descente 5sec"], tips: "NON NEGOCIABLE" },
                        { name: "Equilibre yeux fermes", duration: 30, reps: "3x30sec/pied", icon: "⚖️", instructions: ["Sur un pied"], tips: "Proprioception" },
                        { name: "Squats 1 jambe", reps: "2x8/jambe", icon: "🦿", instructions: ["Assiste au mur"], tips: "Stabilite" }
                    ]}
                ]
            }
        }
    },
    phase2: {
        name: "Reprise basket",
        weeks: [3, 4, 5],
        sessions: {
            A: { name: "ENTRAINEMENT BASKET", day: "Lundi", duration: 90, calories: 600, xp: 200, icon: "🏀", isBasketTraining: true, blocks: [] },
            B: { name: "Renforcement complet", day: "Mercredi", duration: 60, calories: 450, xp: 175, icon: "💪",
                blocks: [
                    { name: "ECHAUFFEMENT", duration: 8, exercises: [
                        { name: "Mobilite rapide", reps: "3min", icon: "🔄", instructions: ["Chevilles, hanches, epaules"], tips: "Complet" },
                        { name: "Activation cardio", duration: 60, reps: "1min", icon: "⭐", instructions: ["Jumping jacks + mountain climbers"], tips: "Progressif" }
                    ]},
                    { name: "CIRCUIT FULL BODY", duration: 40, exercises: [
                        { name: "Squats goblet", duration: 45, rest: 15, reps: "12-15", sets: 3, icon: "🏋️", instructions: ["Explosif a la montee"], tips: "Talons" },
                        { name: "Pompes completes", duration: 45, rest: 15, reps: "10-15", sets: 3, icon: "💪", instructions: ["Qualite avant quantite"], tips: "Descendez" },
                        { name: "Fentes sautees", duration: 45, rest: 15, reps: "8-12", sets: 3, icon: "🦿", instructions: ["Atterrissage controle"], tips: "Amorti" },
                        { name: "Rowing elastique", duration: 45, rest: 15, reps: "15-20", sets: 3, icon: "🚣", instructions: ["Omoplates serrees"], tips: "Dos" },
                        { name: "Russian Twists", duration: 45, rest: 15, reps: "20-24", sets: 3, icon: "🔄", instructions: ["Avec ballon"], tips: "Core" },
                        { name: "Burpees", duration: 45, rest: 15, reps: "8-12", sets: 3, icon: "🔥", instructions: ["Sans saut si fatigue"], tips: "Adaptez" },
                        { name: "Planche max", duration: 45, rest: 15, reps: "45sec", sets: 3, icon: "🧱", instructions: ["Tenez maximum"], tips: "Echec propre" }
                    ]},
                    { name: "FINISHER", duration: 10, exercises: [
                        { name: "Mollets", reps: "3x10/jambe", icon: "🦶", instructions: ["Excentriques"], tips: "Jamais negliger" },
                        { name: "Pont fessier", reps: "2x15", icon: "🌉", instructions: ["Contractez fort"], tips: "Fessiers" }
                    ]}
                ]
            },
            C: { name: "Course (optionnel)", day: "Samedi", duration: 30, calories: 250, xp: 100, icon: "🏃", optional: true,
                blocks: [
                    { name: "COURSE", duration: 30, exercises: [
                        { name: "Fractionne ou leger", duration: 1200, reps: "20-30min", icon: "🏃", instructions: ["Selon fatigue"], tips: "Ecoutez votre corps" }
                    ]}
                ]
            },
            D: { name: "ENTRAINEMENT BASKET", day: "Jeudi", duration: 90, calories: 600, xp: 200, icon: "🏀", isBasketTraining: true, blocks: [] },
            daily: { name: "Routine preventive", day: "Mar, Ven", duration: 15, calories: 80, xp: 50, icon: "🛡️",
                blocks: [
                    { name: "APRES BASKET", duration: 15, exercises: [
                        { name: "Mollets excentriques", reps: "3x8/jambe", icon: "🦶", instructions: ["NON NEGOCIABLE"], tips: "Prevention" },
                        { name: "Mobilite + gainage", duration: 300, reps: "5min", icon: "🧘", instructions: ["Chevilles, planche"], tips: "Recuperation" },
                        { name: "Etirements", duration: 300, reps: "5min", icon: "🧘", instructions: ["Complets"], tips: "Optimal" }
                    ]}
                ]
            }
        }
    }
};

const BADGES = [
    { id: 'first_workout', name: 'Premier Pas', icon: '🌟', desc: 'Premiere seance', condition: s => s.totalWorkouts >= 1 },
    { id: 'streak_3', name: 'En Feu', icon: '🔥', desc: '3 jours', condition: s => s.currentStreak >= 3 },
    { id: 'streak_7', name: 'Inarretable', icon: '💥', desc: '7 jours', condition: s => s.currentStreak >= 7 },
    { id: 'xp_500', name: 'Debutant', icon: '⭐', desc: '500 XP', condition: s => s.totalXP >= 500 },
    { id: 'xp_1000', name: 'Confirme', icon: '🌟', desc: '1000 XP', condition: s => s.totalXP >= 1000 },
    { id: 'xp_2500', name: 'Expert', icon: '💫', desc: '2500 XP', condition: s => s.totalXP >= 2500 },
    { id: 'basket_ready', name: 'Pret pour le Terrain', icon: '🏀', desc: 'Phase 2', condition: s => s.currentWeek >= 3 }
];

const QUOTES = ["L'Effaceur Is Back! 🏀", "Chaque seance compte!", "Tu es plus fort que tu le penses!", "Le terrain t'attend!", "Champion en construction!"];
const TIPS = ["Hydratation : 2,5-3L/jour", "Proteines : 1,6-1,8g/kg", "Sommeil : 7-8h minimum", "Mollets excentriques = CRUCIAL", "Douleur >4/10 = STOP"];

// State
let state = {
    user: null,
    token: null,
    currentWeek: 1,
    totalXP: 0,
    currentStreak: 0,
    bestStreak: 0,
    totalWorkouts: 0,
    totalMinutes: 0,
    totalCalories: 0,
    completedSessions: [],
    unlockedBadges: [],
    darkMode: false
};

let workoutState = {
    active: false,
    session: null,
    sessionKey: null,
    currentExerciseIndex: 0,
    exercises: [],
    exerciseRatings: [],
    timer: null,
    timeRemaining: 0,
    isPaused: true,
    isRest: false
};

const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);

// ==================== API CALLS ====================
async function apiCall(endpoint, options = {}) {
    const headers = { 'Content-Type': 'application/json' };
    if (state.token) headers['Authorization'] = `Bearer ${state.token}`;

    try {
        const res = await fetch(`${API_URL}${endpoint}`, { ...options, headers });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Erreur');
        return data;
    } catch (err) {
        console.error('API Error:', err);
        throw err;
    }
}

// ==================== AUTH ====================
async function register(username, email, password) {
    const data = await apiCall('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({ username, email, password })
    });
    state.token = data.token;
    state.user = data.user;
    localStorage.setItem('effaceur_token', data.token);
    return data;
}

async function login(email, password) {
    const data = await apiCall('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
    });
    state.token = data.token;
    state.user = data.user;
    Object.assign(state, data.stats);
    localStorage.setItem('effaceur_token', data.token);
    return data;
}

async function checkAuth() {
    const token = localStorage.getItem('effaceur_token');
    if (!token) return false;

    state.token = token;
    try {
        const data = await apiCall('/api/auth/me');
        state.user = data.user;
        Object.assign(state, data.stats);
        state.currentWeek = data.user.currentWeek || 1;
        return true;
    } catch {
        localStorage.removeItem('effaceur_token');
        state.token = null;
        return false;
    }
}

function logout() {
    localStorage.removeItem('effaceur_token');
    state.token = null;
    state.user = null;
    showAuthScreen();
}

// ==================== COMMUNITY ====================
async function loadLeaderboard() {
    try {
        const data = await apiCall('/api/community/leaderboard');
        renderLeaderboard(data.leaderboard);
    } catch (err) {
        $('#leaderboardList').innerHTML = '<div class="empty-state"><p>Erreur de chargement</p></div>';
    }
}

async function loadFeed() {
    try {
        const data = await apiCall('/api/community/feed');
        renderFeed(data.feed);
    } catch (err) {
        $('#feedList').innerHTML = '<div class="empty-state"><p>Erreur de chargement</p></div>';
    }
}

async function loadUserProfile(userId) {
    try {
        const data = await apiCall(`/api/community/user/${userId}`);
        showUserProfileModal(data);
    } catch (err) {
        console.error('Error loading profile:', err);
    }
}

// ==================== SESSIONS ====================
async function completeSessionAPI(sessionData) {
    try {
        const data = await apiCall('/api/sessions/complete', {
            method: 'POST',
            body: JSON.stringify(sessionData)
        });
        Object.assign(state, data.stats);
        return data;
    } catch (err) {
        console.error('Error completing session:', err);
        // Fallback: save locally
        return null;
    }
}

async function loadHistory() {
    try {
        const data = await apiCall('/api/sessions');
        state.completedSessions = data.sessions;
        renderHistory();
    } catch (err) {
        console.error('Error loading history:', err);
    }
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', async () => {
    // Check auth after splash
    setTimeout(async () => {
        $('#splash').classList.add('hidden');

        const isAuth = await checkAuth();
        if (isAuth) {
            showApp();
        } else {
            showAuthScreen();
        }
    }, 2000);
});

function showAuthScreen() {
    $('#authScreen').classList.remove('hidden');
    $('#app').classList.add('hidden');
    setupAuthHandlers();
}

function showApp() {
    $('#authScreen').classList.add('hidden');
    $('#app').classList.remove('hidden');
    initApp();
}

function setupAuthHandlers() {
    // Toggle forms
    $('#showRegister')?.addEventListener('click', e => {
        e.preventDefault();
        $('#loginForm').classList.add('hidden');
        $('#registerForm').classList.remove('hidden');
    });

    $('#showLogin')?.addEventListener('click', e => {
        e.preventDefault();
        $('#registerForm').classList.add('hidden');
        $('#loginForm').classList.remove('hidden');
    });

    // Login
    $('#loginBtn')?.addEventListener('click', async () => {
        const email = $('#loginEmail').value;
        const password = $('#loginPassword').value;
        const errorDiv = $('#loginError');

        try {
            errorDiv.classList.add('hidden');
            await login(email, password);
            showApp();
        } catch (err) {
            errorDiv.textContent = err.message;
            errorDiv.classList.remove('hidden');
        }
    });

    // Register
    $('#registerBtn')?.addEventListener('click', async () => {
        const username = $('#registerUsername').value;
        const email = $('#registerEmail').value;
        const password = $('#registerPassword').value;
        const errorDiv = $('#registerError');

        try {
            errorDiv.classList.add('hidden');
            await register(username, email, password);
            showApp();
        } catch (err) {
            errorDiv.textContent = err.message;
            errorDiv.classList.remove('hidden');
        }
    });

    // Enter key
    ['#loginPassword', '#registerPassword'].forEach(sel => {
        $(sel)?.addEventListener('keypress', e => {
            if (e.key === 'Enter') {
                $(sel === '#loginPassword' ? '#loginBtn' : '#registerBtn').click();
            }
        });
    });
}

function initApp() {
    setupNavigation();
    setupSettings();
    renderHome();
    renderWorkout();
    renderProgress();
    renderProfile();
    loadHistory();

    if (state.darkMode) {
        document.body.classList.add('light-mode');
        $('#darkModeToggle').checked = true;
    }
}

function setupNavigation() {
    $$('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;
            $$('.tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            $$('.page').forEach(p => p.classList.remove('active'));
            $(`#${tabName}`).classList.add('active');

            if (tabName === 'community') {
                loadLeaderboard();
                loadFeed();
            }
        });
    });
}

function setupSettings() {
    $('#darkModeToggle')?.addEventListener('change', e => {
        state.darkMode = e.target.checked;
        document.body.classList.toggle('light-mode', state.darkMode);
    });

    $('#weekSelect')?.addEventListener('change', async e => {
        state.currentWeek = parseInt(e.target.value);
        try {
            await apiCall('/api/user/settings', {
                method: 'PATCH',
                body: JSON.stringify({ currentWeek: state.currentWeek })
            });
        } catch {}
        renderHome();
        renderWorkout();
    });

    $('#logoutBtn')?.addEventListener('click', logout);
    $('#weekSelect').value = state.currentWeek;
}

// ==================== RENDER FUNCTIONS ====================
function renderHome() {
    $('#currentWeek').textContent = state.currentWeek;
    $('#currentPhase').textContent = state.currentWeek <= 2 ? 'Phase 1' : 'Phase 2';
    $('#motivationQuote').textContent = QUOTES[Math.floor(Math.random() * QUOTES.length)];

    renderTodayCard();
    renderWeekDays();

    $('#completedSessions').textContent = state.totalWorkouts;
    $('#totalMinutes').textContent = state.totalMinutes;
    $('#calories').textContent = state.totalCalories;
    $('#streakCount').textContent = state.currentStreak;
    $('#xpCount').textContent = state.totalXP;
}

function renderTodayCard() {
    const today = new Date().getDay();
    const dayNames = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const phase = state.currentWeek <= 2 ? PROGRAM.phase1 : PROGRAM.phase2;

    let sessionKey = null;
    if (state.currentWeek <= 2) {
        if (today === 1) sessionKey = 'A';
        else if (today === 3) sessionKey = 'B';
        else if (today === 6) sessionKey = 'C';
        else sessionKey = 'daily';
    } else {
        if (today === 1 || today === 4) sessionKey = 'A';
        else if (today === 3) sessionKey = 'B';
        else if (today === 6) sessionKey = 'C';
        else if (today === 2 || today === 5) sessionKey = 'daily';
    }

    const session = sessionKey ? phase.sessions[sessionKey] : null;

    if (session) {
        $('#todayCard').innerHTML = `
            <div class="session-type">
                <span class="session-icon">${session.icon}</span>
                <div>
                    <div class="session-name">${session.name}</div>
                    <div class="session-duration">${dayNames[today]} - ${session.duration} min</div>
                </div>
            </div>
            <div class="session-preview">
                ${session.blocks?.slice(0,2).map(b => `<span class="preview-tag">${b.name}</span>`).join('') || '<span class="preview-tag">Entrainement</span>'}
            </div>
        `;
        $('#todayCard').onclick = () => {
            $$('.tab')[1].click();
            selectSession(sessionKey);
        };
    } else {
        $('#todayCard').innerHTML = `
            <div class="session-type">
                <span class="session-icon">😴</span>
                <div><div class="session-name">Jour de repos</div><div class="session-duration">${dayNames[today]}</div></div>
            </div>
        `;
    }
}

function renderWeekDays() {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay() + 1);

    const dayLabels = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    let html = '';

    for (let i = 0; i < 7; i++) {
        const date = new Date(startOfWeek);
        date.setDate(startOfWeek.getDate() + i);
        const isToday = date.toDateString() === today.toDateString();
        const dateStr = date.toISOString().split('T')[0];
        const isCompleted = state.completedSessions.some(s => s.completed_at?.split('T')[0] === dateStr);

        let icon = state.currentWeek <= 2
            ? (i === 0 ? '🦵' : i === 2 ? '💪' : i === 5 ? '🏀' : '🌅')
            : (i === 0 || i === 3 ? '🏀' : i === 2 ? '💪' : i === 5 ? '🏃' : '🛡️');

        html += `<div class="day-card ${isToday ? 'today' : ''} ${isCompleted ? 'completed' : ''}">
            <span class="day-name">${dayLabels[i]}</span>
            <span class="day-number">${date.getDate()}</span>
            <span class="day-type">${isCompleted ? '✅' : icon}</span>
        </div>`;
    }

    $('#weekDays').innerHTML = html;
}

function renderWorkout() {
    $$('.workout-tab').forEach(tab => {
        tab.addEventListener('click', () => selectSession(tab.dataset.session));
    });
    selectSession('A');
    $('#startWorkoutBtn').onclick = startWorkout;
}

function selectSession(sessionKey) {
    const phase = state.currentWeek <= 2 ? PROGRAM.phase1 : PROGRAM.phase2;
    const session = phase.sessions[sessionKey];
    if (!session) return;

    $$('.workout-tab').forEach(t => t.classList.remove('active'));
    $(`.workout-tab[data-session="${sessionKey}"]`)?.classList.add('active');

    workoutState.session = session;
    workoutState.sessionKey = sessionKey;

    $('#sessionInfo').innerHTML = `
        <h2>${session.icon} ${session.name}</h2>
        <p>${session.day}</p>
        <div class="session-meta">
            <span class="meta-item">⏱️ ${session.duration} min</span>
            <span class="meta-item">🔥 ${session.calories} cal</span>
            <span class="meta-item">⚡ +${session.xp} XP</span>
        </div>
    `;

    if (session.isBasketTraining) {
        $('#exerciseList').innerHTML = `
            <div class="exercise-item" style="text-align:center;padding:40px">
                <div style="font-size:4rem;margin-bottom:15px">🏀</div>
                <h3>Entrainement basket avec l'equipe</h3>
                <p style="color:var(--gray);margin-top:10px">N'oublie pas la routine preventive apres!</p>
            </div>
        `;
        $('#startWorkoutBtn').innerHTML = '<span class="btn-icon">✅</span><span class="btn-text">Marquer comme termine</span>';
    } else {
        let num = 1, html = '';
        session.blocks.forEach(block => {
            html += `<div style="margin:15px 0 10px;color:var(--secondary);font-size:0.8rem;font-weight:600">${block.name}</div>`;
            block.exercises.forEach(ex => {
                html += `
                    <div class="exercise-item" data-exercise='${JSON.stringify(ex)}'>
                        <div class="exercise-number">${num++}</div>
                        <div class="exercise-info"><h4>${ex.name}</h4><p>${ex.reps}${ex.rest ? ` - ${ex.rest}s repos` : ''}</p></div>
                        <span class="exercise-badge">${ex.icon}</span>
                    </div>
                `;
            });
        });
        $('#exerciseList').innerHTML = html;
        $('#startWorkoutBtn').innerHTML = '<span class="btn-icon">▶️</span><span class="btn-text">Demarrer la seance</span>';

        $$('.exercise-item').forEach(item => {
            if (item.dataset.exercise) {
                item.addEventListener('click', () => showExerciseDetail(JSON.parse(item.dataset.exercise)));
            }
        });
    }
}

function showExerciseDetail(ex) {
    $('#detailIcon').textContent = ex.icon;
    $('#detailName').textContent = ex.name;
    $('#detailInstructions').innerHTML = (ex.instructions || []).map(i => `<li>${i}</li>`).join('');
    $('#detailTips').textContent = ex.tips || '';
    $('#exerciseDetailModal').classList.remove('hidden');
    $('#closeExerciseDetail').onclick = () => $('#exerciseDetailModal').classList.add('hidden');
    $('#gotItBtn').onclick = () => $('#exerciseDetailModal').classList.add('hidden');
}

// ==================== WORKOUT MODE ====================
function startWorkout() {
    const session = workoutState.session;
    if (session.isBasketTraining) {
        completeWorkout();
        return;
    }

    workoutState.exercises = [];
    session.blocks.forEach(block => {
        block.exercises.forEach(ex => workoutState.exercises.push({ ...ex, block: block.name }));
    });

    workoutState.active = true;
    workoutState.currentExerciseIndex = 0;
    workoutState.exerciseRatings = [];
    workoutState.isPaused = true;
    workoutState.isRest = false;

    $('#workoutModal').classList.remove('hidden');

    $('#closeWorkout').onclick = () => {
        if (confirm('Quitter la seance?')) endWorkout(false);
    };
    $('#playPauseBtn').onclick = togglePause;
    $('#prevExercise').onclick = prevExercise;
    $('#nextExercise').onclick = nextExercise;
    $('#skipBtn').onclick = nextExercise;

    renderCurrentExercise();
}

function renderCurrentExercise() {
    const ex = workoutState.exercises[workoutState.currentExerciseIndex];
    if (!ex) { completeWorkout(); return; }

    $('#exerciseCounter').textContent = `${workoutState.currentExerciseIndex + 1}/${workoutState.exercises.length}`;
    $('#exercisePhase').textContent = ex.block;
    $('#exerciseName').textContent = ex.name;
    $('#exerciseDemo').textContent = ex.icon;
    $('#exerciseInstructions').textContent = ex.instructions?.[0] || '';

    if (ex.reps) {
        $('.reps-value').textContent = ex.reps.split(' ')[0];
        $('.reps-label').textContent = ex.reps.includes('sec') ? 'secondes' : 'repetitions';
    }

    if (ex.duration) {
        workoutState.timeRemaining = ex.duration;
        updateTimerDisplay();
        $('#timerSection').style.display = 'flex';
    } else {
        $('#timerSection').style.display = 'none';
    }

    workoutState.isRest = false;
    $('#timerLabel').textContent = 'TRAVAIL';
    updatePlayButton();
}

function togglePause() {
    workoutState.isPaused = !workoutState.isPaused;
    workoutState.isPaused ? stopTimer() : startTimer();
    updatePlayButton();
}

function updatePlayButton() {
    $('#playPauseBtn').textContent = workoutState.isPaused ? '▶️' : '⏸️';
}

function startTimer() {
    const ex = workoutState.exercises[workoutState.currentExerciseIndex];
    if (!ex?.duration) return;

    workoutState.timer = setInterval(() => {
        workoutState.timeRemaining--;
        updateTimerDisplay();

        if (workoutState.timeRemaining <= 0) {
            stopTimer();
            if (workoutState.isRest) {
                nextExercise();
            } else if (ex.rest) {
                workoutState.isRest = true;
                workoutState.timeRemaining = ex.rest;
                $('#timerLabel').textContent = 'REPOS';
                startTimer();
            } else {
                nextExercise();
            }
        }
    }, 1000);
}

function stopTimer() {
    if (workoutState.timer) {
        clearInterval(workoutState.timer);
        workoutState.timer = null;
    }
}

function updateTimerDisplay() {
    const ex = workoutState.exercises[workoutState.currentExerciseIndex];
    if (!ex) return;

    const min = Math.floor(workoutState.timeRemaining / 60);
    const sec = workoutState.timeRemaining % 60;
    $('#timerDisplay').textContent = `${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;

    const total = workoutState.isRest ? (ex.rest || 20) : ex.duration;
    const progress = (total - workoutState.timeRemaining) / total;
    $('#timerProgress').style.strokeDashoffset = 283 * (1 - progress);
    $('#timerProgress').style.stroke = workoutState.isRest ? 'var(--secondary)' : 'var(--primary)';
}

function prevExercise() {
    stopTimer();
    workoutState.isPaused = true;
    if (workoutState.currentExerciseIndex > 0) {
        workoutState.currentExerciseIndex--;
        renderCurrentExercise();
    }
}

function nextExercise() {
    stopTimer();
    workoutState.isPaused = true;

    // Show rating modal for completed exercise
    const ex = workoutState.exercises[workoutState.currentExerciseIndex];
    if (ex) {
        showRatingModal(ex.name, () => {
            workoutState.currentExerciseIndex++;
            if (workoutState.currentExerciseIndex >= workoutState.exercises.length) {
                completeWorkout();
            } else {
                renderCurrentExercise();
            }
        });
    }
}

function showRatingModal(exerciseName, callback) {
    $('#ratingExerciseName').textContent = exerciseName;
    $('#ratingModal').classList.remove('hidden');

    let selectedRating = 0;
    $$('.star-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.onclick = () => {
            selectedRating = parseInt(btn.dataset.rating);
            $$('.star-btn').forEach((b, i) => {
                b.classList.toggle('active', i < selectedRating);
            });
        };
    });

    $('#skipRatingBtn').onclick = () => {
        $('#ratingModal').classList.add('hidden');
        callback();
    };

    $('#submitRatingBtn').onclick = () => {
        const notes = $('#ratingNotes').value;
        workoutState.exerciseRatings.push({ name: exerciseName, rating: selectedRating, notes });
        $('#ratingNotes').value = '';
        $('#ratingModal').classList.add('hidden');
        callback();
    };
}

function endWorkout(completed) {
    stopTimer();
    workoutState.active = false;
    $('#workoutModal').classList.add('hidden');
}

async function completeWorkout() {
    const session = workoutState.session;

    // Save to API
    const sessionData = {
        sessionKey: workoutState.sessionKey,
        sessionName: session.name,
        xpEarned: session.xp,
        duration: session.duration,
        calories: session.calories,
        exercises: workoutState.exerciseRatings
    };

    await completeSessionAPI(sessionData);

    // Update local state
    state.totalXP += session.xp;
    state.totalWorkouts++;
    state.totalMinutes += session.duration;
    state.totalCalories += session.calories;
    state.currentStreak++;
    state.bestStreak = Math.max(state.bestStreak, state.currentStreak);

    // Check badges
    const newBadges = checkNewBadges();

    endWorkout(true);
    showCompletionModal(session, newBadges);

    renderHome();
    renderProgress();
    renderProfile();
    loadHistory();
}

function checkNewBadges() {
    const newBadges = [];
    BADGES.forEach(badge => {
        if (!state.unlockedBadges.includes(badge.id) && badge.condition(state)) {
            state.unlockedBadges.push(badge.id);
            newBadges.push(badge);
        }
    });

    if (newBadges.length > 0) {
        apiCall('/api/user/badges', {
            method: 'POST',
            body: JSON.stringify({ badges: state.unlockedBadges })
        }).catch(() => {});
    }

    return newBadges;
}

function showCompletionModal(session, newBadges) {
    $('#earnedXP').textContent = `+${session.xp}`;
    $('#sessionDuration').textContent = session.duration;
    $('#sessionCalories').textContent = session.calories;

    if (newBadges.length > 0) {
        $('#newBadges').innerHTML = `<h3>🎊 Nouveaux badges!</h3>${newBadges.map(b => `<div class="new-badge">${b.icon} ${b.name}</div>`).join('')}`;
    } else {
        $('#newBadges').innerHTML = '';
    }

    createConfetti();
    $('#completionModal').classList.remove('hidden');
    $('#completionBtn').onclick = () => $('#completionModal').classList.add('hidden');
}

function createConfetti() {
    const confetti = $('#confetti');
    confetti.innerHTML = '';
    const colors = ['#FF6B35', '#4ECDC4', '#FFE66D', '#2ECC71', '#E74C3C'];
    for (let i = 0; i < 50; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = Math.random() * 100 + '%';
        piece.style.background = colors[Math.floor(Math.random() * colors.length)];
        piece.style.animationDelay = Math.random() * 2 + 's';
        piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.appendChild(piece);
    }
}

// ==================== COMMUNITY RENDER ====================
function renderLeaderboard(users) {
    if (!users?.length) {
        $('#leaderboardList').innerHTML = '<div class="empty-state"><div class="empty-icon">👥</div><p>Aucun utilisateur</p></div>';
        return;
    }

    $('#leaderboardList').innerHTML = users.map((u, i) => `
        <div class="leaderboard-item ${u.id === state.user?.id ? 'current-user' : ''}" data-user-id="${u.id}">
            <div class="leaderboard-rank">${i + 1}</div>
            <div class="leaderboard-avatar">${u.avatar || '🏀'}</div>
            <div class="leaderboard-info">
                <h4>${u.username}</h4>
                <p>Semaine ${u.current_week} - 🔥 ${u.current_streak}</p>
            </div>
            <div class="leaderboard-xp">
                <span class="xp-value">${u.total_xp}</span>
                <span class="xp-label">XP</span>
            </div>
        </div>
    `).join('');

    $$('.leaderboard-item').forEach(item => {
        item.addEventListener('click', () => loadUserProfile(item.dataset.userId));
    });
}

function renderFeed(activities) {
    if (!activities?.length) {
        $('#feedList').innerHTML = '<div class="empty-state"><div class="empty-icon">📣</div><p>Aucune activite recente</p></div>';
        return;
    }

    $('#feedList').innerHTML = activities.slice(0, 15).map(a => {
        const date = new Date(a.completed_at);
        const timeAgo = getTimeAgo(date);
        return `
            <div class="feed-item">
                <div class="feed-avatar">${a.avatar || '🏀'}</div>
                <div class="feed-content">
                    <p><strong>${a.username}</strong> a termine ${a.session_name}</p>
                    <div class="feed-meta">
                        <span>${timeAgo}</span>
                        <span class="feed-xp">+${a.xp_earned} XP</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function getTimeAgo(date) {
    const now = new Date();
    const diff = Math.floor((now - date) / 1000);
    if (diff < 60) return 'A l\'instant';
    if (diff < 3600) return `Il y a ${Math.floor(diff/60)} min`;
    if (diff < 86400) return `Il y a ${Math.floor(diff/3600)}h`;
    return `Il y a ${Math.floor(diff/86400)}j`;
}

function showUserProfileModal(data) {
    const u = data.user;
    $('#profileModalAvatar').textContent = u.avatar || '🏀';
    $('#profileModalName').textContent = u.username;
    $('#profileModalWeek').textContent = `Semaine ${u.current_week}`;
    $('#profileModalXP').textContent = u.total_xp;
    $('#profileModalWorkouts').textContent = u.total_workouts;
    $('#profileModalStreak').textContent = u.current_streak;

    $('#profileModalSessions').innerHTML = data.recentSessions?.map(s => `
        <div class="session-item">
            <span>${s.session_name}</span>
            <span>${new Date(s.completed_at).toLocaleDateString('fr-FR')}</span>
        </div>
    `).join('') || '<p style="color:var(--gray)">Aucune seance</p>';

    $('#userProfileModal').classList.remove('hidden');
    $('#closeUserProfile').onclick = () => $('#userProfileModal').classList.add('hidden');
}

// ==================== PROGRESS & PROFILE ====================
function renderProgress() {
    // Weekly chart
    const weeklyData = [0, 0, 0, 0, 0];
    state.completedSessions.forEach(s => {
        const week = getWeekFromDate(new Date(s.completed_at));
        if (week >= 1 && week <= 5) weeklyData[week - 1]++;
    });

    $('#weeklyChart').innerHTML = weeklyData.map((val, i) => {
        const height = Math.max(20, (val / 4) * 100);
        return `<div class="chart-bar ${i + 1 === state.currentWeek ? 'active' : ''}" style="height:${height}%">
            <span class="bar-value">${val}</span>
            <span class="bar-label">S${i + 1}</span>
        </div>`;
    }).join('');

    // Badges
    $('#badgesGrid').innerHTML = BADGES.map(b => `
        <div class="badge-item ${state.unlockedBadges.includes(b.id) ? 'unlocked' : 'locked'}">
            <span class="badge-icon">${b.icon}</span>
            <span class="badge-name">${b.name}</span>
        </div>
    `).join('');

    renderHistory();
}

function renderHistory() {
    const sessions = state.completedSessions.slice(-10).reverse();
    if (!sessions.length) {
        $('#historyList').innerHTML = '<div class="empty-state"><p>Aucune seance terminee</p></div>';
        return;
    }

    $('#historyList').innerHTML = sessions.map(s => `
        <div class="history-item">
            <span class="history-icon">✅</span>
            <div class="history-info">
                <h4>${s.session_name}</h4>
                <p>${new Date(s.completed_at).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'short' })}</p>
            </div>
            <span class="history-xp">+${s.xp_earned} XP</span>
        </div>
    `).join('');
}

function getWeekFromDate(date) {
    // Simplified: just return current week setting
    return state.currentWeek;
}

function renderProfile() {
    const level = Math.floor(state.totalXP / 500) + 1;
    const xpInLevel = state.totalXP % 500;
    const progress = (xpInLevel / 500) * 100;

    $('#userAvatar').textContent = state.user?.avatar || '🏀';
    $('#userName').textContent = state.user?.username || 'L\'Effaceur';
    $('#levelBadge').textContent = `Niv. ${level}`;
    $('#levelFill').style.width = `${progress}%`;
    $('#levelText').textContent = `${xpInLevel} / 500 XP`;

    $('#totalWorkouts').textContent = state.totalWorkouts;
    $('#bestStreak').textContent = state.bestStreak;
    $('#totalXP').textContent = state.totalXP;

    $('#tipCard').innerHTML = `<p>${TIPS[Math.floor(Math.random() * TIPS.length)]}</p>`;
}
