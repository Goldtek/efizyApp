import api from '../lib/client'
import {toast} from '../lib/util';
import { storeUserAuthErrorMessages, storeUserProfile, storeUserBalance } from '../actions/bills-action';
import { store } from '../../store';
import { headerConfig, getUserHeaderConfig} from '../lib/util';

export const getAirtimeProvider = async (data) => {
  try {
    accessToken = data.token;
    accessSecret =  data.secret;
    const header = headerConfig({accessToken, accessSecret});
    const response = await api.get('/bills/airtime/service-providers', header); 
   // const userId = response.data.id;
   // getUserBalance(data, userId);
  //  store.dispatch(storeUserProfile(response.data));
  } catch (error) {
    store.dispatch(storeUserAuthErrorMessages(error?.response?.data?.message));
  }
};


export const getDiscos = async (data) => {
  try {
    const header = headerConfig({accessToken: data.token, accessSecret: data.secret});
    const response = await api.get('/bills/electricity/service-providers', header); 
  //  store.dispatch(storeUserBalance(response.data));
  } catch (error) {
    store.dispatch(storeUserAuthErrorMessages(error?.response?.data?.message));
  }
};

export const getInternetProviders = async (data) => {
  try {
    const header = headerConfig({accessToken: data.token, accessSecret: data.secret});
    const response = await api.get('/bills/internet/service-providers', header);
   // return response.data;
  } catch (error) {
    toast(error?.response?.data?.message, '', 'error');
  }
};

export const verifyOtpRequest = async (data) => {
  try {
  const response = await api.post('/users/verify-password-reset', { data });
  return response.data;
  } catch (error) {
    toast(error?.response?.data?.message, '', 'error');
  }
};


