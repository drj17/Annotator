import { connect } from 'react-redux';
import {
  createAnnotation,
  updateAnnotation,
  deleteAnnotation,
  fetchAnnotations,
  changeAnnotationType,
  openAnnotation,
  closeAnnotation
} from '../../actions/annotation_actions';
import Annotation from './annotation';
import { annotationComments } from '../../reducers/selectors';
import { fetchAnnotationComments } from '../../actions/comment_actions';
import { openLoginModal } from '../../actions/login_modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentAnnotation: state.annotations.currentAnnotation,
    currentTrack: state.songs.currentTrack,
    annotationType: state.annotations.annotationType,
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
    changeAnnotationType: (annotationType) => dispatch(changeAnnotationType(annotationType)),
    openAnnotation: () => dispatch(openAnnotation()),
    closeAnnotation: () => dispatch(closeAnnotation()),
    openLoginModal: () => dispatch(openLoginModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Annotation);
