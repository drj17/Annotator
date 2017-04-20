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
          {homeLink}
          {newSongLink}
        </section>
      </section>
    );
  }
}

export default HeaderNavigation;
