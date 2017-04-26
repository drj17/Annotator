import { RECEIVE_SEARCH_RESULTS, CLEAR_RESULTS } from '../actions/search_actions';

let defaultState = [];

const SearchReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SEARCH_RESULTS:
      return action.results;
    case CLEAR_RESULTS:
      return [];
    default:
      return state;
  }
};

export default SearchReducer;
