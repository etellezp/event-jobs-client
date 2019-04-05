const initialState = {
  profiles: []
}

function profilesReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PROFILES':
      return { ...state, profiles: action.payload }

    case 'CREATE_PROFILE':
      return { ...state, profiles: [...state.profiles, action.payload] }

    case 'DELETE_PROFILE':
      return { ...state, profiles: state.profiles.filter(profile => profile.id !== action.payload.id) }

    default:
      return state
  }
}

export default profilesReducer
