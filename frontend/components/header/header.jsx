import React from 'react';
import HeaderLoggedIn from './header_logged_in';
import HeaderLoggedOut from './header_logged_out';
import Modal from 'react-modal';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {open: false, currentUser: null};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openModal(formType){
    this.setState({open: true});
  }

  closeModal(){
    this.setState({open: false});
  }

  render(){
    if(this.props.currentUser){
      return(
        <section className="nav-header">
          <h1>SEARCH</h1>
          <h1>ANNOTATOR</h1>
          <HeaderLoggedIn
            user={this.props.currentUser}
            logout={this.props.logout}
          />
        </section>
      );
    } else {
      return (
        <section className="nav-header">
          <h1>SEARCH</h1>
          <h1>ANNOTATOR</h1>
          <HeaderLoggedOut
            open={this.state.open}
            openModal={this.openModal}
            closeModal={this.closeModal}
            login={this.props.login}
            update={this.update}
          />
        </section>
      );
    }
  }
}

export default Header;
