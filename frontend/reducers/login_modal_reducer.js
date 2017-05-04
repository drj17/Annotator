import {
  OPEN_LOGIN_MODAL,
  OPEN_SIGNUP_MODAL,
  CLOSE_MODAL,
  TOGGLE_MODAL
} from '../actions/login_modal_actions.js';

const defaultState = {
  open: false,
  type: "login"
};

export default (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case OPEN_LOGIN_MODAL:
      return Object.assign({}, state, { open: true, type: "login" });
    case OPEN_SIGNUP_MODAL:
      return Object.assign({}, state, { open: true, type: "signup" });
    case CLOSE_MODAL:
      return Object.assign({}, state, { open: false });
    case TOGGLE_MODAL:
      let newType = state.type === "login" ? "signup" : "login";
      return Object.assign({}, state, { type: newType });
    default:
      return state;
  }
};
