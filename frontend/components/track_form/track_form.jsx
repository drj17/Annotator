import React from 'react';
import { hashHistory } from 'react-router';

class TrackForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: "",
      lyrics: "",
      artist: "",
      author_id: props.currentUser.id
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  update(field){
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();

    this.props.createSong(this.state)
      .then(() => hashHistory.push('/'));
  }

  render() {
    const { title, lyrics, artist } = this.state;

    return (
      <section className="new-song-container">
        <section className="new-song-form-container">

          <h1>Add a New Song</h1>
          <h2>{this.props.errors}</h2>
          <form className="new-song-form" onSubmit={this.handleSubmit}>
            <label>Song Title
              <input onChange={this.update("title")} type="text"></input>
            </label>
            <label>Artist
              <input onChange={this.update("artist")} type="text"></input>
            </label>
            <label>Lyrics
              <textarea onChange={this.update("lyrics")}/>
            </label>
            <input type="submit" value="Add Song"/>
          </form>

        </section>
      </section>


    );
  }
}

export default TrackForm;
