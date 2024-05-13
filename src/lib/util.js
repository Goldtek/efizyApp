import React from 'react';
import {useState} from 'react';
import { Platform } from 'react-native';
import Toast from 'react-native-toast-message';
import CryptoJS from 'crypto-js';
import ReactNativeBiometrics from 'react-native-biometrics';
import Rate, { AndroidMarket } from 'react-native-rate';
import ZohoDeskSDK from 'react-native-zohodesk-portal-sdk';
import queryString from 'query-string';


import { store } from '../../store';
import { BiometricLogin, createBiometricKeys } from '../mutations/user';

const rnBiometrics = new ReactNativeBiometrics();

export const useMergedState = (initialState) => {
    const [state, setState] = useState(initialState);
    const setMergedState = newState =>
      setState(prevState => Object.assign({}, prevState, newState));
    return [state, setMergedState];
  }

export const toast = (title, text, type, onPress = () => {}) => {
  return Toast.show({
    type: type,
    position: 'center',
    text1: title,
    text2: text,
    visibilityTime: 10000,
    autoHide: true,
    topOffset: Platform.OS === 'android' ? 30 : 50,
    bottomOffset: 40,
    onShow: () => {},
    onHide: () => {},
    onPress: () => {
      onPress();
    },
  });
};

const toQueryString = (obj) => {
  Object.keys(obj).map(e => {
    if (
      obj[e] === null ||
      obj[e] === undefined ||
      String(obj[e]).trim() === ''
    ) {
      delete obj[e];
    }
  });
  return ''.concat(
    Object.keys(obj)
      .map(e => {
        return `${fixedEncodeURIComponent(e)}=${fixedEncodeURIComponent(obj[e])
          .split('%20')
          .join('+')}`;
      })
      .join('&'),
  );
};

function fixedEncodeURIComponent(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}



export const headerConfig = (options) => {
  try {
    const timestamp = new Date().getTime();
    let apiSignatureString = `timestamp=${timestamp}&token=${options.accessToken}&secret=${options.accessSecret}`;


    const signatureHash = CryptoJS.HmacSHA256(
      apiSignatureString,
      options.accessSecret,
    ).toString(CryptoJS.enc.Hex);
   
    return {
      headers: {
        Signature: signatureHash,
        Timestamp: timestamp,
        Authorization: `Bearer ${options.accessToken}`,
      },
    };
  } catch (error) {
    console.log('error with hmac', error.message);
  }
};

export const getUserHeaderConfig = (payLoad = null) => {
  const accessSecret = store.getState().user.secret;
  const accessToken = store.getState().user.token;
  try {
    const timestamp = new Date().getTime();
    let apiSignatureString = `timestamp=${timestamp}&token=${accessToken}&secret=${accessSecret}`;

    if (payLoad) {
      const payloadParams = toQueryString(payLoad) + '&';
    // let payloadParams = '';
    //   Object.keys(payLoad).forEach((item) => {
    //     payloadParams = payloadParams + item + '=' + payLoad[item] + '&';
    //   });
    
      apiSignatureString = payloadParams + apiSignatureString;
    }
    const signatureHash = CryptoJS.HmacSHA512(
      apiSignatureString,
      accessSecret,
    ).toString(CryptoJS.enc.Hex);
   
    return {
      headers: {
        Signature: signatureHash,
        Timestamp: timestamp,
        Authorization: `Bearer ${accessToken}`,
      },
    };
  } catch (error) {
    console.log('error with hmac', error.message);
  }
};


export const getLoggedInUserFromReducer = () => {
  let userData;
  if (store) {
    userData = store.getState().user;
  }

  return userData;
};

export const createSignature = (user) => { 
  rnBiometrics.createSignature({
    promptMessage: 'Log in',
    payload: user?.uuid,
  })
    .then(resultObject => {
      const { success, signature } = resultObject;
      if (success) {
        const data = {
          username: user.email,
          password: signature,
          loginMethod: 'biometric',
        };
        // verifySignatureWithServer(signature, payload)
        BiometricLogin(data);
      }
    })
    .catch(error => {
      toast(error.message, '', 'error');
    });
};

export const setupDevice = (isFaceID) => {
  //isFaceID ture or false based on the device
  rnBiometrics.createKeys(`$'Enable'}${isFaceID ? 'FaceID' : 'TouchID'}`)
    .then(resultObject => {
      const { publicKey } = resultObject;
      if (publicKey) {
        const data = {
          mobile_key: publicKey,
        };
        createBiometricKeys(data);
      }
    })
    .catch(() => {});
};

export const handleAppRating = () => {
  const options = {
    AppleAppID: '1587050825',
    GooglePackageName:"com.xendmobile",
    preferredAndroidMarket: AndroidMarket.Google,
    preferInApp: false,
    openAppStoreIfInAppFails: true,
    fallbackPlatformURL:"https://www.efizypay.com",
  };
  Rate.rate(options, (success, errorMessage) => {
    if (success) {
      console.log('thank you for ratng us')
    }
    if (errorMessage) {
      console.log(`Example page Rate.rate() error: ${errorMessage}`)
    }
  });
};

export const openSupport = () => {
  // orgid, appid, dc
 // ZohoDeskSDK.initialise("840308079", "840506952", "dc");
  ZohoDeskSDK.openPortal();
}


export const extractSecret = (otpUrl) => {
  const searchParams = queryString.parseUrl(otpUrl).query;
  const secret = searchParams.secret;
  return secret;
}