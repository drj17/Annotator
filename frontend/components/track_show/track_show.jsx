import React from 'react';
import { Link } from 'react-router';

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
    let imgUrl = this.props.currentTrack.image_url;
    let styles = {
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + imgUrl + ')'
    };
    if(this.props.loading || !this.props.currentTrack.id){
      return(
        <h1>Loading!</h1>
      );
    } else {
    return(
      <section className="track-page">
        <section className = "track-page-header" style={ styles }>
          <section className = "album-info">
            <img src={this.props.currentTrack.image_url}/>
            <section className="track-page-info">
              <h1>{this.props.currentTrack.title}</h1>
              <span>{this.props.currentTrack.artist}</span>
              <Link to={`/edit_song/${this.props.currentTrack.id}`}>Edit Track</Link>
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
