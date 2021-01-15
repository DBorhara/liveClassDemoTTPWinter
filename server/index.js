const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

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

app.listen(8080, () => {
  console.log('I am listening for Pokemon');
});
