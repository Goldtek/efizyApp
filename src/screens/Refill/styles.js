import {StyleSheet} from 'react-native';
import {ms} from '../../common';
import {Colors} from 'react-native-ui-lib';

export const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
    paddingTop: ms(50),
    backgroundColor: Colors.white,
  },
  keyboardViewPadded: {
    paddingBottom: ms(60),
  },
  scrollPadding: {paddingTop: ms(24)},
  headingBtn: {
    marginRight: ms(10),
  },
  activeBtn: {
    borderRadius: ms(8),
    backgroundColor: '#EFEEFF',
  },
  headingBtnText: {
    fontFamily: 'DMSans-Regular',
    fontSize: 14,
    lineHeight: 21,
    color: '#6C757D',
    paddingVertical: ms(8),
    paddingHorizontal: ms(12),
  },
  btnActive: {
    color: '#372AA4',
  },
  errorText: {
    marginTop: ms(-12),
  },
  absoluteBtn: {
    width: '100%',
    marginTop: ms(32),
  },
  network: {
    width: ms(76),
    paddingTop: ms(8),
    borderRadius: ms(8),
    paddingBottom: ms(8),
  },
  selectedNetwork: {
    backgroundColor: '#F6F5FF',
    borderColor: '#372AA4',
    borderWidth: 1,
  },
  networkImage: {
    width: ms(56),
    height: ms(56),
    marginBottom: ms(8),
  },
});

export const airtimeDetailsStyles = StyleSheet.create({
  infoBox: {
    backgroundColor: Colors.white,
    paddingHorizontal: ms(24),
    paddingBottom: ms(24),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: ms(30),
    borderRadius: 8,
    marginBottom: ms(40),
  },
  infoIcon: {
    width: ms(64),
    height: ms(64),
    marginTop: ms(-30),
  },
  texts: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
});
