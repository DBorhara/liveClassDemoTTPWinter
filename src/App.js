import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Homepage from './components/HomePage/HomePage';
import About from './components/About/About';
import PokemonDisplay from './components/PokemonDisplay/PokemonDisplay';
import PokemonInfo from './components/PokemonInfo/PokemonInfo';
import NewPokemon from './components/NewPokemon/NewPokemon';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonNames: [],
    };
  }

  async componentDidMount() {
    try {
      let pokemonNames = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=151'
      );
      this.setState({ pokemonNames: pokemonNames.data.results });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/generation1">Genereation 1 Pokemon</Link>
            </li>
            <li>
              <Link to="/newPokemon">Create New Pokemon</Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/about" component={About} />
            <Route path="/generation1">
              <PokemonDisplay pokemonNames={this.state.pokemonNames} />
            </Route>
            <Route path="/pokemon/:id" component={PokemonInfo} />
            <Route path="/newPokemon" component={NewPokemon} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
