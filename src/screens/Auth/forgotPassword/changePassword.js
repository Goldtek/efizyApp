import React, {useState} from 'react';
import {View, Colors, Text} from 'react-native-ui-lib';
import {TouchableOpacity, SafeAreaView} from 'react-native';
import { useMutation } from 'react-query';

import { verifyOtpRequest } from '../../../mutations/user';
import {Button, Input, useMergedState} from '../../../common';
import {BackArrow} from '../../../../assets/icons';
import {toast} from '../../../lib/util';

const ChangePassword = ({navigation, route}) => {
  const {email, token} = route.params;
  const [state, setState] = useMergedState({
      password: '',
      password2: '',
      processing: false
  });


  const handleSuccessReset = () => {
    navigation.navigate('success', {
      message: 'Congratulations, you have successfully changed your password',
      buttonLabel: 'Back to Log In',
      type: 'auth',
    });
  };

  const verifyMutation = useMutation(verifyOtpRequest, {
    onSuccess: handleSuccessReset,
  });

  const handleReset = () => {
    if(state.password !== state.password2) return  toast('Confirm password does not match', '', 'error');
    const data = {
      email: email,
      token: token,
      password: state.password,
    }
    verifyMutation.mutate(data);
  }

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
        Choose your new password
      </Text>
      <View marginB-20 testID="email">
        <Input
          label="New Password"
          placeholder="Enter your new password"
          value={state.password}
          
          onChange={(text) => setState({password: text})}
        />
      </View>

      <View marginB-50 testID="email">
        <Input
          label="Confirm Password"
          placeholder="Confirm your password"
          value={state.password2}
          onChange={(text) => setState({password2: text})}
        />
      </View>


      <Button
        testID="forgot-btn"
        title="Change Password"
        disabled={!email}
        onPress={handleReset}
      />
    </View>
    </SafeAreaView>
  );
};

export default ChangePassword;
