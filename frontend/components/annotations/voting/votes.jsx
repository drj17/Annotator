import React from 'react';

const Votes = (props) => {
  return (
    <div className="voting">
      <button><i className="fa fa-thumbs-down" aria-hidden="true"></i></button>
      <span>+10</span>
      <button><i className="fa fa-thumbs-up upvote-active" aria-hidden="true"></i></button>
    </div>
  );
};

export default Votes;
