import React from 'react';

const Profile = (props) => {
  const { profile } = props
  return (
    <div>
      {profile.image_url}
      <h3>{profile.name}</h3>
      <h4>{profile.skill}</h4>
      <p>{profile.location}</p>
      <p>${profile.rate}</p>
      <hr />
    </div>
  )
}

export default Profile
