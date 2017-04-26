import Root from './components/root';
import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store/store';
import { fetchAnnotations } from './actions/annotation_actions';
import { fetchSearchResults } from './actions/search_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;
  window.fetchSearchResults = fetchSearchResults;
  const root = document.getElementById('root');
  ReactDom.render(<Root store={ store } />, root);
});
