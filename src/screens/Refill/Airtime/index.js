import React, {useState} from 'react';
import {View, Colors} from 'react-native-ui-lib';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { useMutation } from 'react-query';
import {
  BackHeader,
  BeneficiaryInput,
  NetworkSelector,
  Button,
  Input,
  AmountSelector,
} from '../../../common';
import { buyAirtime } from '../../../mutations/bills';
import {styles} from '../styles';
import {useSelector} from 'react-redux';

const Airtime = ({navigation}) => {
  const { airtimeServiceProvider, dataPlans} = useSelector(state => state.bill);

  const [selectedNetwork, setSelectedNetwork] = useState({});
  const [voucherAmount, setVoucherAmount] = useState(0);
  const [voucher, setVoucher] = useState('');
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const patriciaRate = Number(selectedNetwork?.rate);
  const vAmount = Number(amount) * patriciaRate;


  const subscribe = useMutation(buyAirtime, {
    onSuccess: () => {
      navigation.navigate('success', {title: `Purchase of airtime is successful`, type: 'login', buttonLabel: 'Dashboard'});
    },
  });

  const onContinue = () => {
  //   {
  //     "phoneNumber": phone,
  //     "airtimeProviderId": "op_tHvaAHp85mTsRtEU2yqxLM",
  //     "amount": "100"
  // }
  };


  return (
    <KeyboardAwareScrollView
      testID="scrollView"
      showsVerticalScrollIndicator={false}
      style={styles.keyboardView}
      contentContainerStyle={styles.keyboardViewPadded}>
      <View paddingH-24>
        <View marginB-40 marginT-10>
          <BackHeader title="Buy Airtime" />
        </View>
       
          <NetworkSelector
            data={airtimeServiceProvider}
            selected={selectedNetwork}
            onSelect={setSelectedNetwork}
          />

        <BeneficiaryInput
          label="Phone number"
          placeholder="Enter phone number"
          value={phone}
          keyboardType="number-pad"
          onChange={val => setPhone(val)}
          onSelect={setPhone}
        />
      </View>

      <View marginB-30 marginT-20>
        <AmountSelector
          selected={amount}
          onSelect={setAmount}
          data={['500', '1000', '2000', '3000', '5000', '10000']}
        />
      </View>

      <View paddingH-24>
        <Input
          testID="amount-input"
          label="Amount"
          keyboardType="number-pad"
          placeholder="Enter amount"
          value={amount}
          onChange={setAmount}
        />
      </View>


      <View paddingH-24 marginT-70>
        <Button
          buttonStyle={styles.absoluteBtn}
          title="Continue"
          bgColor={Colors.blue700}
          color={Colors.white}
          testID="continue-btn"
          disabled={!amount || !selectedNetwork || !phone}
          onPress={onContinue}
          loaderSize={'small'}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Airtime;
