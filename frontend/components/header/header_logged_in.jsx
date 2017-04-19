import React from 'react';

const greeting = (props) => (
  <section className="auth-section">
    <button className="nav-button">{props.user.username.toUpperCase()}</button>
    <button className="nav-button" onClick={props.logout}>LOG OUT</button>
  </section>
);

export default greeting;
