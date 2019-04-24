const apiUrl = 'http://localhost:3001/api'

export const fetchComments = profile => {
  let data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  return dispatch => {
    fetch(`${apiUrl}/profiles/${profile.id}/comments`, data)
      .then(response => response.json())
      .then(comments => {
        dispatch({
          type: 'FETCH_COMMENTS',
          payload: comments
        })
      })
      .catch(error => error)
  }
}
