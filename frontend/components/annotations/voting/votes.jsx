import React from 'react';

const Votes = (props) => {

  let upvoteButton = "";
  let downvoteButton = "";
  let scoreColor;

  let downvoteStyle = {};
  let upvoteStyle = {};
  if(props.currentAnnotation.did_vote){
    if(props.currentAnnotation.direction === 1){
      upvoteStyle = {color: '#22C13E'};
    } else if (props.currentAnnotation.direction === -1){
      downvoteStyle = {color: 'red'};
    }
  }
  
  if(props.currentAnnotation.score === 0){
    scoreColor = "black";
  } else if (props.currentAnnotation.score < 0){
    scoreColor = "red";
  } else {
    scoreColor = "#22C13E";
  }

  let symbol = props.currentAnnotation.score > 0 ? "+" : "";

  const setStyle = (direction) => {
    if(direction === "upvote"){
      upvoteStyle = {color: '#22C13E'};
      downvoteStyle = {};
    } else {
      downvoteStyle = {color: 'red'};
      upvoteStyle = {};
    }
  };

  if(props.currentUser){
    downvoteButton = <button onClick={() => {handleVote(downvote); setStyle('downvote');}} >
      <i className="fa fa-thumbs-down downvote" style={downvoteStyle} aria-hidden="true"></i>
      </button>;
    upvoteButton = <button onClick={() => {handleVote(upvote); setStyle('upvote');}}>
      <i className="fa fa-thumbs-up upvote" style={upvoteStyle} aria-hidden="true"></i>
      </button>;

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
      Upvote: <span style={{color: scoreColor}}>{symbol}{props.currentAnnotation.score}</span>
      {upvoteButton}
    </div>
  );
};

export default Votes;
