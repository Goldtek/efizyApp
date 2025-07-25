import React, {useState} from 'react';
import {View, Colors, Text} from 'react-native-ui-lib';
import {TouchableOpacity, SafeAreaView} from 'react-native';
import { useMutation } from 'react-query';

import {Button, Input} from '../../../common';
import {BackArrow} from '../../../../assets/icons';
import { sendPasswordReqOTP } from '../../../mutations/user';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [isSent, setSent] = useState(false);

  const handResetSuccess = () => {
    setSent(true);
    navigation.navigate('verify_email', {email})
  };

  const forgotMutation = useMutation(sendPasswordReqOTP, {
    onSuccess: handResetSuccess,
  });
 

  const handleReset = () => {
   forgotMutation.mutate(email);
  };

  return (
    <SafeAreaView flex  backgroundColor={Colors.white}>
    <View paddingT-30 paddingH-24 backgroundColor={Colors.white}>
      <View row marginB-30>
      <View marginT-8 marginL-1 marginR-10>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
          >
          <BackArrow />
        </TouchableOpacity>
      </View>
      <Text h1  blue700 bold>
        Forgot Password
      </Text>
      </View>
     
      <Text body2 marginB-24 testID="forgot-pass">
       To reset your password, enter your e-mail address below.
      </Text>
      <View marginB-80 testID="email">
        <Input
          label="Email Address"
          placeholder="Enter your email address"
          value={email}
          keyboardType="email-address"
          onChange={setEmail}
        />
      </View>

      <Button
        testID="forgot-btn"
        title="Reset Password"
        disabled={!email || isSent}
        onPress={handleReset}
      />
    </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
