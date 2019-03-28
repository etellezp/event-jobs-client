const initialState = {
  profiles: []
}

function profilesReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PROFILES':
        return { ...state, profiles: action.payload }

    default:
      return state
  }
}

export default profilesReducer
