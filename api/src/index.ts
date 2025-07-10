import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';

const app = express();
const PORT = process.env.PORT || 3001;

// Sécurité HTTP headers
app.use(helmet());

// CORS (autorise tout, à adapter selon besoin)
app.use(cors());

// Limite de requêtes pour limiter les attaques DDoS
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limite chaque IP à 100 requêtes par fenêtre
    standardHeaders: true,
    legacyHeaders: false,
    message: 'Too many requests, please try again later.',
  })
);

// ✅ Middleware pour parser les requêtes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Ensuite seulement, les protections
app.use(mongoSanitize());
app.use(xss());

// Endpoint de base pour vérifier que l'API fonctionne
app.get('/', (req, res) => {
  res.json({ message: 'Astron API is running!' });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🚀 Astron API listening on port ${PORT}`);
});