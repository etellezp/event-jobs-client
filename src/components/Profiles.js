import React from 'react';
import { Link } from 'react-router-dom';
import image from './dice-1.png'

const Profiles = (props) => {
  const { profile } = props

  return (
    <div className="card col-3 mx-2 my-4 cards">
      {profile.image_url ? <img src={profile.image_url} className="card-img-top circular-img mx-auto mt-3" alt="..." /> : <img src={image} className="card-img-top circular-img mx-auto mt-3" alt="..." /> }
      <div className="card-body text-white">
        <h2 className="card-title text-center">{profile.name}</h2>
        <hr />
        <h4 className="card-text text-center mb-4">{profile.skill}</h4>
        <hr />
        <p>Location: {profile.location}</p>
        <p>Rate: ${profile.rate} per hour</p>
        <hr />
        <div className="row justify-content-end">
          <Link
            className="btn btn-primary"
            to={`/profiles/${profile.id}`}
            >
            View More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Profiles
