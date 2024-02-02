import React from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import {View, Colors, Image} from 'react-native-ui-lib';
import {RegularText, Header, FancyButton} from '../../common';
import styles from './styles';
import {PasswordEyeSvg} from '../../../assets/icons';

const WalletPane = ({
  currencyTitle,
  imageName,
  dollarValue,
  actualValue,
  symbol,
}) => (
  <TouchableOpacity style={styles.currencyBar}>
    <View row>
      <Image
        assetName={imageName}
        assetGroup="wallet"
        style={styles.icon}
        marginL-8
      />
      <RegularText
        text={currencyTitle}
        style={styles.currencyTitle}
        marginL-10
        marginT-2
      />
    </View>

    <View marginR-8 style={styles.flexend}>
      <RegularText text={`$${dollarValue}`} style={styles.listAmount} />
      <RegularText
        text={`${symbol}${actualValue}`}
        style={styles.subAmount}
        marginT-5
      />
    </View>
  </TouchableOpacity>
);

const Wallet = ({navigation}) => {
  return (
    <SafeAreaView flex backgroundColor={Colors.white}>
      <ScrollView flex>
        <View paddingH-25 style={styles.cardContainer}>
          <View style={styles.portfolio} paddingV-20 paddingH-20>
            <View row>
              <RegularText
                text={'Total Asset ($)'}
                style={styles.assetText}
                marginR-10
              />
              <View marginT-3>
                <PasswordEyeSvg height={20} width={20} />
              </View>
            </View>
            <RegularText text={2000.0} style={styles.amount} marginT-10 />
            <View row marginT-20>
              <RegularText text={'Rewards:'} style={styles.assetText} />
              <RegularText text={'+2000'} style={styles.reward} marginL-5 />
            </View>
          </View>
          <View marginT-20 row spread>
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
          </View>
          <View marginT-20>
            <WalletPane
              imageName={'naira'}
              currencyTitle={'Naira'}
              dollarValue={110}
              actualValue={120000}
              symbol={'#'}
            />
            <WalletPane
              imageName={'dollar'}
              currencyTitle={'Dollars'}
              dollarValue={0}
              actualValue={0}
              symbol={'$'}
            />
            <WalletPane
              imageName={'euro'}
              currencyTitle={'Euro'}
              dollarValue={0}
              actualValue={0}
              symbol={'#'}
            />

            <WalletPane
              imageName={'pound'}
              currencyTitle={'Pounds'}
              dollarValue={0}
              actualValue={0}
              symbol={'#'}
            />

            <WalletPane
              imageName={'cedis'}
              currencyTitle={'GHC'}
              dollarValue={0}
              actualValue={0}
              symbol={'#'}
            />

            <WalletPane
              imageName={'ksh'}
              currencyTitle={'KSH'}
              dollarValue={0}
              actualValue={0}
              symbol={'#'}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Wallet;
