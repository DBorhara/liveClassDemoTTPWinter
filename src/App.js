import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//Components
import Homepage from './components/HomePage';
import About from './components/About';
import Contacts from './components/Contacts';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/about/ceo">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={About} />
          <Route path="/about/:position" component={About} />

          <Route path="/contacts" component={Contacts} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
