import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
  RECEIVE_ERRORS,
  CLEAR_ERRORS,
} from '../actions/comment_actions';
import merge from 'lodash/merge';

let defaultState = {
  comments: {},
  errors: []
};

const CommentsReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_COMMENTS:
      let receive = Object.assign({}, state);
      receive.comments = merge(receive.comments, action.comments);
      return receive;
    case RECEIVE_COMMENT:
        let receiveOne = Object.assign({}, state);
        receiveOne.comments = merge(receiveOne.comments, {[action.comment.id]: action.comment});
        return receiveOne;
    case REMOVE_COMMENT:
      let deleteState = Object.assign({}, state);
      delete deleteState.comments[action.id];
      return deleteState;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    case CLEAR_ERRORS:
      const clearedErrors = Object.assign({}, state);
      clearedErrors.errors = [];
      return clearedErrors;
    default:
      return state;
  }
};

export default CommentsReducer;
