import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-ui-lib';
import {ms} from '../../../common';

const styles = StyleSheet.create({
  profilePix: {
    height: ms(100),
    width: ms(100),
    borderRadius: ms(50),
    borderWidth: 6,
    borderColor: Colors.grey80,
  },
});

export default styles;
