import React from 'react';
import {TouchableOpacity} from 'react-native';
import {MediumText, BackHeader} from '../../common';
// import {MenuChevron} from '@icons';
import {Colors, Image, View, Dash} from 'react-native-ui-lib';
import {styles} from './styles';

const Giftcard = ({navigation}) => {
  return (
    <View backgroundColor={Colors.white} flex>
      <View marginL-30 marginT-60 marginB-40>
        <BackHeader title="Gift Cards" />
      </View>
      <View marginT-16 style={styles.linkWrapper} testID="giftcard-landing">
        <TouchableOpacity
          row
          centerV
          spread
          paddingV-24
          paddingH-10
          activeOpacity={0.8}
          backgroundColor={Colors.white}
          style={styles.buttonLinkTop}
          onPress={() => navigation.navigate('buy_giftcard')}>
          <View row centerV>
            <Image
              assetName="buy_gc_icon"
              assetGroup="icons"
              marginR-20
              style={styles.icon}
            />

            <MediumText text="Buy Giftcard" />
          </View>
          <View marginT-10>{/* <MenuChevron /> */}</View>
        </TouchableOpacity>
        <Dash thickness={1} color={Colors.grey500} />
        <TouchableOpacity
          row
          centerV
          spread
          paddingV-24
          paddingH-10
          activeOpacity={0.8}
          backgroundColor={Colors.white}
          style={styles.buttonLinkBottom}
          onPress={() => navigation.navigate('sell_giftcard')}>
          <View row centerV>
            <Image
              assetName="sell_gc_icon"
              assetGroup="icons"
              marginR-20
              style={styles.icon}
            />
            <MediumText text="Sell Giftcard" />
          </View>
          <View marginT-10>
            {/* <MenuChevron color={Colors.yellowish} /> */}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Giftcard;
