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

export const addComment = profile => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ profile })
  }

  return dispatch => {
    fetch(`${ apiUrl }/profiles/${profile.id}/comments`, data)
      .then(response => response.json())
      .then(comment => dispatch({
        type: 'CREATE_COMMENT',
        payload: comment
      }))
      .catch(error => error)
  }
}
