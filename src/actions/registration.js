import axios from "axios";

export const registration = (fromData) => {
  return async (dispatch, getState) => {
    // const { data } = await axios.post("http://localhost:8080/registration", fromData);
    // console.log("async dispatch", data);
    dispatch({
      type: "REGISTRATION",
      payload: {
        data: fromData,
      },
    });
  };
};
