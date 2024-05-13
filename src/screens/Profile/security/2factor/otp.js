import React from 'react';
import { TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native';
import {View, Colors, Text} from 'react-native-ui-lib';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { useMutation } from 'react-query';

import { sendPasswordReqOTP } from '../../../../mutations/user';
import {RegularText, useMergedState} from '../../../../common';
import {BackArrow, Paste} from '../../../../../assets/icons';
import styles from './styles';

const AuthVerification = ({navigation, route}) => {

  const [state, setState] = useMergedState({
    otpError: '',
    otp: '',
    processing: false
  });

  const handResendSuccess = () => {
    navigation.navigate('success', {
      message: 'Congratulations, you have successfully setup your two step authentication',
      buttonLabel: 'Go to home',
      type: 'login',
    });
  };

  
  const resendMail = useMutation(sendPasswordReqOTP, {
    onSuccess: handResendSuccess,
  });


 const handleOtp = (otp) => {
  if(otp.length === 6) {
    setState({processing: true});
    navigation.navigate('', {token: otp})
  }
 };

 

 return (
    <SafeAreaView flex  backgroundColor={Colors.white}>
    <View flex paddingT-30 paddingH-24 backgroundColor={Colors.white}>
        <View row marginB-40>
        <View marginT-8 marginL-1 marginR-10>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
            >
            <BackArrow />
          </TouchableOpacity>
        </View>
        <Text h1  blue700 bold>
          Two Step Authentication
        </Text>
      </View>
      <Text h2 bold marginB-24 testID="forgot-pass">
        Enter Google Auth Code
      </Text>
      <Text body2 marginB-34 testID="forgot-pass">
        Kindly enter the code generated from your google authenticator app
      </Text>
      <OTPInputView
              style={[styles.otpView]}
              pinCount={6}
              code={state.otp}
              editable
              onCodeChanged={code => {
                setState({otp: code});
              }}
              autoFocusOnLoad
              codeInputFieldStyle={
                state.otpError ? styles.errorCellView : styles.cellView
              }
              codeInputHighlightStyle={styles.underlineHighlighted}
              onCodeFilled={code => handleOtp(code)}
              keyboardType={'phone-pad'}
            />
            {state.otpError ? (
              <RegularText title={state.otpError} style={styles.otpErrorText} />
            ) : null}

            <View row spread marginT-40>
               {/* there should be a check for the loader */}
               {state.processing === true && (
                  <ActivityIndicator size={'small'} color={'#FF6600'} />
                )}
            </View>
    
    </View>
    </SafeAreaView>
 );
};

export default AuthVerification;