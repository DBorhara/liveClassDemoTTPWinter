import React, { Component } from 'react';
import axios from 'axios';

import PokemonCard from '../PokemonCard/PokemonCard';

class PokemonDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonNames: [],
    };
  }

  //Thats so FETCH()
  // componentDidMount() {
  //   fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  //     .then((response) => response.json())
  //     .then((response) => {
  //       this.setState({ pokemonNames: response.results });
  //     })
  //     .catch((error) => console.error(error));
  // }

  //AXIOS
  async componentDidMount() {
    try {
      let pokemonNames = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=200'
      );
      this.setState({ pokemonNames: pokemonNames.data.results });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div>
        {this.state.pokemonNames.map((pokemon, index) => {
          return (
            <PokemonCard
              key={index}
              number={index + 1}
              name={
                pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
              }
            />
          );
        })}
      </div>
    );
  }
}

export default PokemonDisplay;
