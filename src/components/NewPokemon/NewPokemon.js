import React, { Component } from 'react';
import axios from 'axios';

class NewPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: '',
      species: '',
      pokeTypes: '',
      favorite: false,
      pokeIndex: '0',
      image: 'https://www.wtvq.com/wp-content/uploads/2018/08/Snoop-Dogg.jpg',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log('I have sent');
    const pokemon = await axios.post(
      'http://localhost:8080/api/pokemon/newPokemon',
      this.state
    );
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            NickName:
            <input
              onChange={this.handleChange}
              type="text"
              name="nickname"
              value={this.state.nickname}
            />
          </label>
          <label>
            Species:
            <input
              type="text"
              name="species"
              onChange={this.handleChange}
              value={this.state.species}
            />
          </label>
          <label>
            PokeType:
            <input
              type="text"
              name="pokeTypes"
              onChange={this.handleChange}
              value={this.state.pokeTypes}
            />
          </label>
          Favorite:
          <select value={this.state.favorite} onChange={this.handleChange}>
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>
          <label>
            Pokemon Index:
            <input
              type="number"
              name="pokeIndex"
              onChange={this.handleChange}
              value={this.state.pokeIndex}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewPokemon;
