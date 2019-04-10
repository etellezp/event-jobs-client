import React from 'react';

const Profile = (props) => {
  const { profile, deleteProfile } = props

  return (
    <div className="card col-3 mx-2 my-4">
      <img src={profile.image_url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h3 className="card-title">{profile.name}</h3>
        <h5 className="card-text">{profile.skill}</h5>
        <p>Location: {profile.location}</p>
        <p>Rate: ${profile.rate} per hour</p>
        <button onClick={ () => deleteProfile(profile.id) }>X</button>
        <button type="button" className="ml-2">View More</button>
      </div>
    </div>
  )
}

export default Profile
