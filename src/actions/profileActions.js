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
