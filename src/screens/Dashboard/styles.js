import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-ui-lib';
import {ms} from '../../common';

const styles = StyleSheet.create({
  dashboard: {
    backgroundColor: Colors.blue700,
    height: ms(90),
    width: ms(340),
    borderRadius: 16,
    alignSelf: 'center',
    zIndex: 1,
  },
  iconTray: {
    width: ms(340),
    height: ms(60),
    alignSelf: 'center',
    borderRadius: 16,
    justifyContent: 'space-between',
  },

  profilePix: {
    height: ms(30),
    width: ms(30),
    borderRadius: 15,
  },
  shortcuts: {
    width: ms(320),
    height: ms(70),
    borderRadius: 16,
    borderColor: Colors.blue700,
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: Colors.white,
    zIndex: 5,
    shadowColor: 'rgba(44, 36, 8)',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 6,
    borderStyle: 'dashed',
  },

  services: {
    height: ms(500),
    width: ms(340),
    borderRadius: 16,
    backgroundColor: Colors.white,
    alignSelf: 'center',
  },
  amount: {
    fontSize: 30,
  },
  shortcutText: {
    fontSize: 14,
  },
  subtitle: {
    fontSize: 25,
    alignSelf: 'center',
  },

  servicesText: {
    fontSize: 12,
  },
  serviceContainer: {
    borderRadius: 10,
    borderColor: Colors.black,
    borderWidth: 0.8,
  },
  menuWrapper: {
    width: ms(90),
  },
  imageWrapper: {
    width: ms(80),
    height: ms(80),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: ms(16),
  },
  menuIcon: {
    width: '100%',
    height: 172,
    borderRadius: 8,
  },
  menuTitle: {
    textAlign: 'center',
    width: '86%',
  },
  image: {
    width: ms(70),
    height: ms(70),
    resizeMode: 'cover',
  },
  contentContainerStyle: {
    paddingBottom: ms(30),
  },
});

export default styles;
