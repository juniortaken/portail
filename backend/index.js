import express from 'express';
import { Sequelize, DataTypes } from 'sequelize';

// Configuration de la base de données
const sequelize = new Sequelize('c1pmb', 'root', 'wcl@2065@GOAL', {
  host: '31.207.36.150',
  dialect: 'mariadb',
  port: 3306,
  logging: false,
  dialectOptions: {
    connectTimeout: 30000, // Temps d'attente en millisecondes (30 secondes dans cet exemple)
  }, // Vous pouvez définir cela sur true pour voir les journaux SQL dans la console
});

// Définir un modèle simple
const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Créer la table si elle n'existe pas déjà
sequelize.sync()
  .then(() => {
    console.log('Base de données synchronisée');
  })
  .catch((err) => {
    console.error('Erreur de synchronisation de la base de données :', err);
  });

// Créer une application Express
const app = express();

// Route pour récupérer tous les utilisateurs
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs :', error);
    res.status(500).send('Erreur interne du serveur');
  }
});

// Port d'écoute
const port = 3000;

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur http://localhost:${port}`);
});
