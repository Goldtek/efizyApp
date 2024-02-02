import React, {useRef, useState} from 'react';
import {TouchableOpacity } from 'react-native';
import {View, Colors} from 'react-native-ui-lib';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import DeviceCountry from 'react-native-device-country';
import RBSheet from 'react-native-raw-bottom-sheet';
import {
  BackHeader,
  BeneficiaryInput,
  CountrySelector,
  Button,
  Input,
  AmountSelector,
 // NetworkSelector,
} from '../../../common';
import {styles} from '../styles';
// import {getCountries} from '../../../common';
import {useSelector} from 'react-redux';

const Airtime = ({navigation}) => {
  // const {airtime} = useSelector(state => state.bill);
  const airtime = [];
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedNetwork, setSelectedNetwork] = useState();
  const [voucherAmount, setVoucherAmount] = useState(0);
  const [voucher, setVoucher] = useState('');
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const countryRef = useRef();
  const patriciaRate = Number(selectedNetwork?.rate);
  const vAmount = Number(amount) * patriciaRate;

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const resp = await apiService(getCountries, 'get');
  //       setCountries(resp.data);
  //     } catch (error) {
  //       console.log('bene', error);
  //     }
  //   })();
  // }, []);

  const onGetDiscount = discount => {
    const {discountAmount, discountVoucher} = discount;
    setVoucherAmount(discountAmount);
    setVoucher(discountVoucher);
  };

  // const locateMe = async () => {
  //   try {
  //     await DeviceCountry.getCountryCode();
  //     // console.log('locate me', code);
  //   } catch (error) {
  //     //   console.log('locate me err', error);
  //   }
  // };

  const onContinue = () => {
    navigation.navigate('airtime_details', {
      phone,
      amount: (Number(amount) - voucherAmount).toString(),
      network: selectedNetwork,
      voucher,
    });
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
        <CountrySelector
          countries={countries}
          label=""
          openRef={countryRef}
          onClose={() => countryRef.current?.close()}
          onSelect={setSelectedCountry}
          selectedCountry={selectedCountry}
        />

        <TouchableOpacity
          row
          centerV
          marginT-18
          marginB-24
          // onPress={() => locateMe()}
        >
          {/* <Icon name="my-location" size={14} color="#372AA4" />
          <RegularText
            text="Get my location"
            size={14}
            color={Colors.blue}
            marginL-9
          /> */}
        </TouchableOpacity>
        {/* <NetworkSelector
          data={airtime}
          selected={selectedNetwork}
          onSelect={setSelectedNetwork}
        /> */}
        <BeneficiaryInput
          label="Phone number"
          placeholder="Enter phone number"
          value={phone}
          keyboardType="number-pad"
          onChange={val => setPhone(val)}
          onSelect={setPhone}
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

      {/* <View marginB-16>
        <AmountSelector
          selected={amount}
          onSelect={setAmount}
          data={['500', '1000', '2000', '5000', '10000']}
        />
      </View> */}

      <View paddingH-24 marginT-70>
        <Button
          buttonStyle={styles.absoluteBtn}
          title="Continue"
          bgColor={Colors.blue700}
          color={Colors.white}
          testID="continue-btn"
          disabled={!amount || !selectedNetwork || !selectedCountry || !phone}
          onPress={onContinue}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Airtime;
