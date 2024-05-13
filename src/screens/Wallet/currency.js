import React from 'react';
import {TouchableOpacity, FlatList, StatusBar} from 'react-native';
import {View, Colors, Image} from 'react-native-ui-lib';
import accounting from 'accounting'
import {
  BackHeader, RegularText, BoldText, TransactionItem, ms
} from '../../common';
import styles from './styles';

const Currency = ({navigation, route}) => {
    const currency = route.params?.currency || '';
    const abv = route.params?.abv || '';
    const symbol = route.params?.symbol || '';


  return (
    <View flex paddingT-60 paddingH-24 backgroundColor="rgb(245, 245, 245)">
        <StatusBar barStyle={'dark-content'} />
      <View>
        <View marginT-20 marginB-40>
          <BackHeader title={`${currency}`} />
        </View>
        
        <View marginT-10 style={styles.currencyContainer} paddingV-30 paddingH-20 row>
            <Image
                assetName={route.params?.imageName || ''}
                assetGroup="wallet"
                style={styles.icon}
                marginL-8
            />
            <View marginL-20 marginT-5>
                <RegularText text={currency} style={styles.miniTitle} />
                <RegularText text={`${symbol} ${route.params?.actualValue}`} style={styles.bigTitle} />
                <RegularText text={`~ $${route.params?.dollarValue}`} style={styles.miniTitle} />
            </View>
        </View>
        <View style={styles.buttonContainer} row>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('contact')}>
                <Image
                    assetName={'sendColored'}
                    assetGroup="wallet"
                    style={styles.icon2}
                
                />
                <RegularText text='Send' color={Colors.blue700} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.border]} onPress={() => navigation.navigate('account_details',{...route.params})}>
                <Image
                    assetName={'recieveColored'}
                    assetGroup="wallet"
                    style={styles.icon2}
                
                />
                <RegularText text='Account' color={Colors.blue700} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('swap', { currency: currency })} >
                <Image
                    assetName={'swapColored'}
                    assetGroup="wallet"
                    style={styles.icon2}
                
                />
                <RegularText text='Swap' color={Colors.blue700} />
            </TouchableOpacity>
        </View>

        {/* show transactions  */}
            <View row spread marginT-30 marginB-20>
                <BoldText text={'Transaction History'} color={Colors.grey20} size={19}/>
            </View>

        {/* display all transactions */}
        <View height={ms(460)}>
            <FlatList 
            data={[{}, {}, {}, {}, {},{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]} 
            renderItem={({item}) => (
                <TransactionItem />
            )}
            ItemSeparatorComponent={() => <View height={ms(10)} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 65}}
            />
        </View>
      </View>
    </View>
  );
};

export default Currency;
