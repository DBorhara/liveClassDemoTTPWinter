import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSinglePokemon } from '../../redux/reducers';

class PokemonInfo extends Component {
  async componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getSinglePokemon(id);
  }

  shouldComponentRender = () => {
    if (this.props.sprite === {}) return false;
    // more tests
    return true;
  };

  render() {
    if (!this.props) return <h1>Loading</h1>;
    const { name, sprites, types } = this.props.pokemon;
    return (
      <div>
        <h1>Name:{name}</h1>
        {sprites
          ? <img alt="pokemon" src={sprites.front_default} />
          : ''}
        Types:
        {types
          ? types.map((pokeTypes, index) => {
              console.log(pokeTypes.type.name);
              return <p key={index}>{pokeTypes.type.name}</p>;
            })
          : []}
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
