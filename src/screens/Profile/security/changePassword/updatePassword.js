import React from 'react';
import {View, Image} from 'react-native-ui-lib';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import {StatusBar, SafeAreaView} from 'react-native';

import {Button, TitleInput, BackHeader} from '../../../../common';
import { useMergedState } from '../../../../lib/util';
import styles from './styles';
import { verifyOtpRequest } from '../../../../mutations/user';



const UpdatePassword = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {email, token} = route.params;
  const [state, setState] = useMergedState({
      password: '',
      password2: '',
      processing: false
  });


  const handleSuccessReset = () => {
    navigation.navigate('success', {
      message: 'Congratulations, you have successfully changed your password',
      buttonLabel: 'Go to home',
      type: 'login',
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

  const errorMessage = useSelector(
    store => store.user?.errorMessage,
  );




  return (
    <SafeAreaView flex  backgroundColor={'rgba(255, 255, 255, 1)'}>
        <View
        flex
        paddingH-24
        backgroundColor={'rgba(255, 255, 255, 1)'}
        marginT-20
        >
            <StatusBar barStyle={'dark-content'} />

            <View marginT-10 marginB-10>
              <BackHeader title="Change Password" />
            </View>

            <View marginT-50 marginB-60 centerH>
          
            <Image
              assetGroup="profile"
              assetName="pass"
              style={styles.profilePix}
            />
            </View>

            <View marginB-25>
                <TitleInput
                  inputTitle={'New Password'}
                  defaultValue={state.password}
                  onChangeText={value => setState({ password: value })}
                  showLeftIcon={true}
                  leftIconName={'lock'}
                  secureTextEntry={true}
                  placeholder="Enter your New Password"
                />
            </View>
           
    
            <View marginB-25>
                <TitleInput
                  inputTitle={'Retype New Password'}
                  defaultValue={state.password2}
                  onChangeText={value => setState({ password2: value })}
                  showLeftIcon={true}
                  leftIconName={'lock'}
                  secureTextEntry={true}
                  placeholder="Retype your Password"
                />
            </View>

            <View marginB-5>
              <Button
                title="Proceed"
                onPress={handleReset}
                isLoading={verifyMutation.isLoading}
              />
            </View>


        </View>
    </SafeAreaView>
  );
};

export default UpdatePassword;
