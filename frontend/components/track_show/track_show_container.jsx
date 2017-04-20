import { connect } from 'react-redux';
import { deleteSong, updateSong } from '../../actions/song_actions';

const mapStateToProps = state => {
  return {
    currentTrack: state.tracks.currentTrack
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
