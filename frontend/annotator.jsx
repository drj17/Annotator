import Root from './components/root';
import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDom.render(<Root store={ store } />, root);
});
