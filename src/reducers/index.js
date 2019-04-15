import { combineReducers } from 'redux';
import profilesReducer from './profilesReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  profiles: profilesReducer,
  profile: profileReducer
})

export default rootReducer
