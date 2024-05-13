import React from 'react';
import {SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import {View, Colors, Image} from 'react-native-ui-lib';
import {RegularText, CustomStatusBar, FancyButton, useMergedState, BoldText, ms} from '../../common';
import styles from './styles';
import {PasswordEyeSvg, ClosedPasswordEyeSvg} from '../../../assets/icons';


const WalletPane = ({
  currencyTitle,
  imageName,
  dollarValue,
  actualValue,
  symbol,
  abv,
  navigation,
}) => (
  <TouchableOpacity style={styles.currencyBar} onPress={()=> navigation.navigate('currency', {currency: currencyTitle,abv, symbol, dollarValue, actualValue, imageName})}>
    <View row paddingH-10>
      <Image
        assetName={imageName}
        assetGroup="wallet"
        style={styles.icon}
        marginL-8
      />
      <View marginL-20>
        <RegularText
          text={currencyTitle}
          style={styles.currencyTitle}
          size={14}
        />
       <RegularText text={`${abv}`} style={styles.subAmount2} marginT-10 />
      </View>
    </View>

    <View marginR-20  style={styles.flexend}>
      <RegularText
        text={`${symbol}${actualValue}`}
        style={styles.listAmount}
        marginT-5
        size={12}
      />
       <RegularText text={`$${dollarValue}`} style={styles.subAmount} marginT-10/>
    </View>
  </TouchableOpacity>
);


const Wallet = ({navigation}) => {
  const [state, setState] = useMergedState({hidden: true})
  const currencies = [{ imageName:'naira', title: 'Naira', dollarValue:110, value:120000, symbol:'#', abv: 'NGN'}, 
  { imageName:'dollar', title: 'Dollar', dollarValue:0, value:0, symbol:'$', abv: 'USD'}, 
  { imageName:'euro', title: 'Euro', dollarValue:0, value:0, symbol:'€', abv: 'EUR'}, 
  { imageName:'pound', title: 'British Pound', dollarValue:0, value:0, symbol:'£', abv: 'GBP'},
  { imageName:'cedis', title: 'Ghana Cedis', dollarValue:0, value:0, symbol:'GH₵', abv: 'GHC'},
  { imageName:'ksh', title: 'Kenyan Shillings', dollarValue:0, value:0, symbol:'KSH', abv: 'KES'}]
  return (
    <>
     <CustomStatusBar backgroundColor={Colors.blue700} barStyle={'light-content'} />
    <SafeAreaView flex backgroundColor={Colors.white}>
      <View flex>
        {/* card level */}
        <View style={styles.cardContainer}>
          <View style={styles.portfolio} paddingV-20 paddingH-20>

            <View centerH>
              <RegularText text={state.hidden ? '***********' : `$ 110`} style={styles.amount}/>
            </View>
            <View centerH marginT-10 row>
              <RegularText text={'Total Amount'} style={styles.assetText} />

              <View marginT-3 marginL-10>
                {!state.hidden  ?
                <TouchableOpacity activeOpacity={0.8} onPress={() => setState({hidden: !state.hidden})}>
                  <PasswordEyeSvg width={60} height={60} />
                </TouchableOpacity>
                  :
                <TouchableOpacity activeOpacity={0.8} onPress={() => setState({hidden: !state.hidden})}>
                  <ClosedPasswordEyeSvg width={60} height={60} />
                </TouchableOpacity>
                }
              </View>

            </View>

            <View row marginT-50 marginL-10>
              <RegularText text={'Reward Points:'} style={styles.assetText} />
              <RegularText text={state.hidden ? '****' : '500'} style={styles.reward} marginL-5 marginT-1 />
            </View>

            {/* <View marginT-50 row spread marginH-10>
              <FancyButton
                title={'Send'}
                assetGroup={'wallet'}
                imageName={'send'}
              />

              <FancyButton
                title={'Recieve'}
                assetGroup={'wallet'}
                imageName={'recieve'}
              />
              <FancyButton
                title={'Swap'}
                assetGroup={'wallet'}
                imageName={'swap'}
              />
            </View> */}
          </View>

          {/* wallet title level */}
          <View  style={styles.hr} paddingV-15 paddingH-20>
            <BoldText text={'Wallet'} size={18} color={'#172b4d'} />
          </View>

          {/* wallet list */}
          <View marginT-10 height={ms(400)}>
          <FlatList
            data={currencies}
            renderItem={({item, index}) => (
              <WalletPane
                imageName={item.imageName}
                currencyTitle={item.title}
                dollarValue={item.dollarValue}
                actualValue={item.value}
                symbol={item.symbol}
                abv={item.abv}
                navigation={navigation}
              />
            )}
            ItemSeparatorComponent={() => <View marginL-80 style={{ height: ms(0.25), backgroundColor: Colors.grey50, width: ms(300) }}/>}
            showsVerticalScrollIndicator={false}
          />
          </View>
        </View>
      </View>
    </SafeAreaView>
    </>
  );
};

export default Wallet;
