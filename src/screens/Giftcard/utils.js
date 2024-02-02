import React from 'react';
import {BoldText, Button, RegularText, nairaFormat} from '../../common';
import {View} from 'react-native-ui-lib';

export const searchGiftCard = (text, giftcards) => {
  if (text.trim() === '') {
    return giftcards;
  }

  const matches = giftcards.filter(giftcard =>
    giftcard.name.toLowerCase().includes(text.toLowerCase()),
  );

  return matches;
};

export const sortGiftcards = giftcards => {
  try {
    return giftcards.slice().sort((a, b) => {
      if (a.face_value_range_from > b.face_value_range_from) {
        return 1;
      }
      if (b.face_value_range_from > a.face_value_range_from) {
        return -1;
      }

      return 0;
    });
  } catch (error) {
    return giftcards;
  }
};

export const calculateBuyCardValue = variations => {
  return variations.reduce(
    (acc, item) => parseInt(item?.face_value_range_to, 10) + acc,
    0,
  );
};

export const FooterView = ({onPress, total, disabled}) => (
  <View>
    {total && (
      <View row spread marginB-24>
        <RegularText text="Total price" size={16} />
        <BoldText text={nairaFormat(total)} size={16} />
      </View>
    )}
    <Button
      disabled={disabled}
      title="Buy for self"
      marginB-16
      onPress={onPress}
    />
  </View>
);
