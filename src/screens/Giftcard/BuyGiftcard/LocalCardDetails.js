import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';
import {View} from 'react-native-ui-lib';
import {Input, QuantityInput} from '../../../common';
import {cardDetailsStyles as styles} from '../styles';
import {FooterView} from '../utils';

const LocalCardDetails = ({navigation, route}) => {
  const {card} = route.params;
  const [amount, setAmount] = useState('');
  const [discount, setDiscount] = useState('');
  const [quantity, setQuantity] = useState(0);

  const amountChange = text => {
    setAmount(text);
    setQuantity(1);
  };

  const getTotalAmount = () => {
    if (amount && quantity > 0) {
      return Number(amount) * quantity;
    }
    return null;
  };

  const onContinue = () => {
    navigation.navigate('gc_summary', {
      amount: Number(amount) * quantity,
      service_type: 'local-giftcard-buy',
      type: 'local-giftcard',
      data: {
        card,
        quantity,
        voucher: discount,
      },
    });
  };

  return (
    <>
      <View>
        <FastImage
          source={{uri: card.picture}}
          resizeMode={FastImage.resizeMode.cover}
          style={styles.banner}
        />
        <Input
          isMoney
          label="Value"
          placeholder="Enter amount"
          value={amount}
          onChange={amountChange}
        />
        {/* <DoubleNoticeBanner
          text={`Minimum Amount - ${nairaFormat(1000)}`}
          bottomText={`Maximum Amount - ${nairaFormat(500000)}`}
        /> */}
        <QuantityInput
          total={quantity}
          onIncrease={() => setQuantity(quantity + 1)}
          onReduce={() => (quantity > 0 ? setQuantity(quantity - 1) : null)}
        />
        <Input
          label="Discount code"
          secondLabel="(Optional)"
          placeholder="Enter discount"
          value={discount}
          onChange={setDiscount}
        />
      </View>
    </>
  );
};

export default LocalCardDetails;
