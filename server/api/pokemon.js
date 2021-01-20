const router = require('express').Router();
const { Pokemon } = require('../db/models');
module.exports = router;

//localhost:8080/api/pokemon
router.get('/', async (req, res, next) => {
  console.log('req.query', req.query);
  try {
    const allPokemon = await Pokemon.findAll();
    res.json(allPokemon);
    // console.log(gen1.data.results);
  } catch (error) {
    next(error);
  }
});

//Create New Pokemon
router.post('/newPokemon', async (req, res, next) => {
  console.log('req.body', req.body);
  try {
    let newPokemon = await Pokemon.create(req.body);
    res.status(201).send(newPokemon);
  } catch (error) {
    next(error);
  }
});
router.get('/:id', async (req, res, next) => {
  try {
    const pokemonByID = await Pokemon.findByPk(req.params.id);
    res.json(pokemonByID);
  } catch (error) {
    next(error);
  }
});
