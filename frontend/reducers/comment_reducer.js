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
      let receiveCommentState = Object.assign({}, state);
      receiveCommentState.comments.push(action.comment);
      return receiveCommentState;
    case REMOVE_COMMENT:
      let deleteState = Object.assign({}, state);
      deleteState.comments.filter(comment => comment.id === action.comment.id);
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
