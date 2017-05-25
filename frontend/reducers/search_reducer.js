import { RECEIVE_SEARCH_RESULTS, CLEAR_RESULTS } from '../actions/search_actions';

let defaultState = {
  "songTitles": [],
  "songArtists": []
};

const SearchReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SEARCH_RESULTS:
      let results = Object.assign({}, state);
      results["songTitles"] = action.songTitles;
      results["songArtists"] = action.songArtists;
      return results;
    case CLEAR_RESULTS:
      return defaultState;
    default:
      return state;
  }
};

export default SearchReducer;
