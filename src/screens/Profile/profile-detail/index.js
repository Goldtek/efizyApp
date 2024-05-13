import React, {useEffect} from 'react';
import {View, Colors, Text, Image} from 'react-native-ui-lib';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import {StatusBar, SafeAreaView} from 'react-native';

import {Button, RegularText, TitleInput, BackHeader} from '../../../common';
import { useMergedState } from '../../../lib/util';
import { loginUser } from '../../../mutations/user';
import styles from './styles';
import { handleLoginSuccess, storeUserAuthErrorMessages } from '../../../actions/user';



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
  

  const handleUpdate = useMutation(loginUser, {
    onSuccess: handleLoginSuccess
});



  return (
    <SafeAreaView flex  backgroundColor={'rgba(255, 255, 255, 1)'}>
        <View
        flex
        paddingH-24
        backgroundColor={'rgba(255, 255, 255, 1)'}
        marginT-20
        >
            <StatusBar barStyle={'dark-content'} />

            <View marginT-20 marginB-10>
              <BackHeader title="Profile" />
            </View>

            <View marginT-50 marginB-30 centerH>
            <Image
              source={{
                uri: 'https://static.vecteezy.com/system/resources/thumbnails/015/412/213/small/elegant-man-in-business-suit-with-badge-man-business-avatar-profile-picture-illustration-isolated-vector.jpg',
              }}
              label={'IT'}
              style={styles.profilePix}
            />
            </View>
            
            <View marginB-5>
                <TitleInput
                    inputTitle={'Full Name'}
                    defaultValue={state.email}
                    onChangeText={(t) => setState({email: t})}
                    showLeftIcon={true}
                    leftIconName={'account-circle'}
                    placeholder="Enter your Name"
                />
            </View>
            <View marginB-5>
                <TitleInput
                    inputTitle={'E-mail Address'}
                    defaultValue={state.password}
                    onChangeText={value => setState({ password: value })}
                    showLeftIcon={true}
                    leftIconName={'email'}
                    keyboardType="email-address"
                    placeholder="Enter E-mail Address"
                />
            </View>
            <View marginB-5>
                <TitleInput
                    inputTitle={'Username'}
                    defaultValue={state.password}
                    onChangeText={value => setState({ password: value })}
                    showLeftIcon={true}
                    leftIconName={'account-circle'}
                    placeholder="Enter your Username"
                />
            </View>
            <View marginB-5>
                <TitleInput
                  inputTitle={'Phone Number'}
                  defaultValue={state.password}
                  onChangeText={value => setState({ password: value })}
                  showLeftIcon={true}
                  leftIconName={'phone'}
                  placeholder="Enter your Phone Number"
                />
            </View>

            <View marginB-5>
              <Button
                title="Save"
                onPress={handleUpdate}
              />
            </View>


        </View>
    </SafeAreaView>
  );
};

export default ProfileDetail;
