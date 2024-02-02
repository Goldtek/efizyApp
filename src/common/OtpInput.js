import React, {useRef, useState, useEffect} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import {Text, View} from 'react-native-ui-lib';
import {ms} from './utils';

export const OtpInput = () => {
  const [otp, setOtp] = useState('');
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(1);
  // const [isLoading, setIsLoading] = useState(false);
  const [resendEnabled, setResendEnabled] = useState(false);
  const [hasError] = useState(false);
  const intervalRef = useRef();
  const otpRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (seconds > 0) {
        setSeconds(prevSeconds => {
          return prevSeconds - 1;
        });
      }
    }, 1000);
    if (otpRef.current) {
      setTimeout(() => {
        // otpRef.current?.focusField(0);
      }, 500);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [seconds]);

  useEffect(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(intervalRef.current);
        setResendEnabled(true);
      } else {
        setMinutes(minutes - 1);
        setSeconds(59);
        setResendEnabled(false);
      }
    }
  }, [seconds, minutes]);

  // const timeInterval = () => {
  //   if (seconds > 0) {
  //     setSeconds(prevSeconds => {
  //       return prevSeconds - 1;
  //     });
  //   }
  // };

  const resendOtp = async () => {
    // resend otp
  };

  // const verifyOtp = async () => {
  //   // verify otp
  // };

  return (
    <View>
      <OTPTextView
        ref={otpRef}
        containerStyle={styles.textInputContainer}
        textInputStyle={styles.textInput}
        handleTextChange={val => setOtp(val)}
        inputCount={4}
        offTintColor="#ADB5BD"
        tintColor="#3ACE6D"
        keyboardType="numeric"
      />
      {hasError && (
        <Text red p>
          Incorrect code
        </Text>
      )}

      <View row center marginT-100>
        {resendEnabled ? (
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.resendBtn}
            onPress={resendOtp}>
            <Text purple p medium>
              Resend code :{otp}
            </Text>
          </TouchableOpacity>
        ) : (
          <Text black p>
            Resend code in 0{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    marginBottom: ms(16),
  },
  textInput: {
    fontFamily: 'DMSans-Medium',
    fontSize: 24,
    color: '#110E14',
    opacity: 0.7,
    // borderBottomColor: '#ADB5BD',
    borderBottomWidth: 1,
    paddingBottom: 16,
    textAlign: 'center',
  },
  resendBtn: {
    borderBottomColor: '#372AA4',
    borderBottomWidth: 1,
  },
});
