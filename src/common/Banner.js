import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Colors, Image, View} from 'react-native-ui-lib';
import {MediumText, RegularText} from './Text';
import {ms} from './utils';

export const GCBanner = ({
  image,
  title,
  label,
  amount,
  hasText,
  onPress,
  size,
  style,
}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    style={[styles.scrollMini, styles.marginR12, size && {width: size}, style]}
    onPress={onPress}>
    <Image
      assetGroup="temporary"
      assetName={image}
      style={[styles.imageMini, size && {width: size}]}
    />
    {hasText && title && label && amount && (
      <View row spread centerV marginT-8>
        <View>
          <RegularText text={title} marginB-4 size={16} />
          <RegularText
            text={label}
            marginB-4
            size={14}
            color={Colors.black100}
          />
        </View>
        <MediumText text={amount} size={16} />
      </View>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  scrollMini: {
    width: ms(185),
    // height: ms(120),
  },
  imageMini: {
    width: ms(185),
    height: ms(120),
    borderRadius: ms(8),
  },
  marginR12: {
    marginRight: ms(12),
  },
});
