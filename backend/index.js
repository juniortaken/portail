import express from "express";
import mariadb from "mariadb";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

const app = express();
const corsOptions = {
  origin: "*",
};

// Configuration de la connexion à la base de données
const pool = mariadb.createPool({
  host: '31.207.36.150',
  user: 'root',
  password: 'wcl@2065@GOAL',
  database: 'c1pmb',
  connectionLimit: 150, // Augmentez le nombre maximal de connexions
  acquireTimeout: 10000,
  port: 3306,
});

// La fonction getConnection n'a pas besoin du mot-clé async ici
export function getConnection(callback) {
  pool.getConnection()
    .then(conn => {
      console.log("Connexion réussite");

      // Envoie la réponse au client avec le lien du serveur
      callback(null, { connection: conn, serverLink: 'http://votrelien.com' });
    })
    .catch(err => {
      console.log("Echec de votre connexion");
      callback(err);
    });
}

// MIDDLEWARES.
app.use(cors(corsOptions));
app.use(express.json());

app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: err.message,
    status: err.status,
    stack: err.stack,
  });
});

// Gestion de la fermeture de l'application
process.on('SIGINT', () => {
  // Utilisez la fonction correcte pour fermer la connexion à la base de données
  pool.end()
    .then(() => {
      console.log('Pool closed');
      process.exit();
    })
    .catch(err => {
      console.error('Error closing pool:', err);
      process.exit(1);
    });
});

const PORT = process.env.PORT || 8000;

// Utilisez getConnection correctement avec un rappel
app.listen(PORT, () => {
  getConnection((err, result) => {
    if (err) {
      console.error('Error connecting to database:', err);
      process.exit(1);
    }
    console.log(`Port successfully started at ${PORT}`);
    console.log(`Server link: ${result.serverLink}`);
  });
});
