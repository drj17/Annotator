import React from 'react';
import Modal from 'react-modal';
import { hashHistory } from 'react-router';
import update from 'react-addons-update';

class headerLoggedOut extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: {username: "", password: ""},
      modal: {open: false, formType: "login"},
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  update(field) {
    return e => this.setState({
      user: update(this.state.user, {[field]: {$set: e.currentTarget.value}})
    });
  }




  handleSubmit(e) {
    e.preventDefault();
    const user = this.state.user;
    if(this.state.modal.formType === "login"){
      this.props.login({user})
        .then(() => this.closeModal());
    } else {
      this.props.signup({user})
        .then(() => this.closeModal());
    }
  }

  openModal(formType){
    this.setState({modal: {open: true, formType: formType}});
    this.props.clearErrors();
  }

  closeModal(){
    this.setState({modal: {open: false}});

  }

  componentWillMount() {
    Modal.setAppElement('body');
  }



  render (){
    let formText = this.state.modal.formType === "login" ? "Log in to" : "Sign up for";
    let errors = this.props.errors.map(error => <li key= {error} className="error">{error}</li>);
    let opposite = this.state.modal.formType === "login" ? "Sign Up" : "Log In";
    let oppositeModal = this.state.modal.formType === "login" ? "signup" : "login";
    return (
      <div className>
        <button onClick={() => this.openModal("login")}>LOG IN</button>
        <button onClick={() => this.openModal("signup")}>SIGN UP</button>
          <Modal
             isOpen={this.state.modal.open}
             onRequestClose={this.closeModal}
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
                    <input className="auth-button" type="submit" value="Submit" />
                    <button className="auth-button" onClick={() => this.openModal(oppositeModal)}>{opposite}</button>
                  </section>
     				</form>
          </Modal>
      </div>
    );
  }
}

export default headerLoggedOut;
