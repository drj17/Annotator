import { connect } from 'react-redux';
import { deleteSong, updateSong, fetchSong } from '../../actions/song_actions';
import { fetchAnnotations,
         fetchAnnotation,
         openAnnotation,
         closeAnnotation,
         changeAnnotationType } from '../../actions/annotation_actions';
import TrackShow from './track_show';
import React from 'react';
import values from 'lodash/values';
import { songComments } from '../../reducers/selectors';
import { fetchSongComments, clearErrors } from '../../actions/comment_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    currentTrack: state.songs.currentTrack,
    currentUser: state.session.currentUser,
    loading: state.loading.loading,
    trackId: ownProps.params.songId,
    annotations: state.annotations.annotations,
    currentAnnotation: state.annotations.currentAnnotation,
    comments: songComments(state),
    open: state.annotations.open
  };
};


const mapDispatchToProps = dispatch => {
  return {
    fetchSong: (id) => dispatch(fetchSong(id)),
    deleteSong: (id) => dispatch(deleteSong(id)),
    fetchAnnotations: (id) => dispatch(fetchAnnotations(id)),
    fetchAnnotation: (id) => dispatch(fetchAnnotation(id)),
    fetchSongComments: (id) => dispatch(fetchSongComments(id)),
    closeAnnotation: () => dispatch(closeAnnotation()),
    openAnnotation: () => dispatch(openAnnotation()),
    clearErrors: () => dispatch(clearErrors()),
    changeAnnotationType: (type) => dispatch(changeAnnotationType(type))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackShow);
