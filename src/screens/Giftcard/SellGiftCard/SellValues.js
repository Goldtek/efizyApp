import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';
import {Colors, View} from 'react-native-ui-lib';
import {BoldText, Button, MediumText, RegularText} from '../../../common';
import {useDispatch, useSelector} from 'react-redux';
import {cardTypeStyles as styles} from '../styles';
import {TextInput, TouchableOpacity} from 'react-native';
import {MinusIcon, PlusIcon} from '../../../../assets/icons';
import {sortGiftcards} from '../utils';

const filterCards = (cards = [], cart = []) => {
  try {
    if (!cart.length) {
      return cards;
    }

    if (cart[0]?.id) {
      return [];
    }
    return cards.filter(card => card.uuid === cart[0]?.uuid);
  } catch (error) {
    return [];
  }
};

const SellValues = ({navigation, route}) => {
  const {card, currency, cardType} = route.params;
  const {variations} = useSelector(state => state.giftcards);
  const [quantity, setQuantity] = useState(0);
  const [otherValue, setOtherValue] = useState('');
  const [showOther, setShowOther] = useState(false);
  const dispatch = useDispatch();

  console.log('variations', sortGiftcards(variations));

  //   useEffect(() => {
  //     dispatch(getCardSellVariation(card.uuid));
  //   }, [card, dispatch]);
  const handleQuantity = type => {
    if (type === 'plus') {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <View flex spread paddingB-20>
        <View>
          {/* Cart */}
          <View style={styles.cart}>
            <View row center>
              <FastImage
                source={{uri: card.picture_url}}
                resizeMode={FastImage.resizeMode.cover}
                style={styles.cardIcon}
              />
              <View marginL-16>
                <MediumText text={card.name} size={14} marginB-2 />
                <BoldText text="$ 1000" size={12} color="#00875A" />
              </View>
            </View>

            <View style={styles.quantityWrapper}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => handleQuantity('minus')}>
                <MinusIcon />
              </TouchableOpacity>
              <View style={styles.quantity}>
                <MediumText text={quantity} size={13} color="#172b4d" />
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => handleQuantity('plus')}>
                <PlusIcon />
              </TouchableOpacity>
            </View>
          </View>
          {/* Cart */}
          <View style={styles.cart}>
            <View row center>
              <FastImage
                source={{uri: card.picture_url}}
                resizeMode={FastImage.resizeMode.cover}
                style={styles.cardIcon}
              />
              <View marginL-16>
                <MediumText text={card.name} size={14} marginB-2 />
                <BoldText text="$ 1000" size={12} color="#00875A" />
              </View>
            </View>

            <View style={styles.quantityWrapper}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => handleQuantity('minus')}>
                <MinusIcon />
              </TouchableOpacity>
              <View style={styles.quantity}>
                <MediumText text={quantity} size={13} color="#172b4d" />
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => handleQuantity('plus')}>
                <PlusIcon />
              </TouchableOpacity>
            </View>
          </View>

          {!showOther && (
            <View marginT-8>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{alignSelf: 'center'}}
                onPress={() => setShowOther(true)}>
                <BoldText
                  text="+ Add other values"
                  size={16}
                  color={Colors.blue}
                />
              </TouchableOpacity>
            </View>
          )}
          {showOther && (
            <View style={styles.other}>
              <MediumText
                text="Other Values"
                size={16}
                color={Colors.blue700}
                marginB-19
              />
              <View row spread marginB-14>
                <TextInput
                  placeholderTextColor="#989898"
                  placeholder="Input value"
                  value={otherValue}
                  onChangeText={setOtherValue}
                  style={styles.otherInput}
                />
                <View style={styles.quantityWrapper}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => handleQuantity('minus')}>
                    <MinusIcon />
                  </TouchableOpacity>
                  <View style={styles.quantity}>
                    <MediumText text={quantity} size={13} color="#172b4d" />
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => handleQuantity('plus')}>
                    <PlusIcon />
                  </TouchableOpacity>
                </View>
              </View>
              <View row marginB-17>
                <RegularText
                  text="Estimated Value"
                  size={11}
                  marginR-14
                  color={Colors.lightish}
                />
                <BoldText text="•  ₦0 @ ₦250/$" size={13} color={Colors.blue} />
              </View>
            </View>
          )}
        </View>

        <Button
          title="Continue"
          disabled={quantity < 1}
          onPress={() =>
            navigation.navigate('selection_summary', {
              card,
              currency,
              cardType,
            })
          }
        />
      </View>
    </>
  );
};

export default SellValues;
