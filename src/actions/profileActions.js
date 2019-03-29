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
