const initialState = {
  comments: []
}

function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_COMMENTS':
      return {...state, comments: action.payload}

    case 'CREATE_COMMENT':
      return {...state, comments: [...state.comments, action.payload]}

    default:
      return state;
  }
}

export default commentsReducer;
