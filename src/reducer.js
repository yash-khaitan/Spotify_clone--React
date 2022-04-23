export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discover_weekly: null,
  // Remove after finished building
  token:
    "BQBMByf4BKJSLPtbmNHx8IJqlerr_xu2GDXFfF9hX4TfKOac2_AArEUO5CzH_TEt1zp4TQK0xKQ9rLRoKr5ZVr6c3s26KGsrCbvprHd4O7kevLbss8AsHbVm-k1-MdKiNgP-CfdwBXEGYxPxHZF5YFd3FE4X8pP4CZQkRMX9n151bT1Z",
};

const reducer = (state, action) => {
  // console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;

// console.log(initialState);
