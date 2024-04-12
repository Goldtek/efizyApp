import React, {useRef, useState} from 'react';
import {TouchableOpacity, FlatList, StatusBar, SafeAreaView} from 'react-native';
import {View, Colors, Image} from 'react-native-ui-lib';
import accounting from 'accounting';
import {
  BackHeader,BoldText, User, ms, BottomSheet, RegularText
} from '../../common';
import { BackArrow } from '../../../assets/icons';

import styles from './styles';


const AccountDetails = ({navigation, route}) => {
  const currency = route.params.currency;
  return (
      <SafeAreaView style={styles.account}>
            <BackHeader
              title={currency}
              stack
              flagIcon={<Image
                assetName={route.params?.imageName || ''}
                assetGroup="wallet"
                style={styles.icon2}
                marginR-10
            />}
              regularText
              closeIcon
            />
            <RegularText text={'Available Balance'} size={20} marginL-25 color={Colors.grey40} />
            <BoldText text={`${route.params.symbol} 0.00`} size={22} marginL-25 color={Colors.black} marginT-10 />
      </SafeAreaView>
  )
}

export default AccountDetails;