import React, {useRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors, Image, TouchableOpacity, View} from 'react-native-ui-lib';
import {ForwardArrow} from '../../assets/icons';
import {WalletPaymentModal} from './Modal';
import {RegularText} from './Text';
import {TransactionPIN} from './TransactionPIN';
import {ms} from './utils';

export const PaymentMethod = () => {
  const [ShowWallet, setShowWallet] = useState(false);
  const transactionRef = useRef(null);
  const navigation = useNavigation();

  return (
    <>
      <WalletPaymentModal
        onPress={() => {}}
        show={ShowWallet}
        onCancel={() => setShowWallet(false)}
      />

      <View>
        <RegularText text="Select a payment method" marginB-16 />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.listBtn}
          onPress={() => setShowWallet(true)}>
          <TransactionPIN
            openRef={transactionRef}
            onComplete={() => {}}
            // onComplete={handlePINSubmit}
            status="default"
          />
          <View row centerV>
            <Image
              assetGroup="icons"
              assetName="payment_wallet"
              style={styles.iconImage}
            />
            <RegularText text="Wallet" />
          </View>
          <ForwardArrow color={Colors.blue} />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.listBtn}
          onPress={() => navigation.navigate('bank_transfer')}>
          <View row centerV>
            <Image
              assetGroup="icons"
              assetName="payment_bank"
              style={styles.iconImage}
            />
            <RegularText text="Bank Transfer" />
          </View>
          <ForwardArrow color={Colors.blue} />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8} style={styles.listBtn}>
          <View row centerV>
            <Image
              assetGroup="icons"
              assetName="payment_card"
              style={styles.iconImage}
            />
            <RegularText text="Debit Card" />
          </View>
          <ForwardArrow color={Colors.blue} />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  iconImage: {
    width: ms(40),
    height: ms(40),
    marginRight: ms(16),
  },
  listBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: ms(16),
    backgroundColor: Colors.white,
    borderRadius: ms(8),
    marginBottom: ms(16),
  },
  bank: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bankWrapper: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    paddingVertical: ms(24),
    width: '100%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  copyBtn: {
    position: 'absolute',
    right: ms(30),
    top: ms(98),
  },
  bankBtn: {
    width: '100%',
  },
});
