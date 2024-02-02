import React from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, Alert} from 'react-native';
import {View, Colors, Image} from 'react-native-ui-lib';
import { useDispatch } from 'react-redux';
import {
  EditIcon,
  CameraIcon,
  Account,
  Rate,
  Logout,
  Support,
  Security,
  Payment,
  ThumbPrint,
  ProfileIcon,
  NotificationBell
} from '../../../assets/icons';
import {RegularText, MediumText, Header} from '../../common';
import styles from './styles';
import {Settings} from '../../common/Settings';
import { logOut } from '../../actions/user';
import { handleAppRating, openSupport } from '../../lib/util';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();

  const logoutUser = () => {
    return Alert.alert('Logout', 'Are you sure you want to Logout', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Yes log me out',
        onPress: () => {
          dispatch(logOut());
        },
      },
    ]);
  };


  return (
    <SafeAreaView flex backgroundColor={Colors.white}>
      <ScrollView flex>
        <View
          style={styles.pixContainer}
          centerV
          paddingH-20
          marginT-20
          row
          spread>
          <View row>
            <Image
              source={{
                uri: 'https://static.vecteezy.com/system/resources/thumbnails/015/412/213/small/elegant-man-in-business-suit-with-badge-man-business-avatar-profile-picture-illustration-isolated-vector.jpg',
              }}
              label={'IT'}
              style={styles.profilePix}
            />
            <MediumText
              text={'Dike Micheal'}
              style={styles.profileName}
              marginT-10
              marginL-8
            />
          </View>
          <View row>
            <TouchableOpacity style={styles.icon}>
              <CameraIcon height={20} width={20} color={Colors.white} />
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.icon}>
              <EditIcon height={20} width={20} />
            </TouchableOpacity> */}
          </View>
        </View>
        <View style={styles.settingsContainer} marginT-20>
          <Settings
            icon={<ProfileIcon color={Colors.blue700} />}
            title={'Personal Details'}
            subtitle={'Make changes to your account'}
            // onPress={() => navigateToKYC()}
            border
            marginAdjust={true}
            showArrowIcon={true}
          />
          <Settings
            icon={<Account color={Colors.blue700} />}
            title={'Referrals'}
            subtitle={'Earn rewards by referring friends and family'}
            // onPress={() => navigateToKYC()}
            border
            marginAdjust={true}
            showArrowIcon={true}
          />
          <Settings
            icon={<NotificationBell fill={Colors.blue700} />}
            title={'Notifications Settings'}
            subtitle={'Manage your notification settings'}
            // onPress={() => navigateToKYC()}
            border
            marginAdjust={true}
            showArrowIcon={true}
          />

          <Settings
            icon={<Support />}
            title={'Support'}
            subtitle={'Talk to our customer care'}
            onPress={() =>  navigation.navigate('support')}
            border
            marginAdjust={true}
            showArrowIcon={true}
          />

           <Settings
            icon={<Payment color={Colors.blue700} />}
            title={'Bank Account'}
            subtitle={'Manage your bank accounts'}
            // onPress={() => navigateToKYC()}
            border
            marginAdjust={true}
            showArrowIcon={true}
          />

          <Settings
            icon={<Security />}
            title={'Security'}
            subtitle={'Add an extra layer of security'}
            onPress={() => navigation.navigate('security')}
            border
            marginAdjust={true}
            showArrowIcon={true}
          /> 
        </View>

        <View marginT-20 paddingL-20>
          <RegularText text={'More'} />
        </View>

        <View style={styles.settingsContainer} marginT-20>
          <Settings
            icon={<Support />}
            title={'Speak to an Agent'}
            onPress={() => openSupport()}
            marginAdjust={true}
            showArrowIcon={true}
          />
          <Settings
            icon={<Rate />}
            title={'Rate App'}
            border
            onPress={() => handleAppRating()}
            marginAdjust={true}
            showArrowIcon={true}
          />
          <Settings
            icon={<Logout />}
            title={'Logout'}
            onPress={() => logoutUser()}
            marginAdjust={true}
            showArrowIcon={true}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
