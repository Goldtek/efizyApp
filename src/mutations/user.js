import api from '../lib/client'
import {toast} from '../lib/util';
import { storeUserAuthErrorMessages, storeUserProfile, storeUserBalance, storeCredentails, storeAuth } from '../actions/user';
import { store } from '../../store';
import { getAirtimeProvider, getDiscos, getInternetProviders } from './bills';

import { headerConfig, getUserHeaderConfig} from '../lib/util';

export const registerUser = async (userData) => {
  try {
    const response = await api.post('/users', userData); 
    return response.data;
  } catch (error) {
    store.dispatch(storeUserAuthErrorMessages(error?.response?.data?.message));
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await api.post('/users/token', credentials);
    getDiscos(response.data);
    getAirtimeProvider(response.data);
    getInternetProviders(response.data);
    store.dispatch(storeCredentails(credentials));
    return response.data;
  } catch (error) {
    store.dispatch(storeUserAuthErrorMessages(error?.response?.data?.message));
  }
};


export const fetchUser = async (data) => {
  try {
    const header = headerConfig({accessSecret: data.secret, accessToken: data.token});
    const response = await api.get('/users/profile', header); 
    const userId = response.data.id;
    getUserBalance(data, userId);
    getBeneficiaries(userId);
    store.dispatch(storeUserProfile(response.data));
  } catch (error) {
    store.dispatch(storeUserAuthErrorMessages(error?.response?.data?.message));
  }
};

export const refreshTokenService = () => {
  const accessSecret = store.getState().user.secret;
  const accessToken = store.getState().user.token;
  const refreshToken = store.getState().user.refreshToken;
  const header = getUserHeaderConfig();
  const data = {
    token: accessToken,
    secret: accessSecret,
    refreshToken,
  };

  return api.post('/users/refresh-token', data, header);
};


export const getUserBalance = async (data, id) => {
  try {
    const header = headerConfig({accessToken: data.token, accessSecret: data.secret});
    const response = await api.get(`/users/${id}/balances`, header); 
    store.dispatch(storeUserBalance(response.data));
  } catch (error) {
    store.dispatch(storeUserAuthErrorMessages(error?.response?.data?.message));
  }
};

export const sendPasswordReqOTP = async (email) => {
  try {
    const response = await api.post('/users/password-reset', { email });
    return response.data;
  } catch (error) {
    toast(error?.response?.data?.message, '', 'error');
  }
};

export const verifyOtpRequest = async (data) => {
  try {
  const response = await api.post('/users/verify-password-reset', { ...data });
  return response.data;
  } catch (error) {
    toast(error?.response?.data?.message, '', 'error');
  }
};

export const createBiometricKeys = data => dispatch => {
  // dispatch({ type: CREATE_BIOMETRIC_KEYS });

  api.post('/biometrics', 'POST', data)
    .then(response => {
      if (response.status === 'success')
        // dispatch({
        //   type: CREATE_BIOMETRIC_KEYS_SUCCESS,
        //   payload: 'Biometric keys created successfully',
        // });
        console.log('response', response)
    })
    .catch(error => {
      dispatch({ type: CREATE_BIOMETRIC_KEYS_ERROR, payload: error });
    });
};

export function BiometricLogin(user) {
  return async (dispatch) => {
    const data = {
      login_method: user.loginMethod,
      auth_input: user.username,
      password: user.password,
    };

    api.post('/login', 'POST', data, header)
      .then(res => {
        const userData = {
          token: res.data.token,
          email: res.data.user.email,
          uuid: res.data.user.uuid,
          expiresAt: new Date(res.data.expires_at * 1000),
        };
       

      })
      .catch(error => {
        toast(errorParser(error), '', 'error');
      });
  };
}


export const getBeneficiaries = async (id) => {
  try {
    const header = getUserHeaderConfig();
    const response = await api.get(`/users/${id}/beneficiaries`, header); 
    console.log('beneficiary', response)
    // getUserBalance(data, userId);
    // store.dispatch(storeUserProfile(response.data));
  } catch (error) {
   // store.dispatch(storeUserAuthErrorMessages(error?.response?.data?.message));
   return error;
  }
};

export const setPin = async (data) => {
  try {
    const header = getUserHeaderConfig();
    const response = await api.post('/users/active-pin', data, header);
    return response.data;
  } catch (error) {
    toast(error?.response?.data?.message, '', 'error');
    return error;
  }
};


export const start2FA = async (data) => {
  try {
    const header = getUserHeaderConfig();
    const response = await api.post('/users/setup-two-factor-auth', data, header);
    store.dispatch(storeAuth(response.data));
    return response.data;
  } catch (error) {
    toast(error?.response?.data?.message, '', 'error');
    return error;
  }
};


