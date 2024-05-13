import React, {useState} from 'react';
import { StatusBar, SafeAreaView, ImageBackground} from 'react-native';
import {View, Colors, Image} from 'react-native-ui-lib';
import accounting from 'accounting';
import {
  BackHeader,BoldText, User, ms, Button, RegularText
} from '../../common';
import { Copy, Share } from '../../../assets/icons';

import styles from './styles';


const AccountDetails = ({navigation, route}) => {
  const currency = route.params.currency;
  return (
      <SafeAreaView style={styles.account}>
            <BackHeader
              title={'Account Details'}
              
              stack
            //   flagIcon={<Image
            //     assetName={route.params?.imageName || ''}
            //     assetGroup="wallet"
            //     style={styles.icon2}
            //     marginR-10
            // />}
              regularText
            />
      
          <ImageBackground source={require('../../../assets/images/actdet.png')} style={styles.accoutDetails}>
            <View row marginT-10>
              <BoldText text={'Account Number: '} size={18} color={Colors.white} />
              <RegularText text={'0023495893'} size={16} color={Colors.white} marginT-3 marginL-5 />
            </View>

            <View row marginT-25>
              <BoldText text={'Bank Name: '} size={18} color={Colors.white} />
              <RegularText text={'Wema Bank'} size={16} color={Colors.white} marginT-3 marginL-5 />
            </View>

            <View row marginT-25>
              <BoldText text={'Curency: '} size={18} color={Colors.white} />
              <RegularText text={currency} size={16} color={Colors.white} marginT-3 marginL-5 />
            </View>
          </ImageBackground>

          <View marginT-40 row spread width={330} marginL-30 paddingL-20>
            <Button
              title="Copy"
              onPress={() =>
                console.log('transaction_status')
              }
              style={styles.shareButton}
              Icon={Copy}
            />
             <Button
              title="Share"
              onPress={() =>
                console.log('transaction_status')
              }
              style={styles.shareButton}
              Icon={Share}
            />
          </View>

      </SafeAreaView>
  )
}

export default AccountDetails;