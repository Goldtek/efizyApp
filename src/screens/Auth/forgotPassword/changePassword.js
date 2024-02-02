import React, {useState} from 'react';
import {View, Colors, Text} from 'react-native-ui-lib';
import {TouchableOpacity, SafeAreaView} from 'react-native';
import {Button, Input, useMergedState} from '../../../common';
import {BackArrow} from '../../../../assets/icons';

const ChangePassword = ({navigation}) => {


  const handleReset = () => {
    navigation.navigate('success', {
      message: 'Congratulations, you have successfully changed your password',
      buttonLabel: 'Back to Log In',
    });
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
        Choose your new password
      </Text>
      <View marginB-80 testID="email">
        <Input
          label="New Password"
          placeholder="Enter your new password"
          value={password}
          
          onChange={setPassword}
        />
      </View>

      <View marginB-80 testID="email">
        <Input
          label="Confirm Password"
          placeholder="Enter your confirmation password"
          value={password2}
          onChange={setPassword2}
        />
      </View>


      <Button
        testID="forgot-btn"
        title="Reset Password"
        disabled={!email}
        onPress={handleReset}
      />
    </View>
    </SafeAreaView>
  );
};

export default ChangePassword;
