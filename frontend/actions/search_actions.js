import * as SearchApiUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const CLEAR_RESULTS = "CLEAR_RESULTS";

const receiveSearchResults = (results) => {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    songs: results.songs,
    songTitles: results.song_titles,
    songArtists: results.song_artists
  };
};

export const clearResults = () => {
  return {
    type: CLEAR_RESULTS,
  };
};

export const fetchSearchResults = (query) => dispatch => {
  return SearchApiUtil.fetchSearchResults(query)
    .then(results => dispatch(receiveSearchResults(results)));
};
