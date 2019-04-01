import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchProfiles } from '../actions/profileActions';
import Profile from '../components/Profile'

class Profiles extends Component {

  componentDidMount() {
    this.props.fetchProfiles()
  }

  render() {
    const { profiles } = this.props.profiles

    return (
      <div>
        <h2>Profiles</h2>
        { profiles.map(profile => <Profile key={profile.id} profile={profile} />) }
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profiles);
