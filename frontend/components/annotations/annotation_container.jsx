import { connect } from 'react-redux';
import {
  createAnnotation,
  updateAnnotation,
  deleteAnnotation } from '../../actions/annotation_actions';
import Annotation from './annotation';

const mapStateToProps = (state, ownProps) => {
  return {
    currentAnnotation: state.currentAnnotation,
    annotationType: ownProps.annotationType
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createAnnotation: (annotation) => dispatch(createAnnotation(annotation)),
    deleteAnnotation: (id) => dispatch(createAnnotation(id)),
    updateAnnotation: (annotation) => dispatch(updateAnnotation)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Annotation);
