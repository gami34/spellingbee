import axios from "axios";

export const registration = (fromdata) => {
  return async (dispatch, getState) => {
    const { data } = await axios.post("http://localhost:8080/registration", fromdata);
    console.log("async dispatch", data);
  };
};
