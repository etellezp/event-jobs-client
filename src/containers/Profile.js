import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getProfile, deleteProfile } from '../actions/profileActions';
import Comments from '../components/Comments'

class Profile extends Component {

  componentDidMount() {
    this.props.getProfile(this.props.match.params.id)
  }

  render() {
    const profile = this.props.profile

    return (
      <div className="container">
        <div className="jumbotron">
          <Link
            to={{ pathname: `/profiles/${profile.id}/edit`, state: { profile: profile } }}
            className="btn btn-info">
            Edit Profile
          </Link>

          <button
            className="btn btn-danger mx-1"
            type="button"
            onClick={() => this.props.deleteProfile(profile.id)} >
            Delete
          </button>

          <Link
            to={{ pathname: `/profiles`}}
            className="btn btn-primary">
            Back
          </Link>

          <h1 className="display-4 text-center mb-5">{profile.name}</h1>
          <hr />
          <p className="lead text-center">{profile.about}</p>
          <hr />
          <h4>Comments</h4>

          <Link
            className="btn btn-primary btn-sm mb-3"
            to={`/profiles/${profile.id}/comments/new`}
            >
            Add a comment
          </Link>

          <Comments comments={profile.comments} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profile,
    comments: state.comments
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getProfile,
  deleteProfile
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
