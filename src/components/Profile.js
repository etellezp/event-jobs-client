import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../actions/profileActions';

class Profile extends Component {

  componentDidMount() {
    this.props.getProfile(this.props.match.params.id)
  }

  render() {
    const profile = this.props.profile 
    return (
      <>
        <h2>{profile.name}</h2>
      </>
    )
  }

}

const mapStateToProps = state => {
  return {
    profile: state.profile
  }
}

const mapDispatchToProps = { getProfile }

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
