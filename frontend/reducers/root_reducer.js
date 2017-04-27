import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import SongsReducer from './songs_reducer';
import LoadingReducer from './loading_reducer';
import AnnotationsReducer from './annotations_reducer';
import SearchReducer from './search_reducer';
import CommentsReducer from './comment_reducer';

const rootReducer = combineReducers({
  loading: LoadingReducer,
  session: SessionReducer,
  songs: SongsReducer,
  annotations: AnnotationsReducer,
  search: SearchReducer,
  comments: CommentsReducer
});

export default rootReducer;
