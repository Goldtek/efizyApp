import api from '../lib/client'
import {toast} from '../lib/util';
import { storeDiscos, storeAirtimeProviders, storeISPProviders, storePlans } from '../actions/bills-action';
import { store } from '../../store';
import { headerConfig, getUserHeaderConfig} from '../lib/util';

export const getAirtimeProvider = async (data) => {
  try {
    accessToken = data.token;
    accessSecret =  data.secret;
    const header = headerConfig({accessToken, accessSecret});
    const response = await api.get('/bills/airtime/service-providers', header); 
    store.dispatch(storeAirtimeProviders(response.data));
  } catch (error) {
    toast(error?.response?.data?.message);
  }
};


export const getDiscos = async (data) => {
  try {
    const header = headerConfig({accessToken: data.token, accessSecret: data.secret});
    const response = await api.get('/bills/electricity/service-providers', header); 
    store.dispatch(storeDiscos(response.data));
  } catch (error) {
    toast(error?.response?.data?.message);
  }
};

export const getInternetProviders = async (data) => {
  try {
    const header = headerConfig({accessToken: data.token, accessSecret: data.secret});
    const response = await api.get('/bills/internet/service-providers', header);
    store.dispatch(storeISPProviders(response.data));
  } catch (error) {
    toast(error?.response?.data?.message, '', 'error');
  }
};


export const getPlans = async (networkId) => {
  try {
    const data = { dataProviderId: networkId };
    const header = getUserHeaderConfig(data);
    const response = await api.post('/bills/internet/data-plans', data, header);
     store.dispatch(storePlans(response.data));
  } catch (error) {
    toast(error?.response?.data?.message, '', 'error');
  }
};


export const buyData = async (data) => {
  try {
    const header = getUserHeaderConfig(data);
    const response = await api.post('/bills/internet/buy-data', data, header);
  } catch (error) {
    toast(error?.response?.data?.message, '', 'error');
  }
};

export const buyAirtime = async (data) => {
  try {
    const header = getUserHeaderConfig(data);
    const response = await api.post('/bills/airtime/buy-airtime', data, header);
  } catch (error) {
    toast(error?.response?.data?.message, '', 'error');
  }
};

export const verifyMeter = async (data) => {
  try {
    const header = getUserHeaderConfig(data);
    const response = await api.post('/bills/electricity/verify-meter-number', data, header);
  } catch (error) {
    toast(error?.response?.data?.message, '', 'error');
  }
};

export const buyElectricity = async (data) => {
  try {
    const header = getUserHeaderConfig(data);
    const response = await api.post('/bills/electricity/buy-electricity', data, header);
  } catch (error) {
    toast(error?.response?.data?.message, '', 'error');
  }
};



