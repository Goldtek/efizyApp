import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';
import {View, Image, Colors} from 'react-native-ui-lib';
import {Flag} from '@ladislavbohm/react-native-flagkit';
import Modal from 'react-native-modal';
import {
  BoldText,
  Button,
  CheckBox,
  Input,
  MediumText,
  RegularText,
} from '../../../common';
import {useDispatch, useSelector} from 'react-redux';
import {cardTypeStyles as styles} from '../styles';

const SelectionSummary = ({navigation, route}) => {
  const {card, currency, cardType} = route.params;
  const {currencies} = useSelector(state => state.giftcards);
  const [discount, setDiscount] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  return (
    <>
      <View>
        <FastImage
          source={{uri: card.picture_url}}
          resizeMode={FastImage.resizeMode.cover}
          style={styles.banner}
        />
        <View style={styles.typeWrapper} marginB-24>
          <MediumText text="Select a card type" size={16} marginB-32 />
          <View row>
            <View
              style={[
                styles.cardFrame,
                cardType === 'physical' && styles.selected,
              ]}>
              {/* <FastImage
                source={require('@images/card_type.png')}
                resizeMode={FastImage.resizeMode.cover}
                style={styles.cardImage}
              /> */}
              <RegularText text="Physical cards" size={12} marginB-10 />
              {/* {cardType === 'physical' && (
                <Image
                  source={require('@images/icons/purple_checkmark.png')}
                  resizeMode="cover"
                  style={styles.checkmark}
                />
              )} */}
            </View>
            {/* <View
              style={[
                styles.cardFrame,
                cardType === 'large' && styles.selected,
              ]}>
              <FastImage
                source={require('@images/card_type.png')}
                resizeMode="cover"
                style={styles.cardImage}
              />
              <RegularText text="Large cards" size={12} marginB-10 />
              {cardType === 'large' && (
                <Image
                  source={require('@images/icons/purple_checkmark.png')}
                  resizeMode="cover"
                  style={styles.checkmark}
                />
              )}
            </View> */}
            {/* <View
              style={[
                styles.cardFrame,
                cardType === 'ecode' && styles.selected,
              ]}>
              <FastImage
                source={require('@images/card_type.png')}
                resizeMode="cover"
                style={styles.cardImage}
              />
              <RegularText text="E-code" size={12} marginB-10 />
              {cardType === 'ecode' && (
                <Image
                  source={require('@images/icons/purple_checkmark.png')}
                  resizeMode="cover"
                  style={styles.checkmark}
                />
              )}
            </View> */}
          </View>
        </View>

        <View style={styles.valueWrapper}>
          <MediumText
            text="Select giftcard value"
            size={16}
            color={Colors.black800}
            marginB-13
          />
          <View row>
            <View style={styles.value}>
              <BoldText
                size={12}
                marginR-16
                color={Colors.blue}
                text="$100 x 2"
              />
            </View>
          </View>
        </View>

        {/* <View style={styles.valueWrapper} marginT-24>
          <View row spread marginB-19>
            <MediumText text="Images" size={16} color={Colors.black800} />
            <TouchableOpacity activeOpacity={0.8}>
              <BoldText text="Add image" size={16} color={Colors.blue} />
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: 10 }}>
            <View style={styles.imgWrapper}>
              <Image
                source={require('@images/demo/slider_1.jpg')}
                resizeMode="cover"
                style={styles.img}
              />
              <TouchableOpacity activeOpacity={0.8} style={styles.imgClose}>
                <Image
                  source={require('@images/icons/duotone_close.png')}
                  resizeMode="cover"
                  style={styles.closeIcon}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.imgWrapper}>
              <Image
                source={require('@images/demo/slider_1.jpg')}
                resizeMode="cover"
                style={styles.img}
              />
              <TouchableOpacity activeOpacity={0.8} style={styles.imgClose}>
                <Image
                  source={require('@images/icons/duotone_close.png')}
                  resizeMode="cover"
                  style={styles.closeIcon}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.imgWrapper}>
              <Image
                source={require('@images/demo/slider_1.jpg')}
                resizeMode="cover"
                style={styles.img}
              />
              <TouchableOpacity activeOpacity={0.8} style={styles.imgClose}>
                <Image
                  source={require('@images/icons/duotone_close.png')}
                  resizeMode="cover"
                  style={styles.closeIcon}
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View> */}

        <View marginT-24 marginB-40>
          <Input
            label="Discount code"
            secondLabel="(Optional)"
            placeholder="Enter discount"
            value={discount}
            onChange={setDiscount}
          />
        </View>
      </View>

      <View>
        <Button
          transparent
          title="Edit Value(s) Selection"
          onPress={() => {}}
          style={{marginBottom: 23}}
        />
        <Button title="Upload Cards" onPress={() => setShowModal(true)} />
      </View>
      <Modal isVisible={showModal} style={styles.modal}>
        <View style={styles.modalContent}>
          <MediumText
            text="Important Notice"
            size={16}
            color={Colors.black800}
            marginB-15
          />
          {/* <Image
            source={require('@images/demo/amazon.png')}
            resizeMode="cover"
            style={styles.modalImage}
          /> */}
          <View marginB-41>
            <View row marginB-20>
              <View style={styles.dot} />
              <RegularText
                text="Gift card uploaded on a wrong channel will be transferred to the appropriate channel and treated at the current rate in that channel"
                size={14}
                style={styles.modalText}
                color={Colors.black800}
              />
            </View>
            <View row marginB-18>
              <View style={styles.dot} />
              <RegularText
                text="Rate may be lesser for cards not starting with “AQ”"
                size={14}
                style={styles.modalText}
                color={Colors.black800}
              />
            </View>
            <View row>
              <CheckBox
                size={20}
                isChecked={agreeTerms}
                onPress={val => setAgreeTerms(!agreeTerms)}
                fillColor={Colors.blue}
                style={{borderRadius: 2}}
              />
              <RegularText
                text="I agree to the terms of trade"
                size={14}
                style={styles.modalText}
                color={Colors.black800}
              />
            </View>
          </View>
          <Button title="Submit" onPress={() => {}} style={{width: '100%'}} />
        </View>
      </Modal>
    </>
  );
};

export default SelectionSummary;
