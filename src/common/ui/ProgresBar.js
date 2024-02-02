import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useColor} from './Colors';
import {wp} from '../utils';

export const ProgressBar = ({progress}) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={[styles.content, {width: progress}]} />
    </View>
  );
};

const useStyles = () => {
  const colors = useColor();
  return StyleSheet.create({
    container: {
      width: wp(287),
      borderRadius: 16,
      alignItems: 'flex-start',
      justifyContent: 'center',
      height: 5,
      backgroundColor: '#6558D7',
      paddingHorizontal: 3,
      marginTop: 8,
    },
    content: {
      borderRadius: 16,
      height: 5,
      backgroundColor: colors.white,
    },
  });
};
