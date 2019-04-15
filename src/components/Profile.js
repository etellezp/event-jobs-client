import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
        <p>{profile.about}</p>
      </>
    )
  }

}

const mapStateToProps = state => {
  return {
    profile: state.profile
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getProfile
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
