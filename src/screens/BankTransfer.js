import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import {View} from 'react-native-ui-lib';
import moment from 'moment';
import {BoldText, Button, RegularText, nairaFormat} from '../common';
import {gcSummaryStyles as styles} from './Giftcard/styles';

const BankTransfer = ({navigation, route}) => {
  const [IsCopied, setIsCopied] = useState(false);
  const {bankData, amount} = route.params;
  const validity = moment(bankData?.expires_at * 1000).format('hh:mm');

  const handleCopy = () => {
    Clipboard.setString(bankData.account_number);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2500);
  };

  return (
    <>
      <View style={styles.bankWrapper}>
        <RegularText text={`Transfer ${nairaFormat(amount)} to`} marginB-24 />
        <RegularText text={bankData.bank_name || 'Access Bank'} marginB-8 />
        <View row centerV marginB-8>
          <BoldText text={bankData.account_number || '0123456782'} />
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleCopy}
          style={styles.copyBtn}>
          <RegularText text={IsCopied ? 'Copied!' : 'Copy'} color="#372AA4" />
        </TouchableOpacity>
        <RegularText text="EfizyPay group" marginB-24 />
        <RegularText text={`Expires in ${validity}`} />
      </View>
      <Button
        title="I’ve made the transfer"
        onPress={() =>
          navigation.navigate('transaction_status', {
            status: 'processing',
            message: 'processing',
          })
        }
        style={styles.bankBtn}
      />
    </>
  );
};

export default BankTransfer;
