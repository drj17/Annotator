import React from 'react';
import { connect } from 'react-redux';
import { fetchSongs,
        clearErrors } from '../../actions/song_actions';
import TrackIndex from './track_index';

const mapStateToProps = state => {
  return {
    currentTrack: state.songs.currentTrack, //undefined at this point?
    tracks: state.songs.tracks,
    errors: state.songs.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSongs: () => dispatch(fetchSongs()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndex);
