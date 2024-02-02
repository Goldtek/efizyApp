import React, { useState, useRef, useEffect } from 'react';
import {
 StyleSheet,
 Dimensions,
 SafeAreaView, 
 StatusBar,
 Platform
} from 'react-native';
import * as Keychain from 'react-native-keychain';
import ReactNativePinView from "react-native-pin-view";
import LottieView from 'lottie-react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { Colors, View, Text } from 'react-native-ui-lib';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';

import { FaceId, LockBackButton, ThumbPrint } from '../../../assets/icons';

const LockScreen = ({ navigation }) => {
    const pinView = useRef(null)
    const [showRemoveButton, setShowRemoveButton] = useState(true)
    const [enteredPin, setEnteredPin] = useState("")
    const [showCompletedButton, setShowCompletedButton] = useState(true);
    const [biometryType, setBiometryType] = useState(null);

  useEffect(() => {
    checkBiometrics();
  }, []);

   const checkBiometrics = async () => {
      const rnBiometrics = new ReactNativeBiometrics()

      const { biometryType } = await rnBiometrics.isSensorAvailable()
      console.log('biometryType', biometryType);
      setBiometryType(biometryType)
      if (biometryType === BiometryTypes.TouchID) {
        //do something fingerprint specific
      } else if (biometryType === BiometryTypes.FaceID) {
        //do something face id specific
      } else if (biometryType === BiometryTypes.Biometrics) {
         //do something face id specific
       }  else {
         console.log('Biometrics not supported')
       }
   };


   const biometricsData = () => {
      if (
        biometrics.biometricsType() === 'Biometrics' ||
        biometrics.biometricsType() === 'TouchID'
      ) {
        return {
          detail:
            'Touch ID will be used to login to your account and authenticate transactions.',
          title: biometric.isTouchIDSetup
            ? 'Turn off Touch ID'
            : 'Turn on Touch ID',
          icon: <TouchSvg />,
          onChange: onChangeText,
          value: biometric.isTouchIDSetup,
          isFaceID: false,
        };
      }
      if (biometrics.biometricsType() === 'FaceID') {
        return {
          detail:
            'Face ID will be used to login to your account and authenticate transactions.',
          title: biometric.isFaceIDSetup ? 'Turn off Face ID' : 'Turn on Face ID',
          icon: <FaceSvg />,
          onChange: onChangeText,
          value: biometric.isFaceIDSetup,
          isFaceID: true,
        };
      }
  
      // Device doesn't support Biometrics
      return null;
   };


   const disableBiometrics = () => {
      const data = {
        password,
      };
      dispatch(handleRemoveBiometry(data));
      openOverlayBottomSheet.current.close();
      setPassword('');
   };

 const updatePin = (pinValue) => {
  if(pinValue.length === 6) {
   alert(pinValue)
  } else {
   setEnteredPin(pinValue)
  }
 }


 return (
   <>
   <StatusBar barStyle="light-content" />
    <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: '#172B4D' }}>
        <Text h2 bold white marginT-70 marginB-24 testID="forgot-pass">
            ENTER PASSCODE
        </Text>
        <Text body2 white marginB-34 testID="forgot-pass">
            Please enter your passcode
        </Text>
        <View>
        <LottieView source={require('../../../assets/animation/unlock.json')} style={{height: 150, width: 250}} autoPlay loop />
        </View>
        <View marginT-100 bottom>
            <ReactNativePinView
                inputSize={32}
                ref={pinView}
                pinLength={6}
                buttonSize={60}
                onValueChange={value => updatePin(value)}
                buttonAreaStyle={{
                marginTop: 30,
                backgroundColor: '#fff',
                paddingVertical: 40,
                paddingHorizontal: 20,
                }}
                inputAreaStyle={{
                marginBottom: 50,
               
                }}
                inputViewEmptyStyle={{
                backgroundColor: "transparent",
                borderWidth: 1,
                borderColor: "#FFF",
                }}
                inputViewFilledStyle={{
                backgroundColor: "#fff",
                }}
              
                buttonTextStyle={{
                color: "#000",
                }}
                onButtonPress={key => {

                if (key === "custom_left") {
                    pinView.current.clear()
                }
                if (key === "custom_right") {

                  const rnBiometrics = new ReactNativeBiometrics()
                  rnBiometrics.simplePrompt({promptMessage: 'Confirm fingerprint'})
                  .then((resultObject) => {
                    const { success } = resultObject
                
                    if (success) {
                      console.log('successful biometrics provided')
                    } else {
                      console.log('user cancelled biometric prompt')
                    }
                  })
                  .catch((error) => {
                    console.log('biometrics failed',error)
                  })
                }
                if (key === "three") {
                 //   alert("You just click to 3")
                }
                }}
                customLeftButton={showRemoveButton ? <LockBackButton />  : undefined}
                customRightButton={showCompletedButton ? Platform.OS === 'android' ? <ThumbPrint /> : <FaceId /> : undefined}
            />
        </View>
    </SafeAreaView>
   </>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
 },
 pinContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
 },
 pinDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.primaryDark,
    margin: 2,
 },
 flatList: {
    marginBottom: 20,
 },
 button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width / 3 - 10,
    height: Dimensions.get('window').width / 3 - 10,
    borderRadius: 100,
    backgroundColor: Colors.white,
    margin: 5,
 },
 buttonText: {
    fontSize: 24,
 },
 deleteButton: {
    width: Dimensions.get('window').width / 2 - 30,
    height: 40,
    borderRadius: 100,
    backgroundColor: Colors.red30,
    justifyContent: 'center',
    alignItems: 'center',
 },
 deleteButtonText: {
    fontSize: 18,
    color: Colors.white,
 },
 unlockButton: {
    width: Dimensions.get('window').width / 2 - 30,
    height: 40,
    borderRadius: 100,
    backgroundColor: Colors.primaryDark,
    justifyContent: 'center',
    alignItems: 'center',
 },
 unlockButtonText: {
    fontSize: 18,
    color: Colors.white,
 },
});

export default LockScreen;