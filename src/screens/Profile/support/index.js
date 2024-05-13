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
import styles from '../styles';
import {Settings} from '../../../common/Settings';

const Support = ({navigation}) => {
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
            Support
          </Text>
        </View>
      <ScrollView flex>

        <View style={styles.settingsContainer} marginT-20>
          <Settings
            icon={<Lock color={Colors.blue700} />}
            title={'FAQ'}
            subtitle={'Frequently asked questins'}
            onPress={() => navigation.navigate('faq')}
            border
            marginAdjust={true}
            showArrowIcon={true}
          />
          <Settings
            icon={<Lock color={Colors.blue700} />}
            title={'Terms and Conditions'}
            subtitle={''}
            onPress={() => navigation.navigate('terms')}
            border
            marginAdjust={true}
            showArrowIcon={true}
          />

          <Settings
            icon={<Security />}
            title={'Privacy Policies'}
            subtitle={''}
            onPress={() => navigation.navigate('privacy')}
            marginAdjust={true}
            showArrowIcon={true}
          />

          <Settings
            icon={<Security />}
            title={'Tickets'}
            subtitle={''}
            onPress={() => navigation.navigate('tickets')}
            marginAdjust={true}
            showArrowIcon={true}
          />


          <Settings
            icon={<Security />}
            title={'Fees and Charges'}
            subtitle={''}
            // onPress={() => navigateToKYC()}
            marginAdjust={true}
            showArrowIcon={true}
          />


          <Settings
            icon={<Security />}
            title={'Transaction Limits'}
            subtitle={''}
            // onPress={() => navigateToKYC()}
            marginAdjust={true}
            showArrowIcon={true}
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Support;
