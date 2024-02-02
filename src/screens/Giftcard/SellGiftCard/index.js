import React, {useEffect, useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import {View, Colors} from 'react-native-ui-lib';
import {
  BackHeader,
  BoldText,
  Button,
  MediumText,
  RegularText,
  SearchInput,
} from '../../../common';
import {useDispatch, useSelector} from 'react-redux';
import {sellStyles as styles} from '../styles';
import FastImage from 'react-native-fast-image';
// import {getAllGiftCards, useAppDispatch, useAppSelector} from '@store';

const SellGiftCard = ({navigation}) => {
 // const {giftcards} = useSelector(state => state.giftcards);
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
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

  // useEffect(() => {
  //   dispatch(getAllGiftCards('sell'));
  // }, [dispatch]);

  const handleSearch = text => {
    setSearchText(text);
    // const matches = searchGiftCard(text, []);
    // setFilteredCards(matches);
  };

  return (
    <View
      flex
      paddingT-60
      backgroundColor="#F9FAFB"
      testID="sell-giftcard-screen">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        <View paddingH-24>
          <BackHeader stack title="Sell Giftcard" />
        </View>
        <View style={styles.content}>
          <View row spread marginB-6 paddingH-24>
            <BoldText text="All Cards" size={16} />
            <TouchableOpacity
              activeOpacity={0.2}
              onPress={() => navigation.navigate('sell_allcard')}>
              <MediumText text="View all cards" size={14} color="#372aa4" />
            </TouchableOpacity>
          </View>
          <View paddingH-24>
            <SearchInput
              value={searchText}
              onChange={handleSearch}
              placeholder="Search for your favorite card"
            />
          </View>
          <View row marginT-23 marginB-24 paddingH-24>
            {giftcards.slice(0, 3).map((item, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                style={styles.quickLink}
                onPress={() =>
                  navigation.navigate('sell_details', {card: item})
                }>
                <RegularText text={item.name} size={11} color="#2f2f2f" />
              </TouchableOpacity>
            ))}
          </View>
          <View>
            <View row spread marginB-12 paddingH-24>
              <BoldText text="Fast trading cards" size={18} />
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollContent}
              style={styles.scrollWrapper}>
              {giftcards.slice(0, 5).map(card => (
                <TouchableOpacity
                  key={card.uuid}
                  activeOpacity={0.8}
                  style={[styles.scrollMini, styles.marginR12]}
                  onPress={() => navigation.navigate('sell_details', {card})}>
                  <FastImage
                    source={{uri: card.picture_url}}
                    style={styles.imageMini}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>

        <View>
          <View row spread marginB-12 paddingH-24>
            <BoldText text="Best selling cards" size={18} />
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollWrapper}
            contentContainerStyle={styles.scrollContent}>
            <View style={styles.banner}>
              {/* <FastImage
                source={require('@images/demo/amazon.png')}
                resizeMode="cover"
                style={styles.bannerImage}
              /> */}
              <View paddingL-6>
                <MediumText text="Amazon" size={10} color="#adb5bd" marginB-8 />
                <View row spread marginB-16>
                  <BoldText text="$1000" size={20} color={Colors.blue700} />
                  <View style={styles.bannerTag}>
                    <BoldText text="@250/$" size={10} color="#28afb0" />
                  </View>
                </View>
                <Button
                  title="Sell now"
                  style={styles.bannerBtn}
                  onPress={() =>
                    navigation.navigate('sell_details', {card: giftcards[0]})
                  }
                />
              </View>
            </View>
            {/*  */}
            <View style={styles.banner}>
              {/* <FastImage
                source={require('@images/demo/walmart.png')}
                resizeMode="cover"
                style={styles.bannerImage}
              /> */}
              <View paddingL-6>
                <MediumText
                  text="Walmart"
                  size={10}
                  color="#adb5bd"
                  marginB-8
                />
                <View row spread marginB-16>
                  <BoldText text="$100" size={20} color={Colors.blue700} />
                  <View style={styles.bannerTag}>
                    <BoldText text="@250/$" size={10} color="#28afb0" />
                  </View>
                </View>
                <Button
                  title="Sell now"
                  style={styles.bannerBtn}
                  onPress={() => {}}
                />
              </View>
            </View>
            <View style={styles.banner}>
              {/* <FastImage
                source={require('@images/demo/amazon.png')}
                resizeMode="cover"
                style={styles.bannerImage}
              /> */}
              <View paddingL-6>
                <MediumText text="Amazon" size={10} color="#adb5bd" marginB-8 />
                <View row spread marginB-16>
                  <BoldText text="$1000" size={20} color={Colors.blue700} />
                  <View style={styles.bannerTag}>
                    <BoldText text="@250/$" size={10} color="#28afb0" />
                  </View>
                </View>
                <Button
                  title="Sell now"
                  style={styles.bannerBtn}
                  onPress={() => {}}
                />
              </View>
            </View>
            {/*  */}
            <View style={styles.banner}>
              {/* <FastImage
                source={require('@images/demo/walmart.png')}
                resizeMode="cover"
                style={styles.bannerImage}
              /> */}
              <View paddingL-6>
                <MediumText
                  text="Walmart"
                  size={10}
                  color="#adb5bd"
                  marginB-8
                />
                <View row spread marginB-16>
                  <BoldText text="$100" size={20} color={Colors.blue700} />
                  <View style={styles.bannerTag}>
                    <BoldText text="@250/$" size={10} color="#28afb0" />
                  </View>
                </View>
                <Button
                  title="Sell now"
                  style={styles.bannerBtn}
                  onPress={() => {}}
                />
              </View>
            </View>
            {/*  */}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default SellGiftCard;
