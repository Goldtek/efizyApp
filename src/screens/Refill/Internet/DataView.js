import React, {useEffect, useState} from 'react';
import {ScrollView, ActivityIndicator} from 'react-native';
import {View, Colors} from 'react-native-ui-lib';
import { useMutation } from 'react-query';
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

import { getPlans, buyData } from '../../../mutations/bills';
import {useSelector} from 'react-redux';
import {styles} from '../styles';

const DataView = ({navigation, route}) => {
  const { internetServiceProvider, dataPlans} = useSelector(state => state.bill);
  const beneficiaries = {};
  const [selectedNetwork, setSelectedNetwork] = useState({});
  const [selectedPlan, setSelectedPlan] = useState();
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [discount, setDiscount] = useState('');
  const [voucherAmount, setVoucherAmount] = useState(0);

  const subscribe = useMutation(buyData, {
    onSuccess: () => {
      navigation.navigate('success', {title: `Purchase of data bundle is successful`, type: 'login', buttonLabel: 'Dashboard'});
    },
  });

  const handleContinue = () => {
    const payload = {
      phoneNumber: phone,
      dataCode: selectedPlan.id,
      dataProviderName: selectedPlan.operator
    };
    subscribe.mutate(payload);
  };

  const handleSelectNetwork = (selectedNetwk) => {
    setSelectedNetwork(selectedNetwk)
    getPlans(selectedNetwk.id);
  }

  return (
    <View flex paddingT-60 paddingH-24 backgroundColor="#fff">
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollPadding}>
        <View marginT-20 marginB-40>
          <BackHeader title="Data Subscription" />
        </View>
        <NetworkSelector
          data={internetServiceProvider}
          selected={selectedNetwork}
          onSelect={handleSelectNetwork}
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
            placeholder="Select data plan"
            selected={selectedPlan}
            data={dataPlans}
            key="id"
            onSelect={setSelectedPlan}
          />
        </View>

        <View marginT-10 marginB-50>
          <Input
            testID="amount-input"
            label="Amount"
            placeholder={nairaFormat(selectedPlan?.meta.fee)}
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
          isLoading={subscribe.isLoading}
          onPress={handleContinue}
          loaderSize={'small'}
        />
      </ScrollView>
    </View>
  );
};

export default DataView;
