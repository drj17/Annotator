import { connect } from 'react-redux';
import { createComment,
        deleteComment,
        updateComment,
        fetchComment,
        clearErrors } from '../../actions/comment_actions';
import CommentIndex from './comment_index';

const mapStateToProps = (state, ownProps) => {
  return {
    comments: ownProps.comments,
    commentableId: ownProps.commentableId,
    commentableType: ownProps.commentableType,
    currentUser: state.session.currentUser,
    overRide: ownProps.overRide,
    errors: state.comments.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (id) => dispatch(deleteComment(id)),
    updateComment: (comment) => dispatch(updateComment(comment)),
    fetchComment: (id) => dispatch(fetchComment(id)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);
