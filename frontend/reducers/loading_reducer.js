import {
  START_LOADING_SONG
} from '../actions/song_actions';

import {
  FINISH_LOADING_ANNOTATIONS
} from '../actions/annotation_actions';

const defaultState = {
  loading: false
};

export default (state = defaultState, action ) => {
  Object.freeze(state);
  switch(action.type){
    case START_LOADING_SONG:
      return Object.assign({}, state, { loading: true });
    case FINISH_LOADING_ANNOTATIONS:
      return Object.assign({}, state, { loading: false });
    default:
      return state;
  }
};
