import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from '../components/Home';
import NavBar from '../components/NavBar';
import Profiles from './Profiles';
import ProfileForm from '../components/ProfileForm';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/profiles/new" component={ProfileForm} />
          <Route exact path="/profiles" component={Profiles} />
        </div>
      </div>
    )
  }
}

export default App;
