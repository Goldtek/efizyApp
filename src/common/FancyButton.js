import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Colors, Image} from 'react-native-ui-lib';
import {RegularText} from './Text';
import {ms} from './utils';

export const FancyButton = ({title, imageName, assetGroup}) => (
  <TouchableOpacity style={styles.fancyButton} activeOpacity={0.8}>
    <Image assetName={imageName} assetGroup={assetGroup} style={styles.image} />
    <RegularText text={title} style={styles.buttonText} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
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
    backgroundColor: Colors.titanWhite,
    padding: ms(5),
  },
});
