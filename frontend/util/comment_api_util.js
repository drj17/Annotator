export const fetchSongComments = (songId) => {
  return $.ajax({
    method: 'get',
    url: `api/songs/${songId}/comments`
  });
};

export const fetchAnnotationComments = (annotationId) => {
  return $.ajax({
    method: 'get',
    url: `api/annotations/${annotationId}/comments`
  });
};

export const fetchComment = (id) => {
  return $.ajax({
    method: 'get',
    url:  `api/comments/${id}`
  });
};

export const deleteComment = (id) => {
  return $.ajax({
    method: 'delete',
    url: `api/comments/${id}`
  });
};

export const updateComment = (comment) => {
  return $.ajax({
    method: 'patch',
    url: `api/comments/${comment.id}`,
    data: comment
  });
};

export const createComment = (comment) => {
  return $.ajax({
    method: 'post',
    url: '/api/comments',
    data: comment
  });
};
