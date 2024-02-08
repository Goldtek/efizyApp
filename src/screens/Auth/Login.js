import React, {useEffect} from 'react';
import {View, Colors, Text, Image} from 'react-native-ui-lib';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import {StatusBar} from 'react-native';

import {Button, RegularText, Input, TitleInput} from '../../common';
import { useMergedState } from '../../lib/util';
import { loginUser } from '../../mutations/user';
import {styles} from './styles';
import { handleLoginSuccess } from '../../actions/user';
import { storeUserAuthErrorMessages } from '../../actions/user';


const Login = ({navigation}) => {
  const dispatch = useDispatch();
  let [securePassword, setSecurePassword] = React.useState(true);
  let [passwordIcon, setPasswordIcon] = React.useState('eye-off-outline');

  const [state, setState] = useMergedState({
    username: '',
    password: '',
    newDeviceToken: null
  });

  const errorMessage = useSelector(
    store => store.user?.errorMessage,
  );
  

  const loginMutation = useMutation(loginUser, {
    onSuccess: handleLoginSuccess
});

  const handleLogin = () => {
    loginMutation.mutate(state);
  };

  const togglePasswordView = () => {
    setSecurePassword(!securePassword);
    setPasswordIcon(securePassword ? 'eye-outline' : 'eye-off-outline');
  };



  useEffect(() => {
    let timeoutId;
    if (errorMessage) {
      timeoutId = setTimeout(() => {
        dispatch(storeUserAuthErrorMessages(null));
      }, 5000);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [errorMessage]);

  return (
    <View
      flex
      paddingH-24
      centerV
      backgroundColor={Colors.white}
      testID="login-screen">
         <StatusBar barStyle={'dark-content'} />
      <View centerH>
          <Image
            assetName='full_logo'
            assetGroup="logo"
            style={styles.logo}
          />

        <RegularText text="Sign in to continue to Efizypay" color={Colors.grey10}  marginB-30 />
       
      </View>
      <View marginB-14 testID="email">
           <TitleInput
              inputTitle={'Email Address'}
              defaultValue={state.email}
              onChangeText={(t) => setState({email: t})}
              showLeftIcon={true}
              leftIconName={'email'}
              placeholder="Enter your Email"
              keyboardType="email-address"
            />
      </View>
      <View testID="password" marginB-20>
        <TitleInput
          inputTitle={'Password'}
          defaultValue={state.password}
          secureTextEntry={securePassword}
          onChangeText={value => setState({ password: value })}
          showIcon={true}
          onIconPress={() => togglePasswordView()}
          iconName={passwordIcon}
          showLeftIcon={true}
          leftIconName={'lock'}
        />
      </View>

      <Button
        title="Forgot Password?"
        textOnly
        buttonStyle={styles.forgotPass}
        labelStyle={styles.forgotPassLabel}
        onPress={() => navigation.navigate('forgot_password')}
      />
       {errorMessage && (
          <View marginB-20 style={styles.error} padding-8>
            <Text h5 red  marginL-12 animated>
              {errorMessage}
            </Text>
          </View>
          )}
      <Button
        testID="loginBtn"
        title="Log In"
        disabled={!state.email && !state.password}
        isLoading={loginMutation.isLoading}
        loaderSize='small'
        onPress={handleLogin}
      />

      <View row centerV centerH marginT-32>
        <Text body1 black>
          Don't have an account?{' '}
        </Text>
        <Button
          testID="sign-up-button"
          title="Sign Up"
          textOnly
          labelStyle={styles.signUpLabel}
          onPress={() => navigation.navigate('signup')}
        />
      </View>
    </View>
  );
};

export default Login;
