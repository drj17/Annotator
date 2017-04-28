import React from 'react';

const CommentIndexItem = ({comment, currentUser, deleteComment}) => {
  let editButton = "";
  let deleteButton = "";

  if(currentUser && currentUser.id === comment.author_id){
    deleteButton = <button onClick={() => deleteComment(comment.id)}>Delete</button>;
  }

  return (
    <section className="comment-item">
      <h2>{comment.username}</h2>
      <h3>{comment.body}</h3>
      <div className="comment-controls">
        {editButton}
        {deleteButton}
      </div>
    </section>
  );
};

export default CommentIndexItem;
