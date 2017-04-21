import { connect } from 'react-redux';
import { createSong, clearErrors, updateSong, fetchSong } from '../../actions/song_actions';
import TrackForm from './track_form';

const mapStateToProps = (state, ownProps) => {
  let formType = "edit";
  if(ownProps.location.pathname.replace(/\//g, "") === "new_song"){
    formType = "new";
  }

  return {
    currentUser: state.session.currentUser,
    errors: state.songs.errors,
    songId: ownProps.params.songId,
    formType: formType,
    currentTrack: state.songs.currentTrack
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.params.songId ? updateSong : createSong;
  return {
    action: (song) => dispatch(action(song)),
    clearErrors: () => dispatch(clearErrors()),
    fetchSong: (id) => dispatch(fetchSong(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackForm);
