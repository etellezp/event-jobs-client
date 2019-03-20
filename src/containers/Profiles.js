import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import ProfileForm from '../components/ProfileForm';
import EditProfileForm from '../components/EditProfileForm';

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

  componentWillReceiveProps(next) {
    const { profile } = next.history.location.state
    if (profile.id) {
      const existingProfile = this.state.profiles.find(p => p.id === profile.id)
      if (existingProfile) {
        const index = this.state.profiles.findIndex(p => p.id === existingProfile.id)
        this.setState({
          profiles: [
            ...this.state.profiles.slice(0, index),
            next.history.location.state.profile,
            ...this.state.profiles.slice(index + 1)
          ]
        })
      } else if (next.history.location.pathname === '/profiles') {
        this.setState({
          profiles: this.state.profiles.concat(profile)
        })
      }
    }
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
    const { match } = this.props
    const renderProfiles = this.state.profiles.map(profile => {
      return (
        <div key={profile.id}>
          {profile.name}
          <button onClick={() => this.deleteProfile(profile.id)}>Delete</button>
          <button>
            <Link to={{
              pathname: `${match.url}/${profile.id}/edit`,
              state: { profile: profile }
            }}>
            Edit
            </Link>
          </button>
        </div>
      )
    })

    return (
      <div>
        <Route path={`${match.url}/new`} render={() => <ProfileForm addProfile={this.addProfile} />} />
        <Route path={`${match.url}/:profileId/edit`} component={EditProfileForm} />
        <Route exact path={match.url} render={() => (
          <div>
            <h3>Check Profiles</h3>
            <Link to={`${match.url}/new`} >New Profile</Link>
            {renderProfiles}
          </div>
        )} />
      </div>
    )
  }
}

export default Profiles;
