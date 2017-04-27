export const songComments = (state) => {
  return state.songs.currentTrack.comments.map((id) => {
    return state.comments.comments[id];
  });
};
export const annotationComments = (state) => {
  return state.annotations.currentAnnotation.comments.map((id) => {
    return state.comments.comments[id];
  });
};
