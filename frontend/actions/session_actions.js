import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const login = (user) => dispatch => {
  return SessionApiUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
          errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const signup = (user) => dispatch => {
  return SessionApiUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
          errors => dispatch(receiveErrors(errors)));
};

export const logout = (user) => dispatch => {
  return SessionApiUtil.logout(user)
    .then(() => dispatch(receiveCurrentUser(null)),
          errors => dispatch(receiveErrors(errors)));
};
