import React from 'react';
import { connect } from 'react-redux';
import Votes from './votes';
import { updateAnnotation } from '../../../actions/annotation_actions';

const mapStateToProps = state => {
  return {
    currentAnnotation: state.annotations.currentAnnotation,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateAnnotation: (annotation, vote) => dispatch(updateAnnotation(annotation, vote)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Votes);
