import React, { Component } from 'react';

class Profiles extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profiles: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/profiles')
      .then(response => response.json())
      .then(profiles => this.setState({
        profiles
      }))
  }

  render() {
    return (
      <div>
        <h3>Check Profiles</h3>
      </div>
    )
  }
}

export default Profiles;
