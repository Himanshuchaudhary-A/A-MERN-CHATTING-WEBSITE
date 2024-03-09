import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./login-types";
import { Dispatch } from "@reduxjs/toolkit";

const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});



export const getLoginDetails = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(loginRequest());

      let res = await axios.post("http://localhost:3001/api/users/login", {
        email,
        password,
      });

      if (res.status === 200) {
        dispatch(loginSuccess());
        return res.data;
      }
    } catch (e) {
      dispatch(loginFailure(e));
    }

    // Return null or a dummy action since the actual action is dispatched inside the try/catch block
    return null;
  };
};
