import React, {useEffect, useState} from 'react';
import {Colors, Dash, View} from 'react-native-ui-lib';
import {
  BoldText,
  Loader,
  MediumText,
  PaymentMethod,
  nairaFormat,
} from '../../common';
import {gcSummaryStyles as styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {apiService, postBuyGiftcard, postBuyLocalcard} from '@utils';

const GCSummary = ({navigation, route}) => {
  const {amount, service_type, data} = route.params;
  console.log('data!!!!', route.params);
  const {user} = useSelector(state => state.user);
  const [processing, setProcessing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (processing) {
      setIsLoading(true);
    }
  }, [processing]);

  const getStatus = msg => {
    if (msg.includes('failed')) {
      return 'failed';
    } else if (msg.includes('being processed')) {
      return 'processing';
    } else {
      return 'success';
    }
  };

  const getTitle = msg => {
    if (msg.includes('successful')) {
      return 'Transaction Successful';
    } else if (msg.includes('being processed')) {
      return 'Transaction processing';
    } else {
      return 'Transaction failed!';
    }
  };

  const handlePayment = async userPin => {
    setProcessing(true);
    const isLocal = service_type.includes('local');
    try {
      let payload = {};
      if (isLocal) {
        payload = {
          user_pin: userPin,
          card: data.card.id,
          recipient_email: user?.email,
          recipient_phone: user?.phone,
          recipient_first_name: user?.firstname,
          recipient_last_name: user?.lastname,
          amount: amount,
          quantity: data.quantity,
          service_type: 'local-giftcard-buy',
          voucher_code: data.voucher,
          name: data.card.name,
          selectedCountry: 'NGN',
          card_value: amount,
          transaction_value: Number(amount) * Number(data.quantity),
        };
      } else {
        payload = {
          amount,
          service_type: 'giftcard-buy',
          user_pin: userPin,
          card_currency_uuid: data.currency.uuid,
          variations: [{uuid: data.variation.uuid, quantity: data.quantity}],
          name: data.card.name.replace(/Gift Cards/gi, ''),
          selectedCountry: data.currency.currency,
          card_value: data.variation.face_value_range_to, //,
          hasDelay: data.card.has_processing_delay,
          card_type: data.variation.card_acceptance_form,
          voucher_code: data.voucher,
        };
      }
      console.log('pay payload', payload);
      const {
        status,
        message,
        data: resData,
      } = await apiService(
        isLocal ? postBuyLocalcard : postBuyGiftcard,
        'post',
        payload,
      );
      if (status) {
        navigation.navigate('transaction_status', {
          title: getTitle(message),
          status: getStatus(message),
          message: message.includes('being processed')
            ? message
            : `Congratulations, you bought a ${
                data.card.name
              } giftcard worth ${nairaFormat(resData.total_amount)}`,
        });
      }
    } catch (error) {
      console.log('payBill err', error);
    } finally {
      setIsLoading(false);
      setProcessing(false);
    }
  };

  return (
    <>
      <Loader show={isLoading} />
      <View
        backgroundColor={Colors.white}
        paddingT-25
        paddingB-22
        style={styles.valueView}>
        <MediumText text="Transaction value" marginB-18 color={Colors.blue} />
        <BoldText text={nairaFormat(amount)} color={Colors.blue} size={30} />
      </View>

      <View
        backgroundColor={Colors.white}
        paddingT-81
        paddingH-20
        paddingB-8
        marginB-40
        style={styles.summaryView}>
        <View row spread paddingV-16>
          <MediumText text="Giftcard" color={Colors.grey400} />
          <MediumText text={data.card.name} color={Colors.grey900} />
        </View>
        <Dash color={Colors.grey700} length={306} thickness={1} gap={10} />
        <View row spread paddingV-16>
          <MediumText text="Currency" color={Colors.grey400} />
          <MediumText
            text={data.currency?.currency || 'Naira'}
            color={Colors.grey900}
          />
        </View>
        <Dash color={Colors.grey700} length={306} thickness={1} gap={10} />
        <View row spread paddingV-16>
          <MediumText text="Quantity" color={Colors.grey400} />
          <MediumText text={data.quantity} color={Colors.grey900} />
        </View>
        <Dash color={Colors.grey700} length={306} thickness={1} gap={10} />
        <View row spread paddingV-16>
          <MediumText text="Delivered to" color={Colors.grey400} />
          <MediumText text={user?.email} color={Colors.grey900} />
        </View>
      </View>

      {/* payment options */}
      <PaymentMethod
        billData={{amount, service_type}}
        paymentAction={handlePayment}
      />
    </>
  );
};

export default GCSummary;
