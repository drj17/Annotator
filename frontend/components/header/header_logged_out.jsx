import React from 'react';
import Modal from 'react-modal';
import { hashHistory } from 'react-router';

class headerLoggedOut extends React.Component {
  constructor(props){
    super(props);
    this.state = {username: "", password: "" };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login({user})
    .then(this.props.closeModal)
    .then(hashHistory.push('/'));
  }



  render (){
    return (
      <div>
        <h1>Not Logged In!</h1>
        <button onClick={this.props.openModal}>Log In!</button>
          <Modal
             isOpen={this.props.open}
             onRequestClose={this.props.closeModal}
             contentLabel="Log In Modal"
             className="login-modal"
           >
           <h1 class="left-item">Sign in to Annotator</h1>
             <form onSubmit={this.handleSubmit}>
     							<input type="text"
                    placeholder="Username"
     								value={this.state.username}
     								onChange={this.update("username")}
     								className="field" />
     							<input type="password"
                    placeholder="Password"
     								value={this.state.password}
     								onChange={this.update("password")}
     								className="field" />
                  <input className="login" type="submit" value="Submit" />
     				</form>
          </Modal>

      </div>
    );
  }
}

export default headerLoggedOut;
