const Sequelize = require('sequelize');

const db = require('../db');

// Define model with db.define('tableName,{Object containing key{column} and value{datatype}})
const Pokemon = db.define('pokemon', {
  nickname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  species: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  pokeTypes: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  image: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  favorite: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  pokeIndex: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Pokemon;
