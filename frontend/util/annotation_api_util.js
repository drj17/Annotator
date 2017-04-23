export const fetchAnnotations = (songId) => {
  return $.ajax({
    method: 'get',
    url: `api/songs/${songId}/annotations`
  });
};

export const fetchAnnotation = (id) => {
  return $.ajax({
    method: 'get',
    url: `api/annotations/${id}`
  });
};

export const createAnnotation = (annotation) => {
  return $.ajax({
    method: 'post',
    url: 'api/annotations',
    data: { annotation }
  });
};

export const deleteAnnotation = (id) => {
  return $.ajax({
    method: "delete",
    url: `api/annotations/${id}`
  });
};

export const updateAnnotation = (annotation) => {
  return $.ajax({
    method: 'patch',
    url: `api/annotations/${annotation.id}`,
    data: { annotation }
  });
};
