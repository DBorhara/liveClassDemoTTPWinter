import React from 'react';

const PokemonCard = (props) => (
  <div className="container">
    <div className="pokemonCard">
      <div className="idNum">number:{props.number}</div>
      <div className="name">name:{props.name}</div>
    </div>
  </div>
);

export default PokemonCard;
