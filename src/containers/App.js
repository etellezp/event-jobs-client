import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/profiles">Profiles</Link>
        </nav>
      </div>
    )
  }
}

export default App;
