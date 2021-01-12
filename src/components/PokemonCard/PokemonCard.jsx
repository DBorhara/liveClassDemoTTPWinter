import React from 'react';
import './PokemonCard.css';

const PokemonCard = (props) => (
  <div className="container">
    <br />
    <div className="pokemonCard">
      <div className="idNum">number:{props.number}</div>
      <div className="name">name:{props.name}</div>
    </div>
    <br />
  </div>
);

export default PokemonCard;
