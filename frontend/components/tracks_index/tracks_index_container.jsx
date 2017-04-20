import React from 'react';
import { connect } from 'react-redux';
import { fetchSongs,
         fetchSong,
         clearErrors } from '../../actions/song_actions';
import TrackIndex from './track_index';

const mapStateToProps = state => {
  return {
    currentTrack: state.songs.currentTrack,
    tracks: state.songs.tracks,
    errors: state.songs.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSongs: () => dispatch(fetchSongs()),
    clearErrors: () => dispatch(clearErrors()),
    fetchSong: (id) => dispatch(fetchSong(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndex);
