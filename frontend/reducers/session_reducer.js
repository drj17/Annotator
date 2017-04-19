import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS} from '../actions/session_actions';
import merge from 'lodash/merge';

let defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      const currentUser = action.user;
      let merged = merge({}, state, {
        currentUser
      });

      return merged;
    case RECEIVE_ERRORS:
      let errors = action.errors;
      return merge({}, state, {
        errors
      });
    case CLEAR_ERRORS:
      const newState = Object.assign({}, state);
      newState.errors = [];
      return newState;

    default:
      return state;
  }
};

export default SessionReducer;
