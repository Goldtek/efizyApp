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
    fontWeight: '400',
  },

  flatListContent: {
    alignItems: 'center',
  },

  portfolio: {
    height: ms(220),
    width: '100%',
    backgroundColor: Colors.blue700,
  },

  assetText: {
    color: Colors.titanWhite,
    fontSize: 14,
  },

  amount: {
    color: Colors.white,
    fontSize: 32,
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
    width: '100%',
    height: ms(60),
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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

  subAmount2: {
    color: 'rgba(39, 74, 130, 1)',
    fontSize: 12,
  },

  icon: {
    height: ms(30),
    width: ms(30),
  },
  icon2: {
    height: ms(20),
    width: ms(20),
  },
 
  hr: {
    borderBottomColor: Colors.bordergray,
    borderBottomWidth: 0.3,
  },

  flexend: {
    alignItems: 'flex-end'
  },

  currencyContainer: {
    height: ms(120),
    width: ms(340),
    backgroundColor: Colors.white,
    borderTopLeftRadius: ms(14),
    borderTopRightRadius: ms(14),
    borderBottomColor: Colors.bordergray,
    borderBottomWidth: 0.3,
  },

  buttonContainer: {
    width: ms(340),
    height: ms(70),
    backgroundColor: Colors.white,
    borderBottomLeftRadius: ms(14),
    borderBottomRightRadius: ms(14),
  },

  miniTitle: {
    fontWeight: '400',
    fontSize: 16,
    color: 'rgba(97, 97, 97, 1)',
  },

  bigTitle: {
    fontSize: 30,
    fontWeight: '500',
    color: Colors.black,
    lineHeight: ms(36)
  },

  button: {
    height: '100%',
    width: ms(113),
    alignItems: 'center',
    justifyContent: 'center',
  },

  border: {
    borderRightColor: Colors.bordergray,
    borderRightWidth: 0.3,
    borderLeftColor: Colors.bordergray,
    borderLeftWidth: 0.3
  },

  payUser: {
    width: ms(30), 
    height: ms(30), 
    borderRadius: ms(15), 
    borderWidth: 0.5, 
    borderColor: Colors.grey60, 
    backgroundColor:  Colors.grey60
  },

  userContainer: {
    borderWidth: 0.35,
    borderColor: Colors.grey40,
    borderRadius: ms(10)
  },

  account: {
    flex: 1,
    paddingHorizontal: ms(20)
  },

  accoutDetails: {
    width: ms(330), 
    height: ms(170), 
    borderRadius: ms(20),
    overflow: 'hidden',
    alignSelf: 'center',
    padding: ms(20)
  },

  shareButton: {
    width: ms(113),
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    fontWeight: '600',
  },

  swapContainer: {
    height: ms(450),
    width: ms(340),
    backgroundColor: Colors.white,
    borderRadius: ms(14),
    borderColor: Colors.bordergray,
    borderidth: 0.3,
  },

  confirmButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: ms(285)
  },

  confirm: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: ms(3),
    paddingVertical: ms(4)
  },

  labelText: {
    fontSize: 15,
    fontWeight: '600',
  },

});

export default styles;
