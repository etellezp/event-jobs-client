import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import Home from '../components/Home';
import Profiles from './Profiles';
import ProfileForm from '../components/ProfileForm';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/profiles">Profiles</Link>
          <Link to="/profiles/new">New Profile</Link>
        </nav>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/profiles" component={Profiles} />
          <Route path="/profiles/new" component={ProfileForm} />
        </div>
      </div>
    )
  }
}

export default App;
