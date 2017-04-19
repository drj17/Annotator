export const signup = (user) => {
  let aj =  $.ajax({
    method: 'post',
    url: 'api/users/',
    data: user
  });
  return aj;
};

export const login = (user) => {
  return $.ajax({
    method: 'post',
    url: 'api/session/',
    data: user
  });
};

export const logout = () => {
  return $.ajax({
    method: 'delete',
    url: 'api/session/',
  });
};
