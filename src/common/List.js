import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors, Text, TouchableOpacity, View} from 'react-native-ui-lib';
import {ForwardArrow} from '../../assets/icons';
import {ms} from './utils';

export const NavList = ({icon, iconBg, title, onPress}) => (
  <TouchableOpacity
    row
    spread
    padding-16
    style={styles.link}
    marginB-16
    onPress={onPress}>
    <View row center>
      <View style={styles.linkIcon} backgroundColor={iconBg}>
        {icon}
      </View>
      <Text p medium black>
        {title}
      </Text>
    </View>
    <ForwardArrow fill={Colors.purple} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  link: {
    borderColor: Colors.Gallery,
    borderWidth: 1,
    borderRadius: ms(8),
    alignItems: 'center',
    shadowColor: 'rgba(213, 211, 228, 0.12)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 16,
    backgroundColor: '#fff',
  },
  linkIcon: {
    width: ms(40),
    height: ms(40),
    borderRadius: ms(40 / 2),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: ms(16),
  },
});
