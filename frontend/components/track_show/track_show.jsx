import React from 'react';

class TrackShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchSong(this.props.trackId);
  }

  componentWillReceiveProps(newProps){
    if(parseInt(newProps.params.songId) !== this.props.currentTrack.id){
      this.props.fetchSong(newProps.params.songId);
    }
  }

  render(){
    if(this.props.loading || !this.props.currentTrack.id){
      return(
        <h1>Loading!</h1>
      );
    } else {
    return(
      <section className="track-page">
        <section className = "track-page-header">
          <section className = "album-info">
            <img src="https://images.genius.com/549716999277f3f5f5f8b557578afb44.700x700x1.jpg"/>
            <section className="track-page-info">
              <h1>{this.props.currentTrack.title}</h1>
              <span>{this.props.currentTrack.artist}</span>
            </section>
          </section>
        </section>
        <section className="track-lyrics">
          <h1>{this.props.currentTrack.lyrics}</h1>
          <section className="track-annotations"></section>
        </section>
      </section>
    );}
  }
}


export default TrackShow;
