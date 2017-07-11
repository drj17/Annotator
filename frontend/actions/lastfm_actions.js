import * as LastFmApiUtil from '../util/lastfm_api_util';

export const RECEIVE_LASTFM_SEARCH_RESULTS = "RECEIVE_LASTFM_SEARCH_RESULTS";

const receiveLastFmSearchResults = (results) => {
  return {
    type: RECEIVE_LASTFM_SEARCH_RESULTS,
    results: results.trackmatches.track
  };
};

export const fetchLastFmSearchResults = (query) => dispatch => {
  return LastFmApiUtil.fetchLastFmSearchResults(query)
    .then(results => dispatch(receiveLastFmSearchResults(results)));
};
