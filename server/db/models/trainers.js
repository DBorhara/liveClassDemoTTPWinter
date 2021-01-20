const Sequelize = require('sequelize');

const db = require('../db');


// Define model with db.define('tableName,{Object containing key{column} and value{datatype}})
const Trainer = db.define('trainer', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  age: {
    type: Sequelize.INTEGER,
  },
  champion: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  gymBadgeCount: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  region: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  mostUsedPokemon: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
});

module.exports = Trainer;
