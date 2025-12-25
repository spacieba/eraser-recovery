# L'Effaceur - Application de Reconditionnement Basket

Application PWA pour suivre un programme de remise en forme basket sur 5 semaines.

## Fonctionnalites

- Systeme d'inscription/connexion
- Suivi des seances avec timer interactif
- Notation des exercices
- Gamification (XP, badges, streaks)
- Classement et activite des autres utilisateurs
- Mode hors-ligne (PWA)

## Deploiement sur Railway

1. Connectez votre repo GitHub a Railway
2. Ajoutez un service PostgreSQL
3. Les variables d'environnement seront configurees automatiquement

### Variables d'environnement

- `DATABASE_URL` - URL de connexion PostgreSQL (fournie par Railway)
- `JWT_SECRET` - Cle secrete pour les tokens JWT (optionnel, defaut fourni)
- `PORT` - Port du serveur (configure automatiquement par Railway)

## Developpement local

```bash
npm install
npm start
```

Le serveur demarre sur http://localhost:3000

## Structure

```
/public          - Frontend (HTML, CSS, JS)
/server          - Backend Node.js/Express
  index.js       - Serveur principal avec API
/package.json    - Dependances
```

## API Endpoints

### Auth
- `POST /api/auth/register` - Inscription
- `POST /api/auth/login` - Connexion
- `GET /api/auth/me` - Utilisateur courant

### Sessions
- `POST /api/sessions/complete` - Terminer une seance
- `GET /api/sessions` - Historique des seances

### Communaute
- `GET /api/community/leaderboard` - Classement
- `GET /api/community/feed` - Activite recente
- `GET /api/community/user/:id` - Profil utilisateur

---

L'Effaceur Is Back! 🏀
