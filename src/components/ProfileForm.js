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

    this.props.addProfile(this.state)
    this.props.history.push("/profiles")
  }

  handleOnChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Profile</h3>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="name">Name</label>
          <input onChange={this.handleOnChange} type="text" name="name" />
          <label htmlFor="image_url">Image</label>
          <input onChange={this.handleOnChange} type="text" name="image_url" />
          <label htmlFor="about">About Me</label>
          <textarea onChange={this.handleOnChange} name="about"></textarea>
          <label htmlFor="skill">Skill</label>
          <input onChange={this.handleOnChange} type="text" name="skill" />
          <label htmlFor="location">Location</label>
          <input onChange={this.handleOnChange} type="text" name="location" />
          <label htmlFor="rate">Hourly Rate</label>
          <input onChange={this.handleOnChange} type="number" name="rate" />
          <button type="submit">Add Profile</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addProfile
}, dispatch)

export default connect(null, mapDispatchToProps)(ProfileForm);
