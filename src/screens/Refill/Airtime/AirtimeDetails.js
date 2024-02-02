import React from 'react';
import {
  BackView,
  BoldText,
  PaymentMethod,
  RegularText,
  nairaFormat,
} from '../../../common';
import {Colors, View, Image} from 'react-native-ui-lib';
import {airtimeDetailsStyles as styles} from '../styles';

const AirtimeDetails = ({route}) => {
  const {network, amount, phone, voucher, title} = route.params;

  const billData = {
    user_number: phone,
    bill_id: network?.id,
    amount: amount,
    // beneficiary_name: state.addAsBeneficiary ? state.beneficiary_name : '',
    service_type: 'airtime-bill-payment',
    provider: network?.group_name,
    table: 'refill',
    voucher_code: voucher,
    serviceType: 'bills-payment',
    transaction_info: {
      user_number: phone,
      bill_id: network?.id,
      amount: amount,
    },
  };

  return (
    <BackView title={title || 'Buy Airtime'}>
      <View testID="buy-airtime">
        <View style={styles.infoBox}>
          <Image
            assetName={network?.group_name.toLowerCase()}
            assetGroup="networks"
            resizeMode="cover"
            style={styles.infoIcon}
          />
          <View style={styles.texts} marginB-4 marginT-16>
            <RegularText text="Phone" size={14} color={Colors.black800} />
            <RegularText text="Amount" size={14} color={Colors.black800} />
          </View>
          <View style={styles.texts}>
            <RegularText text={phone} size={14} color={Colors.black800} />
            <BoldText
              text={nairaFormat(amount)}
              size={14}
              color={Colors.black800}
            />
          </View>
        </View>
        <PaymentMethod billData={billData} />
      </View>
    </BackView>
  );
};

export default AirtimeDetails;
