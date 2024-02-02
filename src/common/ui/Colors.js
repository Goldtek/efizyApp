// import { useColorScheme } from 'react-native';
import {Colors} from 'react-native-ui-lib';

export const appColors = {
  white: '#fff',
  black: '#2f2f2f',
  brand: '#473ABE',
  pink: '#EA3610',
  purple: '#372AA4',
  text: '#110E14',
  violet: '#F7F5FF',
  violet100: '#8E83F1',
  violet200: '#6558D7',
  transparent: 'transparent',
  red: '#EF233C',
  border: '#D9D5FB',
  lightish: '#6C757D',
  grey600: '#E2E4E8',
  grey700: '#DEE2E6',
  Snow300: '#F9FAFC',
  hash: '#ADB5BD',
  paleSky: '#6C757D',
  titanWhite: '#F5F4FF',
  offWhite: '#E4DBFF',
  orange: '#FF948C',
  bgColor: '#F9FAFB',
  white002: '#BFD5FF',
  green: '#30AF3E',
  dot: '#777E90',
  ash: '#F4F2FE',
  yellow100: '#FFB61B',
  orange100: '#FF6A2C',
  shadow: '#E1E1E1',
};

Colors.loadColors(appColors);

export const useColor = () => {
  return appColors;
};
