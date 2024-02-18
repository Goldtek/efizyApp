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
// import {getAllMobileData} from '@store';
import {styles} from '../styles';
const data = [];

const DataView = ({onContinue}) => {
   const {airtime, data, beneficiaries} = useSelector(state => state.bill);
  const [dataPlans, setDataPlans] = useState();
  const [selectedPlan, setSelectedPlan] = useState();
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [discount, setDiscount] = useState('');
  const [voucherAmount, setVoucherAmount] = useState(0);
  const [serviceId, setServiceId] = useState();


  const handleContinue = () => {
    const payload = {
      phone,
      amount: (Number(selectedPlan?.amount) - voucherAmount).toString(),
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
          <BackHeader title="Electricity" />
        </View>

        <View marginB-16 marginT-10>
          <Input
            testID="service-id"
            label="Meter Number"
            placeholder={'Enter Meter Number'}
            value={amount}
            onChange={setServiceId}
          />
        </View>

        <SelectData
          label="Service Provider"
          placeholder="Select plan"
          selected={selectedPlan}
          data={dataPlans}
          key="short_name"
          onSelect={setSelectedPlan}
        />

        <View marginB-16 marginT-10>
          <SelectData
            label="Meter Type"
            placeholder="Select"
            selected={selectedPlan}
            data={dataPlans}
            key="short_name"
            onSelect={setSelectedPlan}
          />
        </View>

        <View marginB-70 marginT-10>
          <Input
            testID="amount-input"
            label="Amount"
            placeholder={nairaFormat(selectedPlan?.amount)}
            value={amount}
            onChange={setAmount}
          />
        </View>
        <Button
          title="Continue"
          disabled={!selectedPlan || !phone}
          bgColor={Colors.blue700}
          color={Colors.white}
          onPress={handleContinue}
        />
      </ScrollView>
    </View>
  );
};

export default DataView;
