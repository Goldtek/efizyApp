import React from 'react';
import {Image, StyleSheet} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {Colors, View} from 'react-native-ui-lib';
import {ms} from './utils';
import {MediumText, RegularText} from './Text';

export const TransactionPIN = ({openRef, onComplete, status}) => {
  return (
    <RBSheet
      ref={openRef}
      height={468}
      closeOnPressMask={false}
      closeOnPressBack={false}
      closeOnDragDown={true}
      dragFromTopOnly
      customStyles={{
        wrapper: styles.sheetWrapper,
        container: styles.container,
        draggableIcon: styles.sheetIcon,
      }}>
      <View center backgroundColor="#F4F5F7">
        {/* {status === 'error' && (
          <Image
            source={require('@assets/images/pin_error.png')}
            resizeMode="cover"
            style={styles.lock}
          />
        )}
        {status === 'success' && (
          <Image
            source={require('@assets/images/pin_valid.png')}
            resizeMode="cover"
            style={styles.lock}
          />
        )}
        {status !== 'success' && status !== 'error' && (
          <Image
            source={require('@assets/images/pin_lock.png')}
            resizeMode="cover"
            style={styles.lock}
          />
        )} */}
        <MediumText
          text="Enter your transaction pin"
          size={20}
          color={Colors.blue700}
          marginB-30
        />
        <View testID="pin">
          <OTPInputView
            style={styles.otpView}
            pinCount={6}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={onComplete}
          />
        </View>
        {status === 'error' && (
          <RegularText
            text="You have entered an incorrect PIN"
            color={Colors.red100}
            marginT-19
            style={styles.errorText}
          />
        )}
      </View>
    </RBSheet>
  );
};

const styles = StyleSheet.create({
  sheetWrapper: {},
  container: {
    paddingTop: ms(16),
    backgroundColor: '#F4F5F7',
    borderTopLeftRadius: ms(30),
    borderTopRightRadius: ms(30),
  },
  sheetIcon: {
    width: ms(40),
    height: ms(5),
    backgroundColor: 'rgba(0,0,0,0.05)',
    marginBottom: ms(36),
  },
  lock: {
    width: ms(60),
    height: ms(60),
    marginBottom: ms(35),
  },
  otpView: {
    width: '80%',
    height: 50,
  },
  underlineStyleBase: {
    width: 44,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 15,
    color: Colors.blue700,
    fontSize: 16,
    fontFamily: 'DMSans-Bold',
    fontWeight: '700',
  },
  underlineStyleHighLighted: {
    borderColor: '#372AA4',
    fontSize: 16,
    fontFamily: 'DMSans-Medium',
    fontWeight: '500',
  },
  errorText: {
    alignSelf: 'flex-start',
    paddingLeft: ms(25),
  },
});
