import React, {useEffect, useState} from 'react';
import FastImage from 'react-native-fast-image';
import {View} from 'react-native-ui-lib';
import { Button, CurrencySelector, MediumText} from '../../../common';
// import {getCardSellVariation, useAppDispatch, useAppSelector} from '@store';
import {useDispatch, useSelector} from 'react-redux';

import {cardDetailsStyles as styles} from '../styles';

const SellCardDetails = ({navigation, route}) => {
  const {card} = route.params;
  const {currencies} = useSelector(state => state.giftcards);
  const [selectedCurrency, setSelectedCurrency] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    //  dispatch(getCardSellVariation(card.uuid));
  }, [card, dispatch]);

  const onCurrencySelection = item => {
    setSelectedCurrency(item);
  };

  return (
    <>
      <View flex spread paddingB-40>
        <View>
          <MediumText
            text="Select a currency you would like to sell?"
            size={16}
            marginB-23
          />
          <FastImage
            source={{uri: card.picture_url}}
            resizeMode={FastImage.resizeMode.cover}
            style={styles.banner}
          />
          {/* {currencies.length > 0 && (
            <View marginB-16>
              <CurrencySelector
                currencies={currencies}
                selected={selectedCurrency}
                onSelect={onCurrencySelection}
                height={390}
                label="Currency"
                placeholder="Select the currency you want to sell"
              />
            </View>
          )} */}
        </View>
        <Button
          title="Continue"
          disabled={!selectedCurrency}
          onPress={() =>
            navigation.navigate('sell_cardtype', {
              card,
              currency: selectedCurrency,
            })
          }
        />
      </View>
    </>
  );
};

export default SellCardDetails;
