import React from 'react';

const greeting = (props) => (
  <div>
    <h1>{props.user.username}</h1>
    <button onClick={() => props.logout}>Log Out</button>
  </div>
);

export default greeting;
