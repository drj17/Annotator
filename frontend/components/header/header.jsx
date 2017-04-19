import React from 'react';
import HeaderLoggedIn from './header_logged_in';
import HeaderLoggedOut from './header_logged_out';

class Header extends React.Component {
  constructor(props){
    super(props);

    }


  render(){
    if(this.props.currentUser){
      return(
        <section className="nav-header">
          <h1>SEARCH</h1>
          <h1 className="logo">ANNOTATOR</h1>
          <HeaderLoggedIn
            user={this.props.currentUser}
            logout={this.props.logout}
            errors={this.props.errors}
          />
        </section>
      );
    } else {
      return (
        <section className="nav-header">
          <h1>SEARCH</h1>
          <h1 className="logo">ANNOTATOR</h1>
          <HeaderLoggedOut
            login={this.props.login}
            signup={this.props.signup}
            errors={this.props.errors}
            clearErrors={this.props.clearErrors}
          />
        </section>
      );
    }
  }
}

export default Header;
