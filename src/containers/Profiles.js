import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchProfiles, deleteProfile } from '../actions/profileActions';
import { Link } from 'react-router-dom';

import Profile from '../components/Profile'

class Profiles extends Component {

  componentDidMount() {
    this.props.fetchProfiles()
  }

  render() {
    const { profiles } = this.props.profiles

    return (
      <>
        <h2>Profiles</h2>
        <Link to="/profiles/new">Add Profile</Link>

        <div className="container">
          <div className="row justify-content-center">
            { profiles.map(profile => <Profile key={profile.id} profile={profile} deleteProfile={this.props.deleteProfile} />) }
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    profiles: state.profiles
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchProfiles,
  deleteProfile
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Profiles);
