import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchProfiles } from '../actions/profileActions';
import { Link } from 'react-router-dom';

import Profiles from '../components/Profiles'

class ProfilesList extends Component {

  componentDidMount() {
    this.props.fetchProfiles()
  }

  render() {
    const { profiles } = this.props.profiles

    return (
      <>
        <h1 className="text-white text-center my-5">PROFILES</h1>
        <div className="row justify-content-center my-2">
          <Link className="text-center" to="/profiles/new">Add Profile</Link>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            { profiles.map(profile => <Profiles key={profile.id} profile={profile} />) }
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
  fetchProfiles
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProfilesList);
