import { connect } from 'react-redux';
import {
  createAnnotation,
  updateAnnotation,
  deleteAnnotation,
  fetchAnnotations } from '../../actions/annotation_actions';
import Annotation from './annotation';
import { annotationComments } from '../../reducers/selectors';
import { fetchAnnotationComments } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    closeAnnotation: ownProps.closeAnnotation,
    currentAnnotation: state.annotations.currentAnnotation,
    currentTrack: state.songs.currentTrack,
    annotationType: ownProps.annotationType,
    currentUser: state.session.currentUser,
    selection: ownProps.selection,
    position: ownProps.position,
    comments: annotationComments(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createAnnotation: (annotation) => dispatch(createAnnotation(annotation)),
    deleteAnnotation: (id) => dispatch(deleteAnnotation(id)),
    updateAnnotation: (annotation, vote) => dispatch(updateAnnotation(annotation, vote)),
    fetchAnnotations: (id) => dispatch(fetchAnnotations(id)),
    fetchAnnotationComments: (id) => dispatch(fetchAnnotationComments(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Annotation);
