const Sequelize = require('sequelize');

// Initialize database call to your Postgres DB with sequelize
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/pokemonlive'
);

module.exports = db;
