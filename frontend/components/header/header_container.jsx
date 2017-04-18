import { connect } from 'react-redux';
import React from 'react';
import { signup, login, logout } from '../../actions/session_actions';
import Header from './header';

const mapStateToProps = state => {
  
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
