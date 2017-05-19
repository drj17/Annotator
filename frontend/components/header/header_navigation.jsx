import React from 'react';
import { Link } from 'react-router';

class HeaderNavigation extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let newSongLink = "";
    let homeLink = <Link className="header-navigation-link" to="/">Top Songs</Link>;
    if(this.props.user){
      newSongLink = <Link className="header-navigation-link" to="/new_song/">New Song</Link>;
    }
    return(
      <section className="header-navigation">
        <section className="nav-links">
          <a target="_blank" className="nav-icon" href="http://github.com/drj17"><i className="fa fa-github" aria-hidden="true"></i></a>
          <a target="_blank" className="nav-icon" href="https://www.linkedin.com/in/david-janas-661325125/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
          {homeLink}
          {newSongLink}
        </section>
      </section>
    );
  }
}

export default HeaderNavigation;
