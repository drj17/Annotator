import { connect } from 'react-redux';
import {
  createAnnotation,
  updateAnnotation,
  deleteAnnotation,
  fetchAnnotations } from '../../actions/annotation_actions';
import Annotation from './annotation';

const mapStateToProps = (state, ownProps) => {
  return {
    closeAnnotation: ownProps.closeAnnotation,
    currentAnnotation: state.annotations.currentAnnotation,
    currentTrack: state.songs.currentTrack,
    annotationType: ownProps.annotationType,
    currentUser: state.session.currentUser,
    selection: ownProps.selection
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createAnnotation: (annotation) => dispatch(createAnnotation(annotation)),
    deleteAnnotation: (id) => dispatch(createAnnotation(id)),
    updateAnnotation: (annotation) => dispatch(updateAnnotation),
    fetchAnnotations: (id) => dispatch(fetchAnnotations(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Annotation);
