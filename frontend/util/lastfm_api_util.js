export const fetchLastFmSearchResults = (query) => {
  return $.ajax({
    method: 'get',
    url: `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${query}&api_key=97a7299caadc6f01cbf499b94f1853b2&format=json`
  });
};
