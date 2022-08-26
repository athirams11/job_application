export const getUserId = (state) => {
  try {
    return state?.user;
  } catch (e) {
    return "";
  }
};
