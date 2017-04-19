import React from 'react';

const greeting = (props) => (
  <div className="auth-section">
    <h1>{props.user.username.toUpperCase()}</h1>
    <button onClick={props.logout}>LOG OUT</button>
  </div>
);

export default greeting;
