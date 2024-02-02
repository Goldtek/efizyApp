import {
  BackHeader,
  BoldText,
  GCBanner,
  MediumText,
  SearchInput,
} from '../../../common';
import React, {useEffect, useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {View, Colors} from 'react-native-ui-lib';
import {useDispatch, useSelector} from 'react-redux';
import {BuyStyles as styles} from '../styles';
 import {ForwardArrow} from '../../../../assets/icons';
// import {searchGiftCard} from '../utils';
// import {
//   getAllGiftCards,
//   getAllLocalGiftCards,
// } from '@store';

const BuyGiftCard = ({navigation}) => {
  //  const {giftcards, localGiftcards} = useSelector(state => state.giftcards);
  const dispatch = useDispatch();
  const giftcards = [
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
  const localGiftcards = [
    {
      picture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp5rf5YGgUYBWldUBk5m3ow_Su1sPHNeA9cg4uPRIaqL03wkHwXh-67vl5np9xl__1VZc&usqp=CAU',
    },
    {
      picture:
        'https://shop.framedbysarah.com/cdn/shop/products/framed-giftcard_950x550.png?v=1607652637',
    },
    {
      picture:
        'https://5.imimg.com/data5/ECOM/Default/2023/1/HL/BD/FQ/24005741/redandwhiteelegantgiftvouchercard-1-500x500.jpg',
    },
  ];

  // useEffect(() => {
  //   dispatch(getAllGiftCards('buy'));
  //   dispatch(getAllLocalGiftCards());
  // }, [dispatch]);

  const [filteredCards, setFilteredCards] = useState(giftcards);
  const [searchText, setSearchText] = useState('');

  const handleSearch = text => {
    // setSearchText(text);
    // const matches = searchGiftCard(text, giftcards);
    // setFilteredCards(matches);
  };

  return (
    // <BackView title="Buy Giftcard" stack>
    <View
      flex
      paddingT-60
      backgroundColor="#F9FAFB"
      testID="buy-giftcard-screen">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        <View paddingH-24 marginB-24>
          <BackHeader stack title="Buy Giftcard" />
          <SearchInput
            placeholder="Enter a brand, name..."
            value={searchText}
            onChange={handleSearch}
          />
        </View>

        <View>
          <View row spread paddingH-24 marginB-16>
            <BoldText text="International cards" size={18} />
            <TouchableOpacity
              activeOpacity={0.8}
              row
              centerH
              centerV
              onPress={() =>
                navigation.navigate('card_category', {cards: giftcards})
              }>
              <MediumText text="View all" color={Colors.blue} />
  
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingRight: 40}}
            style={styles.scrollWrapper}>
            {giftcards.slice(0, 5).map(card => (
              <TouchableOpacity
                key={card.uuid}
                activeOpacity={0.8}
                style={[styles.scrollMini, styles.marginR12]}
                onPress={() => navigation.navigate('card_details', {card})}>
                <FastImage
                  source={{uri: card.picture_url}}
                  style={styles.imageMini}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View marginT-24>
          <View row spread paddingH-24 marginB-16>
            <BoldText text="Local cards" size={18} />
            <TouchableOpacity
              activeOpacity={0.8}
              row
              centerH
              centerV
              onPress={() =>
                navigation.navigate('local_cards', {cards: localGiftcards})
              }>
              <MediumText text="View all" color={Colors.blue} />
              {/* <ForwardArrow color="#372AA4" /> */}
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingRight: 40}}
            style={styles.scrollWrapper}>
            {localGiftcards.slice(0, 5).map(card => (
              <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.scrollLarge, styles.marginR12]}
                onPress={() =>
                  navigation.navigate('local_card_details', {card})
                }>
                <FastImage
                  source={{
                    uri: card.picture,
                  }}
                  style={styles.imageLarge}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View marginT-24>
          <View row spread paddingH-24 marginB-16>
            <BoldText text="Hot deals" size={18} />
            <TouchableOpacity activeOpacity={0.8} row centerH centerV>
              <MediumText text="View all" color={Colors.blue} />
              {/* <ForwardArrow color="#372AA4" /> */}
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingRight: 40}}
            style={styles.scrollWrapper}>
            <GCBanner
              title="Netflix"
              image="netflix"
              label="15% off"
              amount="$50.00"
              hasText
            />
            <GCBanner
              title="ShopRite"
              image="shoprite"
              label="15% off"
              amount="$50.00"
              hasText
            />
            <GCBanner
              title="Amazon"
              image="amazon"
              label="15% off"
              amount="$50.00"
              hasText
            />
            <GCBanner
              title="Walmart"
              image="walmart"
              label="15% off"
              amount="$50.00"
              hasText
            />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default BuyGiftCard;
