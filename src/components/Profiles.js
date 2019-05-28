import React from 'react';
import { Link } from 'react-router-dom';
import image from './dice-1.png'

class Profiles extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      vote: 0
    }
  }

  onClick = () => {
    const newVote = this.state.vote + 1
    this.setState({
      ...this.state,
      vote: newVote
    })
    console.log(this.state)
  }

  render() {
    return (
      <div className="card col-3 mx-2 my-4 cards">
        {this.props.profile.image_url ? <img src={this.props.profile.image_url} className="card-img-top circular-img mx-auto mt-3" alt="..." /> : <img src={image} className="card-img-top circular-img mx-auto mt-3" alt="..." /> }
        <div className="card-body text-white">
          <h2 className="card-title text-center">{this.props.profile.name}</h2>
          <hr />
          <h4 className="card-text text-center mb-4">{this.props.profile.skill}</h4>
          <hr />
          <p>Location: {this.props.profile.location}</p>
          <p>Rate: ${this.props.profile.rate} per hour</p>
          <hr />
          <div className="row justify-content-end">
            <Link
              className="btn btn-primary"
              to={`/profiles/${this.props.profile.id}`}
            >
              View More
            </Link>
            <button onClick={this.onClick}>Vote</button>
            {this.state.vote}
          </div>
        </div>
      </div>
    )
  }
}



export default Profiles
