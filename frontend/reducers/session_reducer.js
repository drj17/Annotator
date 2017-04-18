import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';
import merge from 'lodash/merge';

let defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, defaultState, {
        currentUser
      });
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, defaultState, {
        errors
      });
    default:
      return state;
  }
};

export default SessionReducer;
