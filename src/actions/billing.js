import axios from "axios";

export const billing = (data) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "BILLING",
      payload: {
        data,
      },
    });
  };
};

export const processsRegistraton = (paymentData) => {
  return async (dispatch, getState) => {
    const state = getState();
    const { data } = await axios.post(process.env.REACT_APP_HOST1, { ...state.user.data, ...paymentData, payment_platform: "flutterwave" });
    console.log("async dispatch", data, paymentData, { ...state.user.data, ...paymentData, payment_platform: "flutterwave" });
    dispatch({
      type: "SERVER_REGISTRATION_RESPONSE",
      payload: {
        data: data.success === true ? "failed" : "failed",
      },
    });
  };
};
