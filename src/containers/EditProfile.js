import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateProfile } from '../actions/profileActions';

class EditProfile extends Component {

  handleOnChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()

    const id = this.props.profile.id
    const name = this.state.name ? this.state.name : this.props.profile.name;
    const image_url = this.state.image_url ? this.state.image_url : this.props.profile.image_url;
    const about = this.state.about ? this.state.about : this.props.profile.about;
    const skill = this.state.skill ? this.state.skill : this.props.profile.skill;
    const location = this.state.location ? this.state.location : this.props.profile.location;
    const rate = this.state.rate ? this.state.rate : this.props.profile.rate;

    const profile = { id: id, name: name, image_url: image_url, about: about, skill: skill, location: location, rate: rate }

    this.props.updateProfile(profile)
  }

  handleCancel = () => {
    this.props.history.push(`/profiles/${this.props.profile.id}`)
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="card card-form">
            <h3 className="card-title text-white text-center display-4 mt-3">Edit {this.props.profile.name} profile</h3>
            <div className="card-body">
              <form className="form" onSubmit={this.handleOnSubmit}>
                <input
                  placeholder="Full Name"
                  className="form-control mb-3"
                  onChange={this.handleOnChange}
                  type="text"
                  name="name"
                  defaultValue={this.props.profile.name}
                />
                <input
                  placeholder="Image Url"
                  className="form-control mb-3"
                  onChange={this.handleOnChange}
                  type="text"
                  name="image_url"
                  defaultValue={this.props.profile.image_url}
                />
                <textarea
                  placeholder="About Me"
                  className="form-control mb-3"
                  onChange={this.handleOnChange}
                  name="about"
                  defaultValue={this.props.profile.about}>
                </textarea>
                <input
                  placeholder="Skill"
                  className="form-control mb-3"
                  onChange={this.handleOnChange}
                  type="text"
                  name="skill"
                  defaultValue={this.props.profile.skill}
                />
                <input
                  placeholder="Location"
                  className="form-control mb-3"
                  onChange={this.handleOnChange}
                  type="text"
                  name="location"
                  defaultValue={this.props.profile.location}
                />
                <input
                  placeholder="Hourly Rate"
                  className="form-control mb-3"
                  onChange={this.handleOnChange}
                  type="number"
                  name="rate"
                  defaultValue={this.props.profile.rate}
                />
                <button
                  className="btn btn-primary btn-sm mr-1"
                  type="submit">
                  Update Profile
                </button>
                <button
                  className="btn btn-secondary btn-sm ml-1"
                  type="button"
                  onClick={this.handleCancel}>
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ profile: state.profile })

const mapDispatchToProps = { updateProfile }

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
