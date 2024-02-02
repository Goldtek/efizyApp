import React, {useRef, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {View, Image} from 'react-native-ui-lib';
import {Flag} from '@ladislavbohm/react-native-flagkit';
import RBSheet from 'react-native-raw-bottom-sheet';
import {
  BoldText,
  BottomSheet,
  Button,
  MediumText,
  RegularText,
} from '../../../common';
import {useSelector} from 'react-redux';
import {cardTypeStyles as styles} from '../styles';

const CardTypes = {
  physical: {
    name: 'Physical',
    notes: [
      {
        title: 'What are physical cards?',
        text: 'Physical cards as the name implies are giftcards that you have physically.',
      },
      {
        title: 'What are their values?',
        text: 'Unlike large cards, physical cards are cards with values of 100 or less.',
      },
      {
        title: 'Note',
        text: 'Upload a clear image of the physical card you intend to trade.',
      },
    ],
  },
  large: {
    name: 'Large',
    notes: [
      {
        title: 'What are large cards?',
        text: 'These are cards whose values are 100 and above and are sold at a different rate from physical cards.',
      },
      {
        title: 'What are their values?',
        text: 'Large cards are usually above 100 in value.',
      },
      {
        title: 'Note',
        text: 'Be sure to check the rate of the card before you start the transaction.',
      },
    ],
  },
  ecode: {
    name: 'E-Codes',
    notes: [
      {
        title: 'What are E-codes?',
        text: 'These giftcards come as codes and not a physical image.',
      },
      {
        title: 'What are their values?',
        text: 'Any value of card can be an e-code as long as it is uploaded as a code and not a physical card.',
      },
      {
        title: 'Note',
        text: 'Be sure to type out or write out the code properly when trying to trade an e-code giftcard.',
      },
    ],
  },
};

const SellCardType = ({navigation, route}) => {
  const {card, currency} = route.params;
  const {currencies} = useSelector(state => state.giftcards);
  const [selectedType, setSelectedType] = useState('');
  const [cardType, setCardType] = useState(CardTypes.physical);
  const openRef = useRef();

  const openCardType = type => {
    if (type === 'physical') {
      setCardType(CardTypes.physical);
      openRef.current?.open();
    } else if (type === 'large') {
      setCardType(CardTypes.large);
      openRef.current?.open();
    } else if (type === 'e-code') {
      setCardType(CardTypes.ecode);
      openRef.current?.open();
    }
  };

  return (
    <>
      <View>
        <FastImage
          source={{uri: card.picture_url}}
          resizeMode={FastImage.resizeMode.cover}
          style={styles.banner}
        />
        <View style={styles.typeWrapper} marginB-51>
          <MediumText text="Select a card type" size={16} marginB-32 />
          <View row>
            {/* <TouchableOpacity
              activeOpacity={0.8}
              style={[
                styles.cardFrame,
                selectedType === 'physical' && styles.selected,
              ]}
              onPress={() => setSelectedType('physical')}>
              <FastImage
                source={require('@images/card_type.png')}
                resizeMode={FastImage.resizeMode.cover}
                style={styles.cardImage}
              />
              <RegularText text="Physical cards" size={12} marginB-10 />
              {selectedType === 'physical' && (
                <Image
                  source={require('@images/icons/purple_checkmark.png')}
                  resizeMode="cover"
                  style={styles.checkmark}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                styles.cardFrame,
                selectedType === 'large' && styles.selected,
              ]}
              onPress={() => setSelectedType('large')}>
              <FastImage
                source={require('@images/card_type.png')}
                resizeMode="cover"
                style={styles.cardImage}
              />
              <RegularText text="Large cards" size={12} marginB-10 />
              {selectedType === 'large' && (
                <Image
                  source={require('@images/icons/purple_checkmark.png')}
                  resizeMode="cover"
                  style={styles.checkmark}
                />
              )}
            </TouchableOpacity> */}
            {/* <TouchableOpacity
              activeOpacity={0.8}
              style={[
                styles.cardFrame,
                selectedType === 'ecode' && styles.selected,
              ]}
              onPress={() => setSelectedType('ecode')}>
              <FastImage
                source={require('@images/card_type.png')}
                resizeMode="cover"
                style={styles.cardImage}
              />
              <RegularText text="E-code" size={12} marginB-10 />
              {selectedType === 'ecode' && (
                <Image
                  source={require('@images/icons/purple_checkmark.png')}
                  resizeMode="cover"
                  style={styles.checkmark}
                />
              )}
            </TouchableOpacity> */}
          </View>
        </View>
        <Button
          title="Continue"
          disabled={!selectedType}
          onPress={() =>
            navigation.navigate('sell_values', {
              card,
              currency,
              cardType: selectedType,
            })
          }
        />
        {/* <View marginT-33>
          <MediumText text="Learn more about card types" size={14} marginB-14 />
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.opener}
            onPress={() => openCardType('physical')}>
            <RegularText text="Physical cards" size={14} />
            <Image
              source={require('@images/icons/chevron_circle_up.png')}
              resizeMode="cover"
              style={styles.chevron}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.opener}
            onPress={() => openCardType('large')}>
            <RegularText text="Large cards" size={14} />
            <Image
              source={require('@images/icons/chevron_circle_up.png')}
              resizeMode="cover"
              style={styles.chevron}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.opener}
            onPress={() => openCardType('e-code')}>
            <RegularText text="E-code" size={14} />
            <Image
              source={require('@images/icons/chevron_circle_up.png')}
              resizeMode="cover"
              style={styles.chevron}
            />
          </TouchableOpacity>
        </View> */}
      </View>
      {/* <BottomSheet
        sheetRef={openRef}
        height={700}
        render={
          <View center>
            <BoldText
              text={`${cardType?.name} Cards`}
              size={20}
              marginB-24
              marginT-14
            />
            <View style={styles.imageWrapper}>
              <FastImage
                source={require('@images/card_type.png')}
                resizeMode="cover"
                style={styles.sheetImage}
              />
            </View>
            {cardType.notes.map((note, index) => (
              <View row marginB-16 key={index}>
                <Image
                  source={require('@images/icons/pin.png')}
                  resizeMode="cover"
                  style={styles.chevron}
                />
                <View marginL-10>
                  <BoldText text={note.title} size={14} marginB-6 />
                  <RegularText
                    text={note.text}
                    size={12}
                    color="#6c757d"
                    style={{lineHeight: 20}}
                  />
                </View>
              </View>
            ))}
            <Button
              title="Got it"
              onPress={() => openRef.current?.close()}
              style={{width: '100%', marginTop: 18}}
            />
          </View>
        }
      /> */}
    </>
  );
};

export default SellCardType;
