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
    alignItems: 'center',
  },
  portfolio: {
    height: ms(140),
    width: ms(325),
    backgroundColor: Colors.black,
    alignSelf: 'center',
    borderRadius: ms(10),
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
  },
  assetText: {
    color: Colors.titanWhite,
    fontSize: 14,
  },
  amount: {
    color: Colors.white,
    fontSize: 28,
  },
  reward: {
    color: Colors.white,
    fontSize: 14,
  },
  image: {
    height: ms(30),
    width: ms(30),
  },
  buttonText: {
    fontSize: 14,
  },

  fancyButton: {
    borderRadius: 10,
    width: ms(60),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 1,
    shadowRadius: 1,
    backgroundColor: Colors.titanWhite,
    elevation: 2,
    padding: ms(5),
  },
  currencyBar: {
    width: ms(325),
    height: ms(60),
    backgroundColor: Colors.titanWhite,

    borderRadius: 10,
    marginTop: ms(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: ms(8),
  },
  currencyTitle: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: '600',
  },
  listAmount: {
    color: Colors.black,
    fontSize: 14,
    fontWeight: '600',
  },
  subAmount: {
    color: Colors.black100,
    fontSize: 12,
  },
  icon: {
    height: ms(20),
    width: ms(20),
  },
  flexend: {alignItems: 'flex-end'},
});

export default styles;
