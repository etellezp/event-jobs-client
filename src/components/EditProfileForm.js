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
      <div>Test</div>
    )
  }
}

export default EditProfileForm;
