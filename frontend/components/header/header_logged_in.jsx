import React from 'react';
import { hashHistory } from 'react-router';
const greeting = (props) => (
  <section className="auth-section">
    <button className="nav-button">{props.user.username.toUpperCase()}</button>
    <button className="nav-button" onClick={
        () => props.logout()
                   .then(() => hashHistory.push('/'))
      }>LOG OUT</button>
  </section>
);

export default greeting;
