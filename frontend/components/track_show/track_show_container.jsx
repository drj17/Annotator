import { connect } from 'react-redux';
import { deleteSong, updateSong, fetchSong } from '../../actions/song_actions';
import TrackShow from './track_show';


const mapStateToProps = (state, ownProps) => {
  return {
    currentTrack: state.songs.currentTrack,
    currentUser: state.session.currentUser,
    loading: state.loading.loading,
    trackId: ownProps.params.songId
  };
};


const mapDispatchToProps = dispatch => {
  return {
    fetchSong: (id) => dispatch(fetchSong(id)),
    deleteSong: (id) => dispatch(deleteSong(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackShow);
