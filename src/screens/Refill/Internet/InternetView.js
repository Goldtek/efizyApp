import React, {useState} from 'react';
import {View, Colors} from 'react-native-ui-lib';
import {ScrollView} from 'react-native';
import {
  Input,
  Select,
  Button,
  BeneficiaryInput,
  BackHeader,
} from '../../../common';
import {styles} from '../styles';

const InternetView = () => {
  const [selectedProvider] = useState();
  const [customerId, setCustomerId] = useState('');
  const [discount, setDiscount] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <View flex paddingT-60 paddingH-24 backgroundColor="#fff">
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollPadding}>
        <View marginB-40>
          <BackHeader title="Internet Subscription" />
        </View>
        <Select label="Service provider" selectedValue={selectedProvider} />
        <View marginB-16>
          <BeneficiaryInput
            label="Phone number"
            placeholder="Enter Phone number"
            value={customerId}
            onChange={setCustomerId}
            onSelect={setCustomerId}
          />
        </View>
        <Select label="Plan" placeholder="Select plan" />
        <View marginB-55>
          <Input
            label="Amount"
            placeholder="₦5,500.00"
            value={amount}
            onChange={setAmount}
            disabled
          />
        </View>

        <Button
          title="Continue"
          bgColor={Colors.blue700}
          color={Colors.white}
          onPress={() => {}}
        />
      </ScrollView>
    </View>
  );
};

export default InternetView;
