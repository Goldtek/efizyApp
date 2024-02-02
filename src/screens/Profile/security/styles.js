import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-ui-lib';
import {ms} from '../../../common';

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 22,
  },
  pixContainer: {
    height: ms(80),
    width: ms(352),
    backgroundColor: Colors.blue700,
    alignSelf: 'center',
    borderRadius: 10,
  },
  profilePix: {
    height: ms(40),
    width: ms(40),
    borderRadius: ms(20),
    borderWidth: 3,
    borderColor: Colors.white,
  },
  profileName: {
    color: Colors.white,
    fontSize: 16,
  },
  icon: {
    backgroundColor: '#324c6e',
    borderRadius: 35 / 2,
    height: ms(35),
    width: ms(35),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: ms(3),
  },

  settingsContainer: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: Colors.titanWhite,
    borderColor: '#EBEBEB',
    width: ms(352),
    alignSelf: 'center',
  },
});

export default styles;
