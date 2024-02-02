import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {View, Colors} from 'react-native-ui-lib';
import {
  BackHeader,
  Input,
  Button,
  BeneficiaryInput,
  NetworkSelector,
  SelectData,
  nairaFormat,
  getBundleBasedOnProvider,
} from '../../../common';
import {useSelector} from 'react-redux';
import {styles} from '../styles';
const data = [];

const DataView = ({onContinue}) => {
  // const {airtime, data, beneficiaries} = useSelector(state => state.bill);
  const airtime = {};
  const beneficiaries = {};
  const [selectedNetwork, setSelectedNetwork] = useState();
  const [dataPlans, setDataPlans] = useState();
  const [selectedPlan, setSelectedPlan] = useState();
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [discount, setDiscount] = useState('');
  const [voucherAmount, setVoucherAmount] = useState(0);

  // useEffect(() => {
  //   dispatch(getAllMobileData());
  //   getBeneficiaries('mobile-data-bill-payment');
  // }, [dispatch]);

  useEffect(() => {
    if (selectedNetwork) {
      const filteredData = getBundleBasedOnProvider(data, selectedNetwork);
      setDataPlans(filteredData);
    }
    return () => {
      setDataPlans([]);
    };
  }, [selectedNetwork, data]);

  const handleContinue = () => {
    const payload = {
      phone,
      amount: (Number(selectedPlan?.amount) - voucherAmount).toString(),
      network: selectedNetwork,
      voucher: discount,
      title: 'Internet Subscription',
    };
    onContinue(payload);
  };

  return (
    <View flex paddingT-60 paddingH-24 backgroundColor="#fff">
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollPadding}>
        <View marginT-20 marginB-40>
          <BackHeader title="Data Subscription" />
        </View>
        <NetworkSelector
          data={airtime}
          selected={selectedNetwork}
          onSelect={setSelectedNetwork}
        />
        <BeneficiaryInput
          label="Phone number"
          placeholder="Enter phone number"
          value={phone}
          beneficiaries={beneficiaries.data}
          onChange={setPhone}
          onSelect={setPhone}
        />
        <View marginT-10>
          <SelectData
            label="Plan Provider"
            placeholder="Select plan"
            selected={selectedPlan}
            data={dataPlans}
            key="short_name"
            onSelect={setSelectedPlan}
          />
        </View>

        <View marginT-10 marginB-50>
          <Input
            testID="amount-input"
            label="Amount"
            placeholder={nairaFormat(selectedPlan?.amount)}
            value={amount}
            onChange={setAmount}
            disabled
          />
        </View>

        <Button
          title="Continue"
          disabled={!selectedNetwork || !selectedPlan || !phone}
          bgColor={Colors.blue700}
          color={Colors.white}
          onPress={handleContinue}
        />
      </ScrollView>
    </View>
  );
};

export default DataView;
