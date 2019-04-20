const apiUrl = 'http://localhost:3001/api'

export const fetchProfiles = () => {
  let data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  return dispatch => {
    fetch(`${apiUrl}/profiles`, data)
      .then(response => response.json())
      .then(profiles => dispatch({
        type: 'FETCH_PROFILES',
        payload: profiles
      }))
      .catch(error => error)
  }
}

export const addProfile = profile => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ profile })
  }

  return dispatch => {
    fetch(`${ apiUrl }/profiles`, data)
      .then(response => response.json())
      .then(profile => dispatch({
        type: 'CREATE_PROFILE',
        payload: profile
      }))
      .catch(error => error)
  }
}

export const getProfile = id => {
  let data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  return dispatch => {
    fetch(`${apiUrl}/profiles/${id}`, data)
      .then(response => response.json())
      .then(profile => dispatch({
        type: 'GET_PROFILE',
        payload: profile
      }))
      .catch(error => error )
  }
}

export const deleteProfile = id => {
  let data = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  return dispatch => {
    fetch(`${apiUrl}/profiles/${id}`, data)
      .then(response => response.json())
      .then(profile => dispatch({
        type: 'DELETE_PROFILE',
        payload: profile
      }))
      .catch(error => error)
  }
}

export const updateProfile = profile => {
  let data = {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ profile })
  }

  return dispatch => {
    fetch(`${apiUrl}/profiles/${profile.id}`, data)
      .then(response => response.json())
      .then(response => {
        const data = response.data
        dispatch({type: 'UPDATE_PROFILE', payload: {id: data.id, name: data.name, image_url: data.image_url, about: data.about, skill: data.skill, location: data.location, rate: data.rate}})
        dispatch({type: 'REPLACE_PROFILE', payload: {id: data.id, name: data.name, image_url: data.image_url, about: data.about, skill: data.skill, location: data.location, rate: data.rate}})
      })
      .catch(error => error )
  }
}
