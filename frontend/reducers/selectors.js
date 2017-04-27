export const commentsByObject = (state, objectType) => {
  let object = objectType === "song" ? state.songs.currentTrack : state.annotations.currentAnnotation;
  const selectedComments = state.comments.comments.filter(comment => comment.commentable_id !== object.id);
  return selectedComments;
};
