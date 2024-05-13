import React, {useEffect} from 'react';
import {View, Image} from 'react-native-ui-lib';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import {StatusBar, SafeAreaView} from 'react-native';
import { setPin } from '../../../../mutations/user';
import {Button, TitleInput, BackHeader} from '../../../../common';
import { useMergedState, toast } from '../../../../lib/util';
import styles from './styles';


const ChangeTransactionPin = ({navigation}) => {
  const dispatch = useDispatch();
  const [state, setState] = useMergedState({
    pin: ''
});


const handleSuccessReset = () => {
  navigation.navigate('success', {
    message: 'Congratulations, you have successfully set your Pin',
    buttonLabel: 'Go to home',
    type: 'login',
  });
};

const handleFailedReset = () => {
  alert();
}

const verifyMutation = useMutation(setPin, {
  onSuccess: handleSuccessReset,
  onError: handleFailedReset,
});

const handleReset = () => {
  if(state.pin === '') return  toast('Enter your Pin', '', 'error');
  const data = {
    pin: state.pin,
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
              <BackHeader title="Change Transaction Pin" />
            </View>

            <View marginT-50 marginB-60 centerH>
              <Image
                assetGroup="profile"
                assetName="pass"
                style={styles.profilePix}
              />
            </View>
           
    
            <View marginB-5>
                <TitleInput
                  inputTitle={'Transaction Pin'}
                  defaultValue={state.pin}
                  onChangeText={value => setState({ pin: value })}
                  showLeftIcon={true}
                  leftIconName={'lock-reset'}
                  placeholder="Enter Transactional pin"
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

export default ChangeTransactionPin;
