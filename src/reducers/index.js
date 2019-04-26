import { combineReducers } from 'redux';
import profilesReducer from './profilesReducer';
import profileReducer from './profileReducer';
import commentsReducer from './commentsReducer';

const rootReducer = combineReducers({
  profiles: profilesReducer,
  profile: profileReducer,
  comments: commentsReducer
})

export default rootReducer
