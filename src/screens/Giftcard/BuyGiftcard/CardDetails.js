import React, {useEffect, useState} from 'react';
import FastImage from 'react-native-fast-image';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  Button,
  CurrencySelector,
  Input,
  QuantityInput,
  Select,
  VariationSelector,
  moneyFormat,
} from '../../../common';
import {cardDetailsStyles as styles} from '../styles';
import {View} from 'react-native-ui-lib';
// import {
//   getAllIntlCards,
//   getIntlCardVariations,
// } from '@store';
import {useDispatch, useSelector} from 'react-redux';
import {FooterView, sortGiftcards} from '../utils';

const card = {
  picture_url:
    'https://cdn.fiestashows.com/wp-content/uploads/2021/11/FS-Gift-Card.png',
  name: 'Amzon',
  uuid: '13ejrj4j4jj4j4jrjgnvndner',
};

const CardDetails = ({navigation, route}) => {
  // const {card} = route.params;


  // const {currencies, buyVariations} = useSelector(state => state.giftcards);
  const buyVariations = [
    {
      picture_url:
        'https://us.123rf.com/450wm/jeromecronenberger/jeromecronenberger1904/jeromecronenberger190400035/133412660-gift-card-gift-voucher-100-dollars.jpg?ver=6',
    },
    {
      picture_url:
        'https://cdn.fiestashows.com/wp-content/uploads/2021/11/FS-Gift-Card.png',
    },
    {
      picture_url:
        'https://shop.framedbysarah.com/cdn/shop/products/framed-giftcard_950x550.png?v=1607652637',
    },
  ];
  const [selectedCurrency, setSelectedCurrency] = useState();
  const [selectedVariation, setSelectedVariation] = useState();
  const [amount, setAmount] = useState(0);
  const [discount, setDiscount] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllIntlCards(card.uuid));
  // }, [card, dispatch]);

  const quantityChange = type => {
    if (selectedVariation) {
      const quantityCost =
        parseInt(selectedVariation.face_value_range_to, 10) *
        selectedVariation.rate;

      if (type === 'increase') {
        setQuantity(quantity + 1);
        const tempAmount = quantityCost * (quantity + 1);
        setAmount(tempAmount);
      } else {
        setQuantity(quantity - 1);
        const tempAmount = quantityCost * (quantity - 1);
        setAmount(tempAmount);
      }
    }
  };

  const onCurrencySelection = item => {
    setSelectedCurrency(item);
    // dispatch(getIntlCardVariations(item.uuid));
  };

  const onValueSelection = val => {
    setSelectedVariation(val);
    setAmount(parseInt(val.face_value_range_to, 10) * val.rate);
    setQuantity(1);
  };

  const onGetDiscount = discountV => {
    setDiscountAmount(discountV.discountAmount);
    // setDiscount(discountV.discountVoucher);
  };

  const onContinue = () => {
    navigation.navigate('gc_summary', {
      amount: amount,
      service_type: 'giftcard-buy',
      type: 'giftcard',
      data: {
        card,
        quantity,
        currency: selectedCurrency,
        variation: selectedVariation,
        voucher: discount,
      },
    });
  };

  return (
    <KeyboardAwareScrollView>
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
            placeholder="Select the currency you want to buy"
          />
        </View>
      )} */}
      {/* <View marginB-16>
        <VariationSelector
          selected={selectedVariation}
          onSelect={onValueSelection}
          image={card.picture_url}
          name={card.name}
          values={sortGiftcards(buyVariations)}
          currency={selectedCurrency?.currency || 'USD'}
          label="Card Value"
          placeholder="Select Giftcard Value"
          // disabled={buyVariations.length === 0}
        />
      </View> */}
      <Input
        isMoney
        label="Amount"
        placeholder="Total cost"
        value={moneyFormat(amount)}
        onChange={setAmount}
        disabled
      />
      <QuantityInput
        total={quantity}
        onIncrease={() => quantityChange('increase')}
        onReduce={() => (quantity > 1 ? quantityChange('decrease') : null)}
      />
    </KeyboardAwareScrollView>
  );
};

export default CardDetails;
