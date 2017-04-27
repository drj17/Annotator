import React from 'react';

const CommentIndexItem = ({comment}) => (
  <section className="comment-item">
    <h2>{comment.username}</h2>
    <h3>{comment.body}</h3>
  </section>
);

export default CommentIndexItem;
