import {
  START_LOADING_SONG
} from '../actions/song_actions';

const defaultState = {
  loading: false
};

export default (state = defaultState, action ) => {
  Object.freeze(state);
  switch(action.type){
    case START_LOADING_SONG:
      return Object.assign({}, state, { loading: true });
    default:
      return defaultState;
  }
};
