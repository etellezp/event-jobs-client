import React, { Component } from 'react';

class EditProfileForm extends Component {

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

  componentDidMount() {
    this.setState({
      ...this.props.location.state.profile
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h3>Edit Profile</h3>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="name">Name</label>
          <input onChange={this.handleOnChange} type="text" name="name" value={this.state.name} />
          <label htmlFor="image_url">Image</label>
          <input onChange={this.handleOnChange} type="text" name="image_url" value={this.state.image_url} />
          <label htmlFor="about">About Me</label>
          <textarea onChange={this.handleOnChange} name="about" value={this.state.about}></textarea>
          <label htmlFor="skill">Skill</label>
          <input onChange={this.handleOnChange} type="text" name="skill" value={this.state.skill} />
          <label htmlFor="location">Location</label>
          <input onChange={this.handleOnChange} type="text" name="location" value={this.state.location} />
          <label htmlFor="rate">Hourly Rate</label>
          <input onChange={this.handleOnChange} type="number" name="rate" value={this.state.rate} />
          <button type="submit">Add Profile</button>
        </form>
      </div>
    )
  }
}

export default EditProfileForm;
