import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./userTypes";

const initialState = {
  loading: false,
  users: [],
  err: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        err: "",
      };

    case FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        err: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
