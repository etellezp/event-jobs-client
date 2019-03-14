import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import ProfileForm from '../components/ProfileForm';

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

  addProfile = (profile) => {
    this.setState({
      profiles: this.state.profiles.concat(profile)
    }, () => {
      this.props.history.replace('/profiles')
    })
  }

  render() {
    const renderProfiles = this.state.profiles.map(profile => {
      return (
        <div key={profile.id}>
          {profile.name}
        </div>
      )
    })

    return (
      <div>
        <h3>Check Profiles</h3>
        <Link to="/profiles/new">New Profile</Link>
        <Route path="/profiles/new" render={() => <ProfileForm addProfile={this.addProfile} />} />
        {renderProfiles}
      </div>
    )
  }
}

export default Profiles;
