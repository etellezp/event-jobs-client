function profileReducer(state = {}, action) {
  switch (action.type) {
    case 'GET_PROFILE':
      return action.payload
    default:
      return state;
  }
}

export default profileReducer;
