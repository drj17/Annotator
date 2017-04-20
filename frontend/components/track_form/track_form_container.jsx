import { connect } from 'react-redux';
import { createSong, clearErrors } from '../../actions/song_actions';
import TrackForm from './track_form';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    errors: state.songs.errors
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
)(TrackForm);
