import React, {useEffect} from 'react';
import {View, Colors, Text, Image} from 'react-native-ui-lib';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import {StatusBar} from 'react-native';

import {Button, RegularText, TitleInput} from '../../common';
import { useMergedState } from '../../lib/util';
import { loginUser } from '../../mutations/user';
import {styles} from './styles';
import { handleLoginSuccess } from '../../actions/user';
import { storeUserAuthErrorMessages } from '../../actions/user';


const ProfileDetail = ({navigation}) => {
  const dispatch = useDispatch();
  let [securePassword, setSecurePassword] = React.useState(true);
  let [passwordIcon, setPasswordIcon] = React.useState('eye-off-outline');

  const [state, setState] = useMergedState({
    password: '',
    email: '',
    newDeviceToken: null
  });

  const errorMessage = useSelector(
    store => store.user?.errorMessage,
  );

  // new device login (change of device)
  useEffect(()=>{
    if(errorMessage === 'unrecognised device. token sent to email'){
      navigation.navigate('register_device',{email:state.email, password: state.password})
    }
  },[errorMessage])
  

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
      >
         <StatusBar barStyle={'dark-content'} />
     
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


      <View row centerV centerH marginT-32>
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

export default ProfileDetail;
