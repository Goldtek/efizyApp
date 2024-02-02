import React, {useRef, useEffect, useState} from 'react';
import {View, Text} from 'react-native-ui-lib';
import {TouchableOpacity, SafeAreaView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CountryPicker from 'react-native-country-picker-modal';
import { useMutation } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';

import { storeUserAuthErrorMessages } from '../../actions/user';
import {Button, Input, TitleInput, RegularText} from '../../common';
import {BackArrow, Dropdown} from '../../../assets/icons';
import {styles} from './styles';
import { useMergedState } from '../../lib/util';
import { registerUser } from '../../mutations/user';

const Signup = ({navigation}) => {
  const dispatch = useDispatch();
  const [state, setState] = useMergedState({
    email: '',
    password: '',
    username: '',
    phoneNumber: '',
    countryISO2Code: '',
});
const [withFilter, setWithFilter] = useState(true);
const [isVisible, setVisibility] = useState(false);
const [country, setCountry] = useState(null);

const errorMessage = useSelector(
  store => store.user?.errorMessage,
);


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

const handleBlur = () => {
  if (!!phone && !!password && password.length > 4) {
    setHasErrors(false);
  } else {
    setHasErrors(true);
  }
};

const register = useMutation(registerUser, {
  onSuccess: () => {
    navigation.navigate('success', {title: 'User registration successful!', type: 'auth', buttonLabel: 'Login'});
  },
});

const handleLogin = () => {
 // register.mutate(state);
 navigation.navigate('success', {title: 'User registration successful!', type: 'auth', buttonLabel: 'Login'});
};

const onSelect = (country) => {
   setState({countryISO2Code: country.cca2})
   setCountry(country)
}



  return (
    <SafeAreaView  style={styles.container}>
    <KeyboardAwareScrollView
      testID="login-scroll"
      showsVerticalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.paddedScroll}>
        <View row marginB-30>
          <View marginT-8 marginL-4>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}>
            <BackArrow />
          </TouchableOpacity>
          </View>
          <Text h1 blue700 bold marginL-12>
            Create Account
          </Text>
        </View>

      <View marginB-10 testID="signup-email">
        <Input
          label="Email Address"
          placeholder="Enter your Email Address"
          value={state.email}
          onBlur={handleBlur}
          keyboardType="email-address"
          onChange={(t) => setState({email: t})}
        />
      </View>

      <View marginB-10 testID="signup-username">
        <Input
          label="Username"
          placeholder="Enter your Username"
          value={state.username}
          onBlur={handleBlur}
          onChange={(t) => setState({username: t})}
        />
      </View>
      
      <View marginB-20 testID="select-country">
        <View marginB-10>
        <RegularText text={'Country'} size={14} />
        </View>
     
        <TouchableOpacity onPress={() => setVisibility(true)}>
          <View style={styles.dropdown}>
            {country === null ? (
              <View style={styles.dropstyle}>
                <CountryPicker
                  {...{
                    withFilter,
                    onSelect,
                    modalProps: {
                      visible: isVisible,
                    },
                    onClose: () => setVisibility(false),
                  }}
                /> 
              </View>
            ) : (
              <Text marginL-10>{country !== null ? country.name : ''}</Text>
            )}
                <Dropdown />
          </View>
        </TouchableOpacity>
      </View>
 
        <>
          <View marginB-0>
          <Input
          label="Phone Number"
          placeholder="Enter your Phone Number"
          value={state.phoneNumber}
          onBlur={handleBlur}
          onChange={(t) => setState({phoneNumber: t})}
        />
          </View>

          <View marginB-20 testID="signup-password">
            <Input
              label="Password"
              placeholder="Enter your password"
              value={state.password}
              onBlur={handleBlur}
              isPassword
              onChange={(t) => setState({password: t})}
            />
          </View>

          <View marginB-5>
            <Input
              label="Referral Code (Optional)"
              placeholder="Enter referral code"
              value={state.referral}
              onBlur={handleBlur}
              onChange={(t) => setState({referral: t})}
            />
          </View>
          {errorMessage && (
          <View marginB-20 style={styles.error} padding-8>
            <Text h5 red  marginL-12 animated>
              {errorMessage}
            </Text>
          </View>
          )}
          <View marginB-30 marginT-20>
            <Button title="Sign Up" disabled={!state.email} onPress={handleLogin} isLoading={register.isLoading} />
          </View>
        </>
      
    </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Signup;
