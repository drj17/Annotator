import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

export const receiveAllComments = (comments) => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  };
};

export const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

export const removeComment = (comment) => {
  return {
    type: REMOVE_COMMENT,
    comment
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const fetchSongComments = (id) => dispatch => {
  return CommentApiUtil.fetchSongComments(id)
    .then(comments => dispatch(receiveAllComments(comments)),
          errors => dispatch(receiveErrors(errors.responseJSON)));
};
export const fetchAnnotationComments = (id) => dispatch => {
  return CommentApiUtil.fetchAnnotationComments(id)
    .then(comments => dispatch(receiveAllComments(comments)),
          errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const fetchComment = (id) => dispatch => {
  return CommentApiUtil.fetchComment(id)
    .then(comment => dispatch(receiveComment(comment)),
          errors => dispatch(receiveErrors(errors.responseJSON)));
};
export const createComment = (comment) => dispatch => {
  return CommentApiUtil.createComment(comment)
    .then(comment => dispatch(receiveComment(comment)),
          errors => dispatch(receiveErrors(errors.responseJSON)));
};
export const updateComment = (comment) => dispatch => {
  return CommentApiUtil.updateComment(comment)
    .then(comment => dispatch(receiveComment(comment)),
          errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const deleteComment = (id) => dispatch => {
  return CommentApiUtil.deleteComment(id)
    .then(comment => dispatch(removeComment(comment)),
          errors => dispatch(receiveErrors(errors.responseJSON)));

};




////Annotations and songs can hold array of comment ids and pull out only the ones they want.
