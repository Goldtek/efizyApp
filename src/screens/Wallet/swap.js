import React, {useState} from 'react';
import { StatusBar, SafeAreaView, ImageBackground} from 'react-native';
import {View, Colors, Image} from 'react-native-ui-lib';
import accounting from 'accounting';
import {
  BackHeader,BoldText, User, ms, Button, RegularText, Select
} from '../../common';


import styles from './styles';


const Swap = ({navigation, route}) => {
  const currency = route.params.currency;
  return (
      <SafeAreaView style={styles.account}>
         <View flex paddingT-20 paddingH-24 backgroundColor="rgb(245, 245, 245)">
            <BackHeader
              title={'Swap Currency'}
              regularText
            />

          <View marginT-30 style={styles.swapContainer} paddingV-30 paddingH-20 row>
              <View>
                <Select label="Service provider" selectedValue={[{id: 1, name: 'chizuru'}, {id: 2, name: 'Mattew'}]} />
              </View>
          </View>

          <View marginT-180 centerH>
            <Button
              title="Confirm"
              onPress={() =>
                console.log('transaction_status')
              }
              style={styles.confirmButton}
              labelStyle={styles.labelText}
            />
          </View>
        </View>
      </SafeAreaView>
  )
}

export default Swap;