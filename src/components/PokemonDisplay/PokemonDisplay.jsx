import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGen1Pokemon } from '../../redux/reducers';

import PokemonCard from '../PokemonCard/PokemonCard';

class PokemonDisplay extends Component {
  async componentDidMount() {
    console.log('COMPONENT DID MOUNT');
    await this.props.getGen1Pokemon();
  }

  render() {
    console.log('RENDER');
    return (
      <div>
        {this.props.gen1Pokemon.map((pokemon, index) => {
          return (
            <PokemonCard
              key={index}
              number={index + 1}
              name={pokemon.nickname}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('MAP STATE TO PROPS');
  return {
    gen1Pokemon: state.pokemonNames,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log('MAP DISPATCH TO PROPS');

  return {
    getGen1Pokemon: () => dispatch(getGen1Pokemon()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDisplay);
