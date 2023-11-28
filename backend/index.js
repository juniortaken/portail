import express from "express";
import mariadb from "mariadb";
import dotenv from "dotenv";
import userRoute from "./route/userRoute.js";
import bookRoute from "./route/bookRoute.js";
dotenv.config();
import cors from "cors";

const app = express();
const corsOptions = {
  origin: "*",
};

// Configuration de la connexion à la base de données
const pool = mariadb.createPool({
  host: 'localhost',
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
      console.log("Connection successful");
      // Envoie la réponse au client avec le lien du serveur
      callback(null, { connection: conn});
    })
    .catch(err => {
      console.log("Echec de votre connexion");
      callback(err);
    });
}


// MIDDLEWARES.
app.use(cors(corsOptions));
app.use(express.json());
app.use("/user", userRoute); // user routes.
app.use("/books", bookRoute); // book routes.
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
try {
  app.listen(PORT,'0.0.0.0', () => {
    getConnection((err) => {
      if (err) {
        console.error('Error connecting to database:', err);
        process.exit(1);
      }
         host = app.address().address;
        port = app.address().port;
        console.log('App listening at http://%s:%s', host, port);
    });

  });
} catch (error) {
  console.error('Error starting the server:', error);
  process.exit(1);
}

