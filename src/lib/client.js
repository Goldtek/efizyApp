// api.js
import axios from 'axios';
import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import GetLocation from 'react-native-get-location';
import LocationServicesDialogBox from 'react-native-android-location-services-dialog-box';
import * as RNLocalize from 'react-native-localize';
import { getLoggedInUserFromReducer } from './util';


const device = Platform.OS === 'android' ? 'ANDROID' : 'IOS';
const baseURL = 'https://efizypayapi.azurewebsites.net/v1'; 
let coordinates = '';
const userData = getLoggedInUserFromReducer();
const config = {
  baseURL: baseURL,
  timeout: 60000,
  headers: {
    'Device-Type': device,
    'Device-Id': DeviceInfo.getDeviceId(),
    'Device-Serial': DeviceInfo.getUniqueId(),
    'Build-Number': DeviceInfo.getBuildNumber(),
    'Device-Description': DeviceInfo.getSystemVersion(),
    'Device-Country': RNLocalize.getCountry(),
  //  Authorization: `Bearer ${userData.token}`,
    // 'App-Version': getCodePushVersion(),
  },
  withCredentials: true,
};

const api = axios.create(config);

GetLocation.getCurrentPosition({
  enableHighAccuracy: true,
  timeout: 15000,
})
  .then(location => {
    coordinates = {latitude: location.latitude, longitude: location.longitude};
  })
  .catch(error => {
    const {code, message} = error;
    if (code === 'CANCELLED') {
      if (Platform.OS === 'android') {
        return LocationServicesDialogBox.checkLocationServicesIsEnabled({
          message:
            "<font color='#000000'>Please turn on your location to be able to use Xend Finance</font>",
          ok: 'YES',
          cancel: 'NO',
          enableHighAccuracy: true,
          showDialog: true,
          openLocationServices: true,
          providerListener: true,
        })
          .then(function (success) {
            // debugConsole.log(success);
          })
          .catch(error => {
            debugConsole.log(error.message);
          });
      }
    }

    if (code === 'UNAVAILABLE') {
      if (Platform.OS === 'android') {
        return LocationServicesDialogBox.checkLocationServicesIsEnabled({
          message:
            "<font color='#000000'>Please turn on your location to be able to use Xend Finance</font>",
          ok: 'OK',
          enableHighAccuracy: true,
          showDialog: true,
          openLocationServices: true,
          providerListener: true,
        })
          .then(function (success) {
            GetLocation.getCurrentPosition({
              enableHighAccuracy: true,
              timeout: 15000,
            })
              .then(location => {
                coordinates = {
                  latitude: location.latitude,
                  longitude: location.longitude,
                };
              })
              .catch(error => {
                debugConsole.log('error', error);
              });
          })
          .catch(error => {
            debugConsole.log(error.message);
          });
      } else if (Platform.OS === 'ios') {
        // Linking.openURL('app-settings:');
        coordinates = {
          latitude: 0.0,
          longitude: 0.0,
        };
      }
    }

    if (code === 'UNAUTHORIZED') {
      if (Platform.OS === 'android') {
        return LocationServicesDialogBox.checkLocationServicesIsEnabled({
          message:
            "<font color='#000000'>Please turn on your location to be able to use Xend Finance</font>",
          ok: 'OK',
          enableHighAccuracy: true,
          showDialog: true,
          openLocationServices: true,
          providerListener: true,
        })
          .then(function (success) {
            GetLocation.getCurrentPosition({
              enableHighAccuracy: true,
              timeout: 15000,
            })
              .then(location => {
                coordinates = {
                  latitude: location.latitude,
                  longitude: location.longitude,
                };
              })
              .catch(error => {
                debugConsole.log('error', error);
              });
          })
          .catch(error => {
            debugConsole.log(error.message);
          });
      } else if (Platform.OS === 'ios') {
        coordinates = {
          latitude: 0.0,
          longitude: 0.0,
        };
      }
    }
  });


api.interceptors.request.use(function (config) {
    // const userData = getLoggedInUserFromReducer(); // get from redux the accesstoken and pass to the config header
    // config.headers.Authentication = `Bearer ${userData.accessToken}`;
    config.headers.latitude = coordinates?.latitude;
    config.headers.longitude = coordinates?.longitude;
  return config;

}, function (error) {
  return Promise.reject(error);
});

// Response Interceptor: Handle responses or errors after a response is received
api.interceptors.response.use(
  (response) => {
    // Handle successful responses
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      // Access token expired, try to refresh it
      try {
        const refreshToken = await AsyncStorage.getItem(REFRESH_TOKEN_KEY);

        if (!refreshToken) {
          // No refresh token available, handle error (e.g., logout user)
          console.error('No refresh token found!');
          return Promise.reject(error);
        }

        const refreshResponse = await axios.post('/users/refresh-token', { refreshToken }); // Replace with your refresh API endpoint
        console.log('refreshResponse---', refreshResponse)
        const newAccessToken = refreshResponse.data.token; // Replace with actual data structure
        api.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;

        originalRequest._retry = true;
        return api(originalRequest);
      } catch (error) {
        console.error('Refresh token failed:', error);
        // Handle refresh token failure (e.g., logout user)
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default api;



// async function getCodePushVersion() {
//   const codepush = await getFromAsyncKeyOnly(StoreConstants.CODE_PUSH_VERSION);
//   return codepush;
// }
