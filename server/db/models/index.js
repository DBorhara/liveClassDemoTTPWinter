const Pokemon = require('./pokemon');
const Trainer = require('./trainers');

//Associations go in here!
// https://sequelize.org/master/manual/assocs.html
Pokemon.belongsTo(Trainer);
Trainer.hasMany(Pokemon);

module.exports = { Pokemon, Trainer };
