import React from 'react';
import {useState} from 'react';
import { Platform } from 'react-native';
import Toast from 'react-native-toast-message';
import CryptoJS from 'crypto-js';
import ReactNativeBiometrics from 'react-native-biometrics';
import Rate, { AndroidMarket } from 'react-native-rate';
import ZohoDeskSDK from 'react-native-zohodesk-portal-sdk';

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


export const headerConfig = (
  accessSecret,
  accessToken,
) => {
  console.log('hmac returns', accessSecret, accessToken)
  try {
    const timestamp = new Date().getTime();
    let apiSignatureString = `timestamp=${timestamp}&token=${accessToken}&secret=${accessSecret}`;

    // if (payLoad) {
    //   const payloadParams = toQueryString(payLoad) + '&';
    //   apiSignatureString = payloadParams + apiSignatureString;
    // }

    const signatureHash = CryptoJS.HmacSHA256(
      apiSignatureString,
      accessSecret,
    ).toString(CryptoJS.enc.Hex);
   
    return {
      headers: {
        Signature: signatureHash,
        Timestamp: timestamp,
      },
    };
  } catch (error) {
    console.log('error with hmac', error);
  }
};

export const getUserHeaderConfig = () => {
  const accessSecret = store.getState().user.secret;
  const accessToken = store.getState().user.token;
   return headerConfig(accessSecret, accessToken);
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