const initialState = {};
export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "search_modal_state":
      state.search.searchOpen = action.payload?.state;
      return Object.assign({}, state);
    default:
      return state;
  }
};
