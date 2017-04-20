import React from 'react';
import TrackIndexItem from './track_index_item';
import { Link } from 'react-router';

class TrackIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchSongs();
  }

  render() {
    const tracks = this.props.tracks.map((track, index)=> <TrackIndexItem
      index={index}
      key={track.id}
      track={track}
      fetchSong={this.props.fetchSong} />);
    return (
      <section className="tracks-index">
        <ul>
          {tracks}
        </ul>
      </section>
    );
  }


}

export default TrackIndex;
