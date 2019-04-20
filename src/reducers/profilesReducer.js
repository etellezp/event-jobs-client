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

    case 'REPLACE_PROFILE':
      return state.map((profile) => {
        if (profile.id === action.payload.id) {
          return {
            ...profile,
            name: action.payload.name,
            image_url: action.payload.image_url,
            about: action.payload.about,
            skill: action.payload.skill,
            location: action.payload.location,
            rate: action.payload.rate
          }
        } else {
          return profile
        }
      })

    default:
      return state
  }
}

export default profilesReducer
