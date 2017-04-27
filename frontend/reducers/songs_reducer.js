import {
  RECEIVE_ERRORS,
  CLEAR_ERRORS,
  RECEIVE_SONG,
  RECEIVE_ALL_SONGS,
  REMOVE_SONG
} from '../actions/song_actions';
import merge from 'lodash/merge';

let defaultState = {
  tracks: [],
  errors: {
    title: "",
    artist: "",
    lyrics: ""
  },
  currentTrack: { comments: [] },
};

const SongsReducer = (state = defaultState, action) => {

  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_SONGS:
      const receiveAll = Object.assign({}, state);
      receiveAll.tracks = action.tracks;
      return receiveAll;
    case RECEIVE_SONG:
      const receiveSong = Object.assign({}, state);
      receiveSong.currentTrack = action.track;
      return receiveSong;
    case REMOVE_SONG:
      const removeSong = Object.assign({}, state);
      removeSong.tracks.filter(track => track.id === action.track.id);
      return removeSong;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    case CLEAR_ERRORS:
      const clearedErrors = Object.assign({}, state);
      clearedErrors.errors = defaultState.errors;
      return clearedErrors;
    default:
      return state;
  }
};

export default SongsReducer;
