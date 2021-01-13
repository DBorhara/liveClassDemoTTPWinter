import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSinglePokemon } from '../../redux/reducers';

class PokemonInfo extends Component {
  async componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getSinglePokemon(id);
  }

  render() {
    const {
      name,
      sprites: { front_default },
      types,
    } = this.props.pokemon;
    return (
      <div>
        <h1>Name:{name}</h1>
        <img alt="pokemon" src={front_default} />
        Types:
        {types.map((pokemonTypes, index) => (
          <h4 key={index}>{pokemonTypes.type.name}</h4>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemon,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSinglePokemon: (id) => dispatch(getSinglePokemon(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonInfo);
