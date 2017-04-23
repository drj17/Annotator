import { connect } from 'react-redux';
import { deleteSong, updateSong, fetchSong } from '../../actions/song_actions';
import { fetchAnnotations } from '../../actions/annotation_actions';
import TrackShow from './track_show';
import React from 'react';
import values from 'lodash/values';


const mapStateToProps = (state, ownProps) => {
  return {
    currentTrack: state.songs.currentTrack,
    currentUser: state.session.currentUser,
    loading: state.loading.loading,
    trackId: ownProps.params.songId,
    annotations: (state.annotations.annotations)
  };
};


const mapDispatchToProps = dispatch => {
  return {
    fetchSong: (id) => dispatch(fetchSong(id)),
    deleteSong: (id) => dispatch(deleteSong(id)),
    fetchAnnotations: (id) => dispatch(fetchAnnotations(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackShow);
