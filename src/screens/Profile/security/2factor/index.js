import React, {useEffect} from 'react';
import {View, Colors, Text, Image} from 'react-native-ui-lib';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import {StatusBar, SafeAreaView, Linking, Platform} from 'react-native';


import {Button, BackHeader, BoldText, RegularText} from '../../../../common';
import { DownloadAuth } from '../../../../../assets/icons';
import { start2FA } from '../../../../mutations/user';
import { useMergedState } from '../../../../lib/util';
import styles from './styles';




const DownloadAuthenticator = ({navigation}) => {
  const dispatch = useDispatch();
  let [state, setState] = useMergedState({
    qrCodeImg: null,
  });

  const iosUrl = 'itms-apps://apps.apple.com/US/app/id388497605';
  const androidUrl =
    'https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2';


  const google_auth = useSelector(
    store => store.user?.google_auth,
  );

    useEffect(() => {
      sendOTPMutation.mutate();
      if (google_auth !== null && google_auth !== undefined) {
        console.log('google_auth', google_auth);
        setState({qrCodeImg: google_auth.qr});
      }
    }, []);


  const sendOTPMutation = useMutation(start2FA);
 

  const openGoogleAuth = () => {
    Linking.openURL(google_auth.uri).catch(async () => {
      if (Platform.OS === 'ios') {
        const supported = await Linking.canOpenURL(iosUrl);
        supported && (await Linking.openURL(iosUrl));
      } else if (Platform.OS === 'android') {
        const supported = await Linking.canOpenURL(androidUrl);
        supported && (await Linking.openURL(androidUrl));
      }
    });
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
              <BackHeader title={'Two Step Authentication'} />
            </View>
    
            <View marginB-35 centerH marginT-40>
              <DownloadAuth height={200} width={200} />
            </View>

            <View  marginB-200 centerH marginT-10>
              <BoldText text={'Download Google Authenticator'} size={18} />

              <RegularText text={'Kindly download google authenticaton from'} marginT-20 />

              <RegularText text={'either play store or app store'} marginT-10 />
            </View>


            <View  marginB-30 centerH >
              <Button
                textOnly
                title="Already Installed"
               onPress={() => navigation.navigate('auth_step2')}
                disabled={google_auth === null}
              />
            </View>
      

            <View marginB-5>
              <Button
                title="Download Authenticator"
                onPress={() => openGoogleAuth()}
                isLoading={sendOTPMutation.isLoading}
                disabled={google_auth === null}
              />
            </View>


        </View>
    </SafeAreaView>
  );
};

export default DownloadAuthenticator;
