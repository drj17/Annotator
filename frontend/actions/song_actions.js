import * as SongApiUtil from '../util/song_api_util';

export const RECEIVE_ALL_SONGS = "RECEIVE_ALL_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const REMOVE_SONG = "REMOVE_SONG";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveAllSongs = (tracks) => {
  return {
    type: RECEIVE_ALL_SONGS,
    tracks
  };
};

const receiveSong = (track) => {
  return {
    type: RECEIVE_SONG,
    track
  };
};

const removeSong = (track) => {
  return {
    type: REMOVE_SONG,
    track
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const fetchSongs = () => dispatch => {
  return SongApiUtil.fetchSongs()
    .then(tracks => dispatch(receiveAllSongs(tracks)),
          errors => dispatch(receiveErrors(errors)));
};
export const fetchSong = (id) => dispatch => {
  return SongApiUtil.fetchSong(id)
    .then(track => dispatch(receiveSong(track)),
          errors => dispatch(receiveErrors(errors)));
};
export const deleteSong = (id) => dispatch => {
  return SongApiUtil.deleteSong(id)
    .then(track => dispatch(removeSong(track)),
          errors => dispatch(receiveErrors(errors)));
};
export const updateSong = (track) => dispatch => {
  return SongApiUtil.updateSong(track)
    .then(track => dispatch(receiveSong(track)),
          errors => dispatch(receiveErrors(errors)));
};
export const createSong = (track) => dispatch => {
  return SongApiUtil.createSong(track)
    .then(track => dispatch(receiveSong(track)),
          errors => dispatch(receiveErrors(errors)));
};
