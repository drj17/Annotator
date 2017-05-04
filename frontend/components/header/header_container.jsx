import { connect } from 'react-redux';
import React from 'react';
import { signup, login, logout, clearErrors } from '../../actions/session_actions';
import {
  openLoginModal,
  openSignupModal,
  closeModal
  } from '../../actions/login_modal_actions';
import Header from './header';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    errors: state.session.errors,
    loginModalOpen: state.loginModal.open,
    loginModalType: state.loginModal.type
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return  {
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors()),
    openLoginModal: () => dispatch(openLoginModal()),
    openSignupModal: () => dispatch(openSignupModal()),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
