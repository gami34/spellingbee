import axios from "axios";

export const registration = (fromData) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "REGISTRATION",
      payload: {
        data: fromData,
      },
    });
  };
};
