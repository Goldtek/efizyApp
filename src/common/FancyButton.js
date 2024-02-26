import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Colors, Image, View} from 'react-native-ui-lib';
import {RegularText} from './Text';
import {ms} from './utils';

export const FancyButton = ({title, imageName, assetGroup}) => (
  <TouchableOpacity>
    <View style={styles.fancyButton} activeOpacity={0.7}>
      <Image assetName={imageName} assetGroup={assetGroup} style={styles.image} />
    </View>
    <View centerH marginT-5>
    <RegularText text={title} style={styles.buttonText} />
    </View>
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
    color: Colors.white,
  },

  fancyButton: {
    borderRadius: 25,
    width: ms(50),
    height: ms(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#203A67',
    padding: ms(5),
  },
});
