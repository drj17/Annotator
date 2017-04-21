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
      this.setState({title: "", artist: "", lyrics: "", author_id: this.props.currentUser.id});
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
    const errors = this.props.errors.map(error => <li key= {error} className="error">{error}</li>);

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
            <ul>{errors}</ul>
            <label>Song Title
              <input className="input-field" onChange={this.update("title")} type="text" value={title}></input>
            </label>
            <label>Artist
              <input className="input-field" onChange={this.update("artist")} type="text" value={artist}></input>
            </label>
            <label>Lyrics
              <textarea onChange={this.update("lyrics")} value={lyrics}/>
            </label>
            <label>Artwork
              <input type="file" onChange={this.uploadFile}></input>
              {img}
            </label>
            <input className="form-submit" type="submit" value={submitText}/>
          </form>
        </section>
    );
  }
}

export default TrackForm;
