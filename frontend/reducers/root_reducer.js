import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import SongsReducer from './songs_reducer';
import LoadingReducer from './loading_reducer';

const rootReducer = combineReducers({
  loading: LoadingReducer,
  session: SessionReducer,
  songs: SongsReducer
});

export default rootReducer;
