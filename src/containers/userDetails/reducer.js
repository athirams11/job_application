const defaultState = {
  user: {},
};

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD_USER":
      state.user = action.payload;
      return { ...state };
    case "UPDATE_USER":
      state.user = action.payload;
      return { ...state };
    case "CLEAR_USER":
      state.user = {};
      return { ...state };
    default:
      return state;
  }
}
