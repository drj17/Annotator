import * as AnnotationApiUtil from '../util/annotation_api_util';

export const RECEIVE_ALL_ANNOTATIONS = "RECEIVE_ALL_ANNOTATIONS";
export const RECEIVE_ANNOTATION = "RECEIVE_ANNOTATION";
export const REMOVE_ANNOTATION = "REMOVE_ANNOTATION";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const START_LOADING_ANNOTATION = "START_LOADING_ANNOTATION";
export const FINISH_LOADING_ANNOTATIONS = "FINISH_LOADING_ANNOTATIONS";
export const OPEN_ANNOTATION = "OPEN_ANNOTATION";
export const CLOSE_ANNOTATION = "CLOSE_ANNOTATION";
export const CHANGE_ANNOTATION_TYPE = "CHANGE_ANNOTATION_TYPE";

export const changeAnnotationType = (annotationType) => {
  return {
    type: CHANGE_ANNOTATION_TYPE,
    annotationType
  };
};

export const openAnnotation = () => {
  return {
    type: OPEN_ANNOTATION
  };
};
export const closeAnnotation = () => {
  return {
    type: CLOSE_ANNOTATION
  };
};

const receiveAllAnnotations = (annotations) => {
  return {
    type: RECEIVE_ALL_ANNOTATIONS,
    annotations
  };
};

const receiveAnnotation = (annotation) => {
  return {
    type: RECEIVE_ANNOTATION,
    annotation
  };
};

const removeAnnotation = (annotation) => {
  return {
    type: REMOVE_ANNOTATION,
    annotation
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const startLoadingAnnotation = () => {
  return {
    type: START_LOADING_ANNOTATION
  };
};

export const finishLoadingAnnotations = () => {
  return {
    type: FINISH_LOADING_ANNOTATIONS
  };
};


export const fetchAnnotations = (songId) => dispatch => {
  return AnnotationApiUtil.fetchAnnotations(songId)
    .then(annotations => dispatch(receiveAllAnnotations(annotations)),
          errors => dispatch(receiveErrors(errors.responseJSON)));
};
export const fetchAnnotation = (id) => dispatch => {
  return AnnotationApiUtil.fetchAnnotation(id)
    .then(annotation => dispatch(receiveAnnotation(annotation)),
          errors => dispatch(receiveErrors(errors.responseJSON)));
};
export const deleteAnnotation = (id) => dispatch => {
  return AnnotationApiUtil.deleteAnnotation(id)
    .then(annotation => dispatch(removeAnnotation(annotation)),
          errors => dispatch(receiveErrors(errors.responseJSON)));
};
export const updateAnnotation = (annotation, vote) => dispatch => {
  return AnnotationApiUtil.updateAnnotation(annotation, vote)
    .then(annotation => dispatch(receiveAnnotation(annotation)),
          errors => dispatch(receiveErrors(errors.responseJSON)));
};
export const createAnnotation = (annotation) => dispatch => {
  return AnnotationApiUtil.createAnnotation(annotation)
    .then(annotation => dispatch(receiveAnnotation(annotation)),
          errors => dispatch(receiveErrors(errors.responseJSON)));
};
