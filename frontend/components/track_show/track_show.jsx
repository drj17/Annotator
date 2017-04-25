import React from 'react';
import { Link, hashHistory } from 'react-router';
import AnnotationContainer from '../annotations/annotation_container';



class TrackShow extends React.Component {
  constructor(props){
    super(props);
    this.getSelection = this.getSelection.bind(this);
    this.state = {
      annotationOpen: false,
      annotationType: "new",
      currentAnnotation: this.props.currentAnnotation,
      annotations: this.props.annotations
    };
    this.selection = "";

    this.populateAnnotations = this.populateAnnotations.bind(this);
    this.isValidAnnotation = this.isValidAnnotation.bind(this);
    this.closeAnnotation = this.closeAnnotation.bind(this);
    this.orderAnnotations = this.orderAnnotations.bind(this);
  }

  componentDidMount(){
    this.props.fetchSong(this.props.trackId);

  }

  componentWillReceiveProps(newProps){
    if(newProps.params.songId){
      if(parseInt(newProps.params.songId) !== this.props.currentTrack.id){
        this.props.fetchSong(newProps.params.songId)
                  .then(() => this.populateAnnotations());
      }

    }
  }

  getSelection() {
    let sel = document.getSelection();
    let parent = document.getSelection().anchorNode.parentElement;
    let start = document.getSelection().anchorOffset;
    let end = start + document.getSelection().toString().length;

    if(end < start){
      let temp = end;
      start = end;
      end = start;
    }

    let offset = this.findOffset(parent);
    let range = [start + offset, end + offset];
    if(this.isValidAnnotation(range)){
      this.setState({ annotationOpen: true, annotationType: "new"});
    }
    this.selection = range;
  }

  closeAnnotation(){
    this.setState({annotationOpen: false});
  }

  findOffset(element){
    let offset = 0;
    while(element.previousSibling) {
      offset += element.previousSibling.textContent.length;
      element = element.previousSibling;

    }
     return offset;
  }

  orderAnnotations(){

    let ordered =this.props.annotations.sort((a, b) => {
      if(a.start_index < b.start_index){
        return -1;
      } else {
        return 1;
      }
    });

    return ordered;
  }
  populateAnnotations() {
    let lyricsContainer = [];
    let offset = 0;

    let orderedAnnotations = this.orderAnnotations();
    orderedAnnotations.forEach((annotation) => {
      lyricsContainer.push(<span key={this.uniqueId()} className="normal">
        {this.props.currentTrack.lyrics.slice(offset, annotation.start_index)}
      </span>);
      lyricsContainer.push(<span id={annotation.id}
                                 key={this.uniqueId()}
                                 className="annotated"
                                 onClick={() => this.openAnnotation(annotation.id)}>
        {this.props.currentTrack.lyrics.slice(annotation.start_index, annotation.end_index)}
      </span>);
      offset = annotation.end_index;

    });

    lyricsContainer.push(<span key={this.uniqueId()} className="normal">
      {this.props.currentTrack.lyrics.slice(offset, this.props.currentTrack.lyrics.length)}
    </span>);

    return lyricsContainer;
  }

  openAnnotation(id){
    this.props.fetchAnnotation(id).then(() => this.setState({
                annotationOpen: true,
                annotationType: "show",
                currentAnnotation: this.props.currentAnnotation
              }));

  }

  uniqueId() {
    // return new Date().getTime();
    return Math.random(1000);
  }

  isValidAnnotation(range){
    let valid = true;
    if(range[1] - range[0] <= 0){
      valid = false;
    }
    this.props.annotations.forEach(annotation => {
      if(range[0] <= annotation.end_index && annotation.start_index <= range[1]){
        valid = false;
      }
    });
    return valid;
  }


  render(){
    let annotation = "";
    if(this.state.annotationOpen){
      annotation = <AnnotationContainer
        annotationType={this.state.annotationType}
        annotation={this.props.currentAnnotation}
        selection={this.selection}
        closeAnnotation={this.closeAnnotation}
        />;
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
        <section className="track-body">
            <section className="track-lyrics">
              <p onMouseUp={() => this.getSelection()}>{this.populateAnnotations()}</p>
            </section>
          <section className="track-annotations">{annotation}</section>
        </section>
      </section>
    );}
  }
}



export default TrackShow;
