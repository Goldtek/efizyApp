import React from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import {View, Colors, Text} from 'react-native-ui-lib';
import { useDispatch } from 'react-redux';
import {
  Security,
  ThumbPrint,
  BackArrow,
  Lock
} from '../../../../assets/icons';
import styles from './styles';
import {Settings} from '../../../common/Settings';

const ExtendSecurity = ({navigation}) => {
  const dispatch = useDispatch();

 

  return (
    <SafeAreaView flex backgroundColor={Colors.white}>
       <View row marginB-10 marginL-14 marginT-20>
          <View marginT-8 marginL-10>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.goBack()}>
              <BackArrow />
            </TouchableOpacity>
          </View>
          <Text h1 blue700 bold marginL-12>
            Security
          </Text>
        </View>
      <ScrollView flex>

        <View style={styles.settingsContainer} marginT-20>
          <Settings
            icon={<Lock color={Colors.blue700} />}
            title={'Change Password'}
            subtitle={'Improve security by updating your password'}
            onPress={() => navigation.navigate('changePass', {title: 'Change Password', next: 'update_password'})} 
            marginAdjust={true}
            showArrowIcon={true}
          />
          <Settings
            icon={<Lock color={Colors.blue700} />}
            title={'Change Transaction Pin'}
            subtitle={'Improve security by updating your transaction pin'}
            onPress={() => navigation.navigate('changePass', {title: 'Change Transaction Pin', next: 'changePin'})}
            border
            marginAdjust={true}
            showArrowIcon={true}
          />
          <Settings
            icon={<ThumbPrint color={Colors.blue700} />}
            title={'Biometrics'}
            subtitle={'Enable Secure Login'}
            // onPress={() => navigation.navigate('download_auth')}
            border
            marginAdjust={true}
            showArrowIcon={false}
            showFingerPrintSwitch={true}
          />

          <Settings
            icon={<Security />}
            title={'Activate 2FA'}
            subtitle={'Improve security with Google Authentication'}
            onPress={() => navigation.navigate('download_auth')}
            marginAdjust={true}
            showArrowIcon={true}
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExtendSecurity;
