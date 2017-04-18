import React from 'react';
import Modal from 'react-modal';

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
    this.props.login({user});
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
             class="login-modal"
           >
           <h3>Log In!</h3>
             <form onSubmit={this.handleSubmit}>
     						<label> Username:
     							<input type="text"
     								value={this.state.username}
     								onChange={this.update("username")}
     								className="login-input" />
     						</label>
     						<label> Password:
     							<input type="password"
     								value={this.state.password}
     								onChange={this.update("password")}
     								className="login-input" />
     						</label>
     						<input type="submit" value="Submit" />
     				</form>
          </Modal>

      </div>
    );
  }
}

export default headerLoggedOut;
