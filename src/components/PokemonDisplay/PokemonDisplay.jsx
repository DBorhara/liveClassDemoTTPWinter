import React from 'react';

import PokemonCard from '../PokemonCard/PokemonCard';

const PokemonDisplay = (props) => (
  <div>
    {props.pokemonNames.map((pokemon, index) => {
      return (
        <PokemonCard
          key={index}
          number={index + 1}
          name={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        />
      );
    })}
  </div>
);

export default PokemonDisplay;
