import React from 'react';
import { Link, hashHistory } from 'react-router';
import AnnotationContainer from '../annotations/annotation_container';


class TrackShow extends React.Component {
  constructor(props){
    super(props);
    this.getSelection = this.getSelection.bind(this);
    this.state = {
      annotationOpen: false,
      annotationType: "new"
    };

    this.populateAnnotations = this.populateAnnotations.bind(this);
  }

  componentDidMount(){
    this.props.fetchSong(this.props.trackId)
              .then(() => this.populateAnnotations());

  }

  getSelection() {
    let text = "";
    let lyrics = document.getElementById("lyrics");
    if (window.getSelection) {
        let start = window.getSelection().focusOffset;
        text = window.getSelection().toString();
        let range = [start, start+text.length];
        if(range[1] - range[0] > 0){
          if(this.props.currentUser && window.getSelection().anchorNode.parentNode.nodeName !== "SPAN" ){
            this.setState({annotationOpen: true, annotationType: "new"});
          }
        }
    }
  }


  componentWillReceiveProps(newProps){
    if(newProps.params.songId){
      if(parseInt(newProps.params.songId) !== this.props.currentTrack.id){
        this.props.fetchSong(newProps.params.songId)
                  .then(() => this.populateAnnotations());
      }
    }
  }

  populateAnnotations() {
    let lyrics = document.getElementById('lyrics');
    let offset = 0;

    if(!lyrics || lyrics.innerHTML.includes("</span>")  || this.props.annotations.length === 0 ){
      return;
    }
      this.props.annotations.forEach(annotation => {
        let text = lyrics.innerHTML;
        var span = document.createElement('SPAN');
        //grab text content to be replaced, grab text with offset;
        span.textContent = lyrics.innerHTML.slice(annotation.start_index+offset, annotation.end_index+offset);
        //replace inner html with new span element
        lyrics.innerHTML = this.replaceAt(
                                          text,
                                          annotation.start_index + offset,
                                          annotation.end_index + offset,
                                          span.outerHTML
                                        );
        //indexes have changed due to span elements, offset by span length;
        offset += span.outerHTML.length;
      });
  }



  replaceAt(text, start, end, content){
    return text.substring(0, start) + content + text.substring(end);
  }



  render(){
    debugger
    let annotation = "";
    if(this.state.annotationOpen){
      annotation = <AnnotationContainer annotationType={this.state.annotationType}/>;
    }
    let imgUrl = this.props.currentTrack.image_url;
    let deleteButton = "";
    let editLink = "";
    if(this.props.currentUser){
      if(this.props.currentTrack.author_id === this.props.currentUser.id){
        deleteButton = <button id="delete" onClick={
            () => this.props.deleteSong(this.props.currentTrack.id)
            .then(() => hashHistory.push('/'))
          }>Delete Track</button>;
        }
        // editLink = <Link to={`/edit_song/${this.props.currentTrack.id}`}>Edit Track</Link>;
    }
    let styles = {
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + imgUrl + ')'
    };
    if(this.props.loading || !this.props.currentTrack.id){
      return(
        <div className="loader"></div>
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
              <section className="user-controls">
                {editLink}
                {deleteButton}
              </section>
            </section>
          </section>
        </section>
        <section className="track-lyrics">
          <p id="lyrics" onMouseUp={() => this.getSelection()}>{this.props.currentTrack.lyrics}</p>
          <section className="track-annotations">{annotation}</section>
        </section>
      </section>
    );}
  }
}


export default TrackShow;
