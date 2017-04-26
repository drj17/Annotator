export const fetchSearchResults = (query) => {
  return $.ajax({
    method: 'get',
    url: 'api/songs',
    data: {query: query}
  });
};
