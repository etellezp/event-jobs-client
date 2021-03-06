import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addProfile } from '../actions/profileActions';

class ProfileForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      image_url: '',
      about: '',
      skill: '',
      location: '',
      rate: ''
    }
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    console.log("A");
    this.props.addProfile(this.state)
    console.log("B");
    this.props.history.push("/profiles")
  }

  handleOnChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleCancel = () => {
    this.props.history.push(`/profiles/`)
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="card card-form">
            <h3 className="card-title text-white text-center display-4 mt-3">Add a Profile</h3>
            <div className="card-body">
              <form className="form" onSubmit={this.handleOnSubmit}>
                <input
                  placeholder="Full Name"
                  className="form-control mb-3"
                  onChange={this.handleOnChange}
                  type="text"
                  name="name"
                />
                <input
                  placeholder="Image Url"
                  className="form-control mb-3"
                  onChange={this.handleOnChange}
                  type="text"
                  name="image_url"
                />
                <textarea
                  placeholder="About Me"
                  className="form-control mb-3"
                  onChange={this.handleOnChange}
                  name="about">
                </textarea>
                <input
                  placeholder="Skill"
                  className="form-control mb-3"
                  onChange={this.handleOnChange}
                  type="text"
                  name="skill"
                />
                <input
                  placeholder="Location"
                  className="form-control mb-3"
                  onChange={this.handleOnChange}
                  type="text"
                  name="location"
                />
                <input
                  placeholder="Hourly Rate"
                  className="form-control mb-3"
                  onChange={this.handleOnChange}
                  type="number"
                  name="rate"
                />
                <button
                  className="btn btn-primary btn-sm mr-1"
                  type="submit">
                  Add Profile
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

const mapDispatchToProps = dispatch => bindActionCreators({
  addProfile
}, dispatch)

export default connect(null, mapDispatchToProps)(ProfileForm);
