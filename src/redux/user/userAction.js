import axios from "axios";
import {
  FETCH_USER,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
} from "./userTypes";

export const userFetch = () => {
  return {
    type: FETCH_USER,
  };
};

const userFetchSuccess = (payload) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload,
  };
};

const userFetchFailure = (payload) => {
  return {
    type: FETCH_USER_FAILURE,
    payload,
  };
};

export const fetchUser = () => {
  return (dispatch) => {
    dispatch(userFetch());
    axios
      .get("https://hub.dummyapis.com/employee")
      .then((res) => {
        dispatch(userFetchSuccess(res.data));
      })
      .catch((err) => dispatch(userFetchFailure(err.message)));
  };
};
