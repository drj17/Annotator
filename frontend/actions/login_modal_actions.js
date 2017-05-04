export const OPEN_LOGIN_MODAL = "OPEN_LOGIN_MODAL";
export const OPEN_SIGNUP_MODAL = "OPEN_SIGNUP_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openLoginModal = () => {
  return {
    type: OPEN_LOGIN_MODAL,
  };
};

export const openSignupModal = () => {
  return {
    type: OPEN_SIGNUP_MODAL
  };
};
export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};
