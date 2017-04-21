export const fetchSongs = () => {
  return $.ajax({
    method: 'get',
    url: 'api/songs'
  });
};

export const fetchSong = (id) => {
  return $.ajax({
    method: 'get',
    url: `api/songs/${id}`
  });
};

export const createSong = (song) => {
  return $.ajax({
    method: 'post',
    url: 'api/songs',
    contentType: false,
    processData: false,
    data: song
  });
};

export const deleteSong = (id) => {
  return $.ajax({
    method: 'delete',
    url: `api/songs/${id}`
  });
};
export const updateSong = (song, id) => {
  return $.ajax({
    method: 'patch',
    url: `api/songs/${id}`,
    processData: false,
    contentType: false,
    data: song
  });
};
