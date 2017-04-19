import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import SongsReducer from './songs_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  songs: SongsReducer
});

export default rootReducer;
