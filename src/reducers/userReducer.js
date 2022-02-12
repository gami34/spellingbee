const initialState = {
  avatar: "https://i.pinimg.com/736x/06/a4/93/06a4937639edbf6918007ea8f2dda1ad--the-photograph-photography-ideas.jpg",
  accountName: "player001",
  role: "Administrator",
  pricePerStudent: 3000,
  backEndRegistrationStatus: false,
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTRATION":
      return { ...state, data: action.payload.data };
    case "SERVER_REGISTRATION_RESPONSE":
      return { ...state, backEndRegistrationStatus: action.payload.data };
    case "BILLING":
      return { ...state, billing: action.payload.data };
    default:
      return state;
  }
};
