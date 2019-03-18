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

  deleteProfile = (profileId) => {
    const request = {
      method: 'DELETE'
    }

    fetch(`http://localhost:3001/api/profiles/${profileId}`, request)
      .then(response => {
        if (response.ok) {
          const index = this.state.profiles.findIndex(profile => profile.id === profileId)
          this.setState({
            profiles: [
              ...this.state.profiles.slice(0, index),
              ...this.state.profiles.slice(index + 1)
            ]
          })
        } else {
          window.alert("Unable to delete profile")
        }
      })
      .catch(error => console.log(error))
  }

  render() {
    const renderProfiles = this.state.profiles.map(profile => {
      return (
        <div key={profile.id}>
          {profile.name}
          <button onClick={() => this.deleteProfile(profile.id)}>Delete</button>
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
