import { STORE_USER_ERROR_MSG, STORE_SECRETS, FETCH_USER, LOG_OUT } from "./action-types";
import { fetchUser } from "../mutations/user";
import { store } from "../../store";

export const storeSecrets = (data) => dispatch => {
  dispatch({
    type: STORE_SECRETS,
    payload: data,
  });
}

export const storeUserProfile = (user) => dispatch => {
  dispatch({
    type: FETCH_USER,
    payload: user,
  });
}

export const storeUserBalance = (balance) => dispatch => {
  dispatch({
    type: FETCH_USER_BALANCE,
    payload: balance,
  });
}


export const logOut = () => dispatch => {
  dispatch({
    type: LOG_OUT,
  });
}