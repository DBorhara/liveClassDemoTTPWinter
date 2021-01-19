const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
const db = require('./db');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

//API Routes

app.get('/', async (req, res, next) => {
  console.log('req.query', req.query);
  try {
    const gen1 = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${req.query.amount}`
    );
    // console.log(gen1.data.results);
    res.send(gen1.data.results);
  } catch (error) {
    console.error(error);
  }
});

app.get('/pokemon/:id', async (req, res, next) => {
  try {
    const pokemon = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${req.params.id}`
    );
    console.log(pokemon.data);
    res.send(pokemon.data);
  } catch (error) {
    console.error(error);
  }
});

//Start Up Function with node server.js
const startUp = () => {
  const server = app.listen(8080, () => {
    console.log('I am listening for Pokemon');
  });
};

//DB Sync Function
//Optional parameters
// {force:true} - drops current tables and places new empty tables
//{alter:true} - This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.


const syncDb = () => db.sync({ force: true });
// Connects to //postgres://localhost:5432/pokemonlive

//Run server and sync DB
startUp();
syncDb();
