import React from 'react';
import { hashHistory } from 'react-router';


class TrackForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      lyrics: "",
      artist: "",
      author_id: props.currentUser.id,
      errors: this.props.errors
    };


    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadFile = this.uploadFile.bind(this);


  }

  componentDidMount(){
    if(this.props.formType === "edit"){
      this.props.fetchSong(this.props.songId)
      .then(() => this.setState(this.props.currentTrack));
    }
  }

  componentWillReceiveProps(newProps){
    if(!newProps.params.songId){
      return;
    } else if (parseInt(newProps.params.songId) !== this.props.currentTrack.id){
      this.props.fetchSong(newProps.params.songId)
      .then(() => this.setState(this.props.currentTrack));
    }
  }


  update(field){
    return e => this.setState({
      [field]: e.target.value
    });
  }

  uploadFile(e){
    var reader = new FileReader();
    var file = e.currentTarget.files[0];
    reader.onloadend = function() {
      this.setState({ imageUrl: reader.result, imageFile: file});
    }.bind(this);
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }

  }


  handleSubmit(e){
    e.preventDefault();
    this.props.clearErrors();
    let file = this.state.imageFile;
    let formData = new FormData();
    formData.append("song[title]", this.state.title);
    formData.append("song[lyrics]", this.state.lyrics);
    formData.append("song[artist]", this.state.artist);
    formData.append("song[author_id]", this.state.author_id);
    if(this.state.imageFile){
      formData.append("song[image]", file);
    }
    this.props.action(formData, this.props.currentTrack.id)
      .then(() => hashHistory.push('/'));
  }

  render() {
    const { title, lyrics, artist } = this.state;
    const formText = this.props.formType === "new" ? "Add a New Song" : `Edit ${title}`;
    const submitText = this.props.formType === "new" ? "Add Song" : "Submit Edits";



    let img = "";
    if(this.state.imageFile){
      img = <img className="preview-image" src={this.state.imageUrl}/>;
    } else if (this.props.currentTrack && this.props.formType !== "new"){
      img = <img className="preview-image" src={this.props.currentTrack.image_url}/>;
    }
    return (
        <section className="new-song-form-container">
          <h1>{formText}</h1>

          <form className="new-song-form" onSubmit={this.handleSubmit}>
            <label htmlFor="title">Song Title</label>
              <span className="errors">{this.props.errors.title[0]}</span>
              <input id="title" className="input-field" onChange={this.update("title")} type="text" value={title}></input>
            <label htmlFor="artist">Artist</label>
              <span className="errors">{this.props.errors.artist[0]}</span>
              <input
                className="input-field" id="artist" onChange={this.update("artist")} type="text" value={artist}></input>
              <label htmlFor="lyrics">Lyrics</label>
              <span className="errors">{this.props.errors.lyrics[0]}</span>
              <textarea id="lyrics" onChange={this.update("lyrics")} value={lyrics}/>
            <label htmlFor="upload">Artwork </label>
              <input id="upload"type="file" onChange={this.uploadFile}></input>
              {img}

            <input className="form-submit" type="submit" value={submitText}/>
          </form>
        </section>
    );
  }
}

export default TrackForm;
