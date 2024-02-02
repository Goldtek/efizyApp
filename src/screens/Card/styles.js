import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-ui-lib';
import {ms} from '../../common';

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 22,
  },
  card: {
    height: ms(210),
    width: ms(325),
    backgroundColor: Colors.black,
    borderRadius: ms(15),
    shadowColor: 'rgba(44, 36, 8)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 5,
  },
  cardContainer: {
    width: '100%',
    height: ms(210),
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  flatListContent: {
    alignItems: 'center', // Center items horizontally
  },
});

export default styles;
