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
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4 text-center">{profile.name}</h1>
          <p className="lead">{profile.about}</p>
        </div>
      </div>

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
