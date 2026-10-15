# MERN Single Page App (Home · About · Contact us)

One-page website built with **MongoDB, Express, React (Vite) and Node**.
The Contact form saves messages to MongoDB.

```
mern-single-page-app/
├── client/            React app (Home, About, Contact sections)
│   └── src/content.js ← edit this to change all website text
├── server/            Express API + MongoDB model
├── .env.example       Copy to .env
└── package.json       Root scripts
```

## 1. Install
```bash
npm run install-all
```

## 2. Configure
```bash
cp .env.example .env      # Windows: copy .env.example .env
```
Set `MONGO_URI` (local MongoDB or MongoDB Atlas).

## 3. Run in development
```bash
npm run dev
```
- React app: http://localhost:3000
- API: http://localhost:5000/api/health

## 4. Production build (single server serves everything)
```bash
npm run build
npm start                 # http://localhost:5000
```

## Deploying (e.g. Render, Railway, or an AWS EC2 server)
- **Build command:** `npm install && npm run build`
- **Start command:** `npm start`
- **Environment variables:** `MONGO_URI` (and optionally `PORT`; most hosts set it for you)
- On EC2: install Node 18+, clone/upload the project, run the build and start commands, and
  keep it running with `pm2 start server/server.js --name mernsite`. Put nginx in front for port 80.
- If you use MongoDB Atlas, allow your server's IP address in Atlas Network Access.

## API
| Method | Endpoint       | Body                          |
|--------|----------------|-------------------------------|
| POST   | /api/contact   | `{ name, email, message }`    |
| GET    | /api/health    | –                             |

Messages are stored in the `messages` collection. View them in MongoDB Compass or Atlas.
