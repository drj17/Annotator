import React from 'react';
import Modal from 'react-modal';
import { hashHistory } from 'react-router';
import update from 'react-addons-update';

class headerLoggedOut extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: {username: "", password: ""},
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.openModal = this.openModal.bind(this);
    // this.props.closeModal = this.closeModal.bind(this);
    this.loginDemo = this.loginDemo.bind(this);
  }

  update(field) {
    return e => this.setState({
      user: update(this.state.user, {[field]: {$set: e.currentTarget.value}})
    });
  }




  handleSubmit(e) {
    e.preventDefault();
    const user = this.state.user;
    if(this.props.loginModalType === "login"){
      this.props.login({user})
        .then(() => this.props.clearErrors())
        .then(() => this.props.closeModal());

    } else {
      this.props.signup({user})
        .then(() => this.props.closeModal());
    }
  }

  loginDemo(e) {
    e.preventDefault();

    this.props.login({user: {username: "demo_user", password: "password"}})
              .then(() => this.props.closeModal());
  }

  openModal(type){
    return e => {
      e.preventDefault();
      if(type === "login"){
        this.props.openLoginModal();
      } else {
        this.props.openSignupModal();
      }
      this.props.clearErrors();
    };
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }



  render (){
    let errors;
    if(this.props.errors){
      errors = this.props.errors.map(error => <li key= {error} className="error">{error}</li>);
    }
    let formText;
    let oppositeModal;
    let buttonText;
    let linkText;
    if (this.props.loginModalType=== "login"){
      formText = "Log in to";
      oppositeModal = "signup";
      buttonText = "Log in";
      linkText = "CREATE AN ACCOUNT";
    } else {
      formText = "Sign up for";
      oppositeModal = "login";
      buttonText = "Sign up";
      linkText = "LOG IN";
    }

    return (
      <section className="auth-section">
        <button className="nav-button" onClick={this.openModal("login")}>LOG IN</button>
        <button className="nav-button" onClick={this.openModal("signup")}>SIGN UP</button>
          <Modal
             isOpen={this.props.loginModalOpen}
             onRequestClose={this.props.closeModal}
             contentLabel="Log In Modal"
             className="login-modal"
           >
           <h1 className="left-item">{formText} Annotator</h1>
             <form onSubmit={this.handleSubmit}>
                <ul>{errors}</ul>
     							<input type="text"
                    placeholder="Username"
     								value={this.state.user.username}
     								onChange={this.update("username")}
     								className="field" />
     							<input type="password"
                    placeholder="Password"
     								value={this.state.user.password}
     								onChange={this.update("password")}
     								className="field" />
                  <section className="auth-buttons">
                    <input className="auth-button" type="submit" value={buttonText} />
                    <button className="auth-button" onClick={this.loginDemo}>Demo Login</button>
                  </section>
                  <button className="modal-link" onClick={this.openModal(oppositeModal)}>{linkText}</button>
     				</form>
          </Modal>
      </section>
    );
  }
}

export default headerLoggedOut;
