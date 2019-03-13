import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import Home from '../components/Home'
import Profiles from './Profiles'

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/profiles">Profiles</Link>
        </nav>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/profiles" component={Profiles} />
        </div>
      </div>
    )
  }
}

export default App;
