import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSinglePokemon } from '../../redux/reducers';

class PokemonInfo extends Component {
  async componentDidMount() {
    let id = this.props.match.params.id;
    await this.props.getSinglePokemon(id);
  }

  render() {
    const {
      name,
      sprites: { front_default },
      types,
    } = this.props.pokemon;
    console.log(name, front_default, types);
    return <h1>test</h1>;
  }
}

const mapStateToProps = (state) => ({
  pokemon: state.pokemon,
});

const mapDispatchToProps = (dispatch) => ({
  getSinglePokemon: (id) => dispatch(getSinglePokemon(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonInfo);
