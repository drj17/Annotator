import React from 'react';
import TrackIndexItem from './track_index_item';

class TrackIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchSongs();
  }

  render() {
    const tracks = this.props.tracks.map(track => <TrackIndexItem key={track.id} track={track}/>);
    return (
      <section class="songs-index">
        <ul>
          {tracks}
        </ul>
      </section>  
    );
  }


}

export default TrackIndex;
