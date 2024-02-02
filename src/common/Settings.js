import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Switch,
  Platform,
} from 'react-native';
import {Colors} from 'react-native-ui-lib';
import {ChevronRight} from '../../assets/icons';
import {ms} from './utils';

export const Settings = props => {
  const countryFlag = props.countryFlag;
  const showCountryFlag = props.showCountryFlag;

  const [fingerprintEnabled, setFingerPrintEnabled] = React.useState(false);

  //   const confirmFingerPrint = () => {
  //     FingerprintScanner.authenticate({description: 'Please scan to continue'})
  //       .then(res => {
  //         debugConsole.log(res);
  //         if (res === true) {
  //           saveToAsync(StoreConstants.FINGERPRINT_ENABLED, false);
  //           saveToAsync(StoreConstants.DONT_REMIND_FINGERPRINT, true);
  //           setFingerPrintEnabled(false);
  //         }
  //       })
  //       .catch(error => {
  //         debugConsole.log(error);
  //       });
  //   };
  //   const setBiometrics = status => {
  //     debugConsole.log(status);
  //     if (!status) {
  //       return confirmFingerPrint();
  //     }
  //   };


  return (
    <TouchableOpacity activeOpacity={0.7} onPress={props.onPress}>
      <View
        style={[
          styles.settingSection,
          {borderBottomWidth: props.border ? 1 : 0},
        ]}>
        <View
          style={[
            styles.listMark,
            props.marginAdjust
              ? {marginTop: Platform.OS === 'android' ? -35 : 0}
              : {},
          ]}>
          {props.icon}
        </View>
        <View style={styles.listInfo}>
          <Text
            style={[
              styles.listType,
              {...props.titleStyle, color: Colors.blue700},
            ]}>
            {props.title}
          </Text>
          {props.subtitle && (
            <Text style={[styles.listTime, {color: Colors.black}]}>
              {props.subtitle}
            </Text>
          )}
        </View>
        <View style={[styles.listArrow, {backgroundColor: Colors.titanWhite}]}>
          {props.showArrowIcon && <ChevronRight />}
          {showCountryFlag && countryFlag}
          {props.showFingerPrintSwitch && (
            <Switch
              value={fingerprintEnabled}
              // onValueChange={value => setBiometrics(value)}
              thumbColor={[Platform.OS === 'ios' ? Colors.white : Colors.black]}
              trackColor={{
                true: Colors.purple80,
                false: Colors.grey1,
              }}
              ios_backgroundColor={
                fingerprintEnabled ? Colors.black : '#D2D2D2'
              }
            />
          )}

          {/* {show2FactorSwitch && (
            <Switch
              value={authReducer?.user?.enabledTwoFactor}
              onValueChange={value => set2Factor()}
              thumbColor={[
                Platform.OS == 'ios'
                  ? appColorTheme.WHITE
                  : appColorTheme.SECONDARY,
              ]}
              trackColor={{
                true: appColorTheme.PRIMARY,
                false: appColorTheme.GREY,
              }}
              ios_backgroundColor={
                authReducer?.user?.enabledTwoFactor
                  ? appColorTheme.PRIMARY
                  : appColorTheme.GREY
              }
            />
          )} */}

          {/* {passwordSwitch && (
            <Switch
              value={authReducer.enablePassword}
             // onValueChange={value => setAccountVisibility()}
              thumbColor={[Platform.OS == 'ios' ? Colors.white : Colors.black]}
              trackColor={{
                true: Colors.purple80,
                false: Colors.grey1,
              }}
              ios_backgroundColor={
                authReducer.enablePassword ? Colors.purple80 : Colors.grey1
              }
            />
          )} */}

          {/* {fingerPrintVisible && <FingerPrintModal
              setModalVisible={() => setFingerPrintVisible(false)}
              modalVisible={fingerPrintVisible}
              onAuthenticate={() => confirmFingerPrint()}
            />} */}
        </View>
      </View>
      <View style={[styles.bordergrey, {borderColor: Colors.grey1}]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  settingSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBEB',
    width: ms(352),
  },
  listMark: {
    width: ms(30),
    height: 30,
    alignItems: 'center',
    marginTop: 0,
    borderRadius: 15,
  },
  listInfo: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 15,
  },
  listType: {
    // fontFamily: FONTFAMILYMEDIUM,
    fontSize: 14,
    marginBottom: 5,
    fontWeight: '600',
  },
  listTime: {
    fontSize: 12,
    color: 'rb(252,252,252)',
    // fontFamily: FONTFAMILYREGULAR,
  },
  listArrow: {
    marginLeft: 'auto',
    borderRadius: 40,
  },
  bordergrey: {
    height: 1,
  },
});
