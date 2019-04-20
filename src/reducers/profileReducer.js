function profileReducer(state = {}, action) {
  switch (action.type) {
    case 'GET_PROFILE':
      return action.payload

    case 'UPDATE_PROFILE':
        return {
          id: action.id,
          name: action.payload.name,
          image_url: action.payload.image_url,
          about: action.payload.about,
          skill: action.payload.skill,
          location: action.payload.location,
          rate: action.payload.rate
        }
    default:
      return state;
  }
}

export default profileReducer;
