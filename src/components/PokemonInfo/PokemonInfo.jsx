import React, { Component } from 'react';
import axios from 'axios';

class PokemonInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sprite: '',
      types: [],
    };
  }
  async componentDidMount() {
    let id = this.props.match.params.id;
    console.log(this.props);
    let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    console.log(pokemon.data);
    const { name, sprites, types } = pokemon.data;
    this.setState({
      name,
      sprite: sprites.front_default,
      types,
    });
    console.log(types[0].type.name);
  }

  render() {
    return (
      <div>
        <h1>Name:{this.state.name}</h1>
        <img alt="pokemon" src={this.state.sprite} />
        Types:
        {this.state.types.map((pokemonTypes, index) => (
          <h4 key={index}>{pokemonTypes.type.name}</h4>
        ))}
      </div>
    );
  }
}

export default PokemonInfo;
