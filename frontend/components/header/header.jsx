import React from 'react';
import HeaderLoggedIn from './header_logged_in';
import HeaderLoggedOut from './header_logged_out';

class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
  
    if(this.props.currentUser){
      return <HeaderLoggedIn user={this.props.currentUser}/>;
    } else {
      return <HeaderLoggedOut />;
    }
  }
}

export default Header;
