import * as SongApiUtil from '../util/song_api_util';
import { fetchAnnotations, finishLoadingAnnotations } from './annotation_actions';

export const RECEIVE_ALL_SONGS = "RECEIVE_ALL_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const REMOVE_SONG = "REMOVE_SONG";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const START_LOADING_SONG = "START_LOADING_SONG";

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

export const startLoadingSong = () => {
  return {
    type: START_LOADING_SONG
  };
};

export const fetchSongs = () => dispatch => {
  return SongApiUtil.fetchSongs()
    .then(tracks => dispatch(receiveAllSongs(tracks)),
          errors => dispatch(receiveErrors(errors.responseJSON)));
};
export const fetchSong = (id) => dispatch => {
  dispatch(startLoadingSong());
  return SongApiUtil.fetchSong(id)
    .then(track => dispatch(receiveSong(track)),
          errors => dispatch(receiveErrors(errors.responseJSON)))
    .then(() => dispatch(fetchAnnotations(id)))
    .then(() => dispatch(finishLoadingAnnotations()));
};
export const deleteSong = (id) => dispatch => {
  return SongApiUtil.deleteSong(id)
    .then(track => dispatch(removeSong(track)),
          errors => dispatch(receiveErrors(errors.responseJSON)));
};
export const updateSong = (track, id) => dispatch => {
  return SongApiUtil.updateSong(track, id)
    .then(track => dispatch(receiveSong(track)),
          errors => dispatch(receiveErrors(errors.responseJSON)));
};
export const createSong = (track) => dispatch => {
  return SongApiUtil.createSong(track)
    .then(track => dispatch(receiveSong(track)),
          errors => dispatch(receiveErrors(errors.responseJSON)));
};
