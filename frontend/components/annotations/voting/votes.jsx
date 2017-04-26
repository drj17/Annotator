import React from 'react';

const Votes = (props) => {

  let upvoteButton = "";
  let downvoteButton = "";
  let scoreColor;

  if(props.currentAnnotation.score === 0){
    scoreColor = "black";
  } else if (props.currentAnnotation.score < 0){
    scoreColor = "red";
  } else {
    scoreColor = "#22C13E";
  }

  let symbol = props.currentAnnotation.score > 0 ? "+" : "";

  if(props.currentUser){
    downvoteButton = <button onClick={() => handleVote(downvote)} ><i className="fa fa-thumbs-down downvote" aria-hidden="true"></i></button>;
    upvoteButton = <button onClick={() => handleVote(upvote)}><i className="fa fa-thumbs-up upvote" aria-hidden="true"></i></button>;

      let upvote = {
        user_id: props.currentUser.id,
        annotation_id: props.currentAnnotation.id,
        value: 1
      };
      let downvote = {
        user_id: props.currentUser.id,
        annotation_id: props.currentAnnotation.id,
        value: -1
      };

      const handleVote = (vote) => {
        props.updateAnnotation(props.currentAnnotation, vote);
      };
  }

  return (
    <div className="voting">
      {downvoteButton}
      <span style={{color: scoreColor}}>IQ: {symbol}{props.currentAnnotation.score}</span>
      {upvoteButton}
    </div>
  );
};

export default Votes;
