import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-ui-lib';
import {ms} from '../../common';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: ms(24),
    backgroundColor: Colors.white,
  },
  paddedScroll: {
    paddingBottom: ms(100),
  },
  logo: {
    width: ms(170),
    height: ms(120),
  },
  forgotPass: {
    alignSelf: 'flex-end',
    marginBottom: ms(24),
  },
  forgotPassLabel: {
    fontSize: 12,
    fontWeight: '500',
  },
  signUpLabel: {
    fontSize: 15,
    fontWeight: '600',
  },
  countryCode: {
    backgroundColor: Colors.white,
    paddingHorizontal: ms(16),
    marginRight: ms(8),
  },
  phone: {
    width: ms(230),
  },
  codeText: {color: '#1B1B1B'},
  intro: {color: '#6C757D'},
  error: {
    borderColor: Colors.red30, 
    minHeight: ms(40), width: '100%', 
    borderStyle: 'solid', 
    backgroundColor: '#F5DADF', 
    borderWidth: 0.5, 
    borderRadius: 8
  },
  dropdown: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#E2E4E8',
    borderWidth: 1,
    marginBottom: ms(10),
    paddingVertical: ms(12),
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  dropstyle: {
    width: '40%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  otpView: {
    width: ms(325),
    fontFamily: 'BRFirma-SemiBold',
    height: ms(50),
    
  },
  cellView: {
    width: ms(40),
    height: ms(40),
    marginTop: ms(40),
    backgroundColor: Colors.Snow300,
    borderRadius: 10,
    borderWidth: 0,
    fontSize: 18,
    color: Colors.Grey300,
    fontFamily: 'BRFirma-SemiBold',
    alignSelf: 'center',
    borderBottomWidth: 1.5,
    borderBottomColor: Colors.DarkBlue,
    textTransform: 'none'
  },
  errorCellView: {
    width: ms(40),
    height: ms(40),
    backgroundColor: Colors.PaleRed,
    borderBottomWidth: 0,
    borderRadius: 10,
    borderWidth: 0,
    fontSize: 18,
    color: Colors.PaRed,
    fontFamily: 'BRFirma-SemiBold',
    alignSelf: 'center',
    textTransform: 'none'
  },
  otpErrorText: {
    marginTop: ms(10),
    color: Colors.PaRed,
    alignSelf: 'center',
  },
  underlineHighlighted: {
    borderColor: Colors.DarkBlue,
    textTransform: 'none'
  },
});

export const onboardingStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  image: {
    width: ms(529),
    height: ms(529),
    alignSelf: 'center',
  },
  onboarding2: {
    width: ms(320),
    height: ms(320),
    alignSelf: 'center',
  },
  onboarding3: {
    width: ms(374),
    height: ms(374),
    alignSelf: 'center',
  },
  pager: {
    paddingHorizontal: ms(22),
    height: '100%',
    justifyContent: 'flex-end',
    paddingBottom: ms(48),
  },
});
