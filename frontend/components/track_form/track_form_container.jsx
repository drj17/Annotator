import { connect } from 'react-redux';
import { createSong, clearErrors } from '../../actions/songs_actions';
import SongForm from './song_form';

const mapStateToProps = state => {
  return {
    currentSong: state.songs.currentSong
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createSong: (song) => dispatch(createSong(song)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongForm);
