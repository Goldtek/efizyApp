import {StyleSheet} from 'react-native';
import {useColor} from './Colors';
import {ms} from '../common';

const useStyles = () => {
  const colors = useColor();
  const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    rightComponent: {
      marginBottom: 10,
      minWidth: 25,
    },
    backArrow: {
      marginLeft: ms(26),
      paddingVertical: 8,
      alignSelf: 'center',
    },
    title: {
      fontWeight: '500',
      fontSize: 16,
      lineHeight: 20,
      color: colors.black,
      letterSpacing: -0.2,
      marginTop: ms(5),
    },
  });
  return styles;
};

export default useStyles;
