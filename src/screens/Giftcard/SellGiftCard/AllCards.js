import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import {View, TouchableOpacity} from 'react-native-ui-lib';
import FastImage from 'react-native-fast-image';
import {FlashList} from '@shopify/flash-list';
import {
  BackHeader,
  MediumText,
  RegularText,
  SearchInput,
} from '../../../common';
import {useSelector} from 'react-redux';
import {sellStyles as styles} from '../styles';
import {searchGiftCard} from '../utils';

const AllSellCards = ({navigation}) => {
  // const {giftcards} = useSelector(state => state.giftcards);
  const giftcards = [
    {
      name: 'Amazon',
      picture_url:
        'https://us.123rf.com/450wm/jeromecronenberger/jeromecronenberger1904/jeromecronenberger190400035/133412660-gift-card-gift-voucher-100-dollars.jpg?ver=6',
    },
    {
      name: 'Walmart',
      picture_url:
        'https://cdn.fiestashows.com/wp-content/uploads/2021/11/FS-Gift-Card.png',
    },
    {
      name: 'Target',
      picture_url:
        'https://shop.framedbysarah.com/cdn/shop/products/framed-giftcard_950x550.png?v=1607652637',
    },
  ];
  const [filteredCards, setFilteredCards] = useState(giftcards);
  const [searchText, setSearchText] = useState('');

  const handleSearch = text => {
    setSearchText(text);
    const matches = searchGiftCard(text, giftcards);
    setFilteredCards(matches);
  };

  return (
    <View
      flex
      paddingT-60
      backgroundColor="#F9FAFB"
      testID="sell-giftcard-screen">
      {/* <View paddingH-24 paddingB-18>
        <BackHeader title="Sell giftcards" />
      </View> */}
      <View style={styles.content}>
        <View marginB-14 paddingL-24>
          <MediumText text="All Cards" size={14} />
        </View>
        <View paddingH-24 marginB-12>
          <SearchInput
            value={searchText}
            onChange={handleSearch}
            placeholder="Search for your favorite card"
            placeholderColor="#adb5bd"
          />
        </View>
        <View row marginB-24 paddingH-24>
          {giftcards.slice(0, 3).map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              style={styles.quickLink}
              onPress={() => navigation.navigate('sell_details', {card: item})}>
              <RegularText text={item.name} size={11} color="#2f2f2f" />
            </TouchableOpacity>
          ))}
        </View>
        <View height={Dimensions.get('screen').height} paddingH-24 paddingB-300>
          <FlashList
            data={filteredCards}
            estimatedItemSize={145}
            estimatedListSize={{width: 152, height: 114}}
            numColumns={2}
            renderItem={({item}) => (
              <TouchableOpacity
                key={item.uuid}
                activeOpacity={0.8}
                marginR-12
                style={styles.allcard}
                onPress={() =>
                  navigation.navigate('sell_details', {card: item})
                }>
                <FastImage
                  source={{uri: item.picture_url}}
                  style={styles.imageMini}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default AllSellCards;
