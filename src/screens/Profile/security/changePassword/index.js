import React from 'react';
import {View, Image} from 'react-native-ui-lib';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import {StatusBar, SafeAreaView} from 'react-native';
import { toast } from '../../../../lib/util';
import {Button, TitleInput, BackHeader} from '../../../../common';

import { sendPasswordReqOTP } from '../../../../mutations/user';
import { useMergedState } from '../../../../lib/util';
import styles from './styles';




const ChangePassword = ({navigation, route}) => {
  const dispatch = useDispatch();
  const { title, next } = route.params;

  const [state, setState] = useMergedState({
    password: '',
  });


  const credentails = useSelector(
    store => store.user?.credentails,
  );


  const handResetSuccess = () => {
    navigation.navigate('security_verification', {email: credentails.email, next, title});
  }

  const sendOTPMutation = useMutation(sendPasswordReqOTP, {
    onSuccess: handResetSuccess,
  });
 

  const handleUpdate = () => {
    if(state.password === ''){
      toast('Please enter your password', '', 'error');
    }
    else if(state.password !== credentails.password){
      // after try times suspend the account to perform verification
      toast('Please enter a valid Password', '', 'error');
    }
    else if(credentails.password === state.password) {
      sendOTPMutation.mutate(credentails.email);
    }
  };



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
              <BackHeader title={title} />
            </View>

            <View marginT-50 marginB-60 centerH>
          
            <Image
              assetGroup="profile"
              assetName="pass"
              style={styles.profilePix}
            />
            </View>
           
    
            <View marginB-35>
                <TitleInput
                  inputTitle={'Current Password'}
                  defaultValue={state.password}
                  onChangeText={value => setState({ password: value })}
                  showLeftIcon={true}
                  secureTextEntry={true}
                  leftIconName={'lock'}
                  placeholder="Enter your Password"
                />
            </View>

            <View marginB-5>
              <Button
                title="Proceed"
                onPress={handleUpdate}
                isLoading={sendOTPMutation.isLoading}
              />
            </View>


        </View>
    </SafeAreaView>
  );
};

export default ChangePassword;
