import React from 'react';
import {View} from 'react-native-ui-lib';
import QRCode from 'react-native-qrcode-svg';
import { useDispatch, useSelector } from 'react-redux';
import Clipboard from '@react-native-clipboard/clipboard';
import {StatusBar, SafeAreaView} from 'react-native';
import { toast } from '../../../../lib/util';

import {BackHeader, BoldText, Button, TitleInput} from '../../../../common';
import { useMergedState, extractSecret } from '../../../../lib/util';



const AuthStep2 = ({navigation}) => {
  const dispatch = useDispatch();

  const google_auth = useSelector(
    store => store.user?.google_auth,
  );


  let [state, setState] = useMergedState({
    qrCodeImg: null,
    showQrCode: false,
    secret: google_auth.qr ? extractSecret(google_auth.uri) : '',
  });


  const copyAddressToClipBoard = () => {
    toast("Google Secret has been copied to clipboard ", '', 'info');
     if(google_auth.uri !== undefined || google_auth.uri !== null){
        Clipboard.setString( extractSecret(google_auth.uri));
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
              <BackHeader title={'Two Step Authentication'} />
            </View>
    
            <View marginB-45  marginT-40>
                <BoldText text={'Set Up Manually'} size={18} />
            </View>

            <View marginB-25>
                <TitleInput
                  inputTitle={'Google Auth Key'}
                  defaultValue={state.secret}
                  editable={false}
                  showIcon={true}
                  iconName={'content-copy'}
                  onIconPress={() => copyAddressToClipBoard()}
                />
            </View>

            <View marginB-30>
                <BoldText text={'Scan QrCode to setup Automatically'} size={17} />
            </View>

           <View centerH marginB-100>
                <QRCode
                    value={google_auth.qr}
                    size={300}
                    color="black"
                    backgroundColor="white"
                />
           </View>

           <View marginB-5>
              <Button
                title="Continue"
                onPress={()=> navigation.navigate('auth_verification')}  
              />
            </View>

        </View>
    </SafeAreaView>
  );
};

export default AuthStep2;
