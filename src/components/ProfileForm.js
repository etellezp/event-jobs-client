import React, { Component } from 'react';

class ProfileForm extends Component {

  render() {
    return (
      <div>
        <h3>Add a Profile</h3>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
          <label htmlFor="image_url">Image</label>
          <input type="text" name="image_url" />
          <label htmlFor="about">About Me</label>
          <textarea name="about"></textarea>
          <label htmlFor="skill">Skill</label>
          <input type="text" name="skill" />
          <label htmlFor="location">Location</label>
          <input type="text" name="location" />
          <label htmlFor="rate">Hourly Rate</label>
          <input type="number" name="rate" />
          <button type="submit">Add Profile</button>
        </form>
      </div>
    )
  }
}

export default ProfileForm;
