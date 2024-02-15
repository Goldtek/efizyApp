import { STORE_USER_ERROR_MSG, STORE_SECRETS, FETCH_USER, LOG_OUT } from "./action-types";
import { fetchUser } from "../mutations/user";
import { store } from "../../store";


export const handleLoginSuccess = (data, variables, navigation) => {
    store.dispatch(storeSecrets(data))
    fetchUser(data, navigation); 
};


export const DeviceLoginSuccess = (data, variables, navigation) => {
   store.dispatch(storeSecrets(data));
};


export const storeUserAuthErrorMessages = (message)  => {
    return {
      type: STORE_USER_ERROR_MSG,
      payload: message,
    };
}

export const storeSecrets = (data) => {
  return {
    type: STORE_SECRETS,
    payload: data,
  };
}

export const storeUserProfile = (user) => {
  return {
    type: FETCH_USER,
    payload: user,
  };
}

export const storeUserBalance = (balance) => {
  return {
    type: FETCH_USER_BALANCE,
    payload: balance,
  };
}


export const logOut = () => {
  return{
    type: LOG_OUT,
  };
}