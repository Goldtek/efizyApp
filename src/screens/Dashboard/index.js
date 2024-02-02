import React from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import {View, Colors, Image} from 'react-native-ui-lib';
import {
  NotificationBell,
  PasswordEyeSvg,
  ClosedPasswordEyeSvg,
  Crypto,
  DebitCard,
  Bank,
  Withdraw,
} from '../../../assets/icons';
import {RegularText, MediumText} from '../../common';
import styles from './styles';

const Service = ({imageName, title, onPress}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    marginB-24
    onPress={onPress}
    centerH
    style={styles.menuWrapper}>
    <View style={styles.imageWrapper}>
      <Image
        assetName={imageName}
        assetGroup="dashboard"
        style={styles.image}
      />
    </View>
    <RegularText text={title} style={styles.menuTitle} />
  </TouchableOpacity>
);

const Dashboard = ({navigation}) => {
  return (
    <SafeAreaView flex backgroundColor={Colors.white}>
      <View paddingH-20 row style={styles.iconTray} marginT-5 marginB-5>
        <View>
          <View row centerV>
            <Image
              source={{
                uri: 'https://static.vecteezy.com/system/resources/thumbnails/015/412/213/small/elegant-man-in-business-suit-with-badge-man-business-avatar-profile-picture-illustration-isolated-vector.jpg',
              }}
              label={'IT'}
              style={styles.profilePix}
            />
            <MediumText
              text="Howdy, Adenuga"
              color="#000000"
              marginT-5
              marginL-5
            />
          </View>

          <RegularText
            text="Enjoy swift transactions"
            color="#6C757D"
            marginT-5
            marginB-10
          />
        </View>

        <View marginT-10>
          <NotificationBell height={50} width={40} />
        </View>
      </View>
      <ScrollView
        flex
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}>
        <View padding-20 style={styles.dashboard}>
          <View row centerV spread>
            <View row centerV>
              <MediumText
                text="Balance"
                color={Colors.white}
                marginT-5
                marginR-20
              />
              <TouchableOpacity activeOpacity={0.8}>
                <ClosedPasswordEyeSvg width={80} height={80} />
              </TouchableOpacity>
            </View>
          </View>
          <RegularText
            text="****"
            color={Colors.white}
            marginT-5
            marginB-10
            style={styles.amount}
          />
          <MediumText
            marginT-90
            text="Fund your wallet"
            color={Colors.white}
            style={styles.subtitle}
          />
        </View>
        <View padding-15 row centerV marginT-20 style={styles.shortcuts}>
          <TouchableOpacity activeOpacity={0.7}>
            <View centerH>
              <Crypto />
              <RegularText
                text="Crypto"
                color={Colors.black}
                style={styles.shortcutText}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7}>
            <View centerH>
              <Bank />
              <RegularText
                text="Bank Transfer"
                color={Colors.black}
                style={styles.shortcutText}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7}>
            <View centerH>
              <DebitCard />
              <RegularText
                text="Debit Card"
                color={Colors.black}
                style={styles.shortcutText}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.services} paddingT-30 paddingH-10 marginT-5>
          <View row spread>
            <Service
              imageName="electricity"
              title={'Electricity'}
              onPress={() => navigation.navigate('electricity')}
            />
            <Service
              imageName="internet"
              title={'Internet'}
              onPress={() => navigation.navigate('internet')}
            />
            <Service
              imageName="cabletv"
              title={'Cable Tv'}
              onPress={() => navigation.navigate('tv')}
            />
          </View>
          <View row spread marginT-30>
            <Service
              imageName="data"
              title={'Data Bundle'}
              onPress={() => navigation.navigate('data')}
            />
            <Service imageName="a2c" title={'Airtime To Cash'} />
            <Service
              imageName="airtime"
              title={'Airtime'}
              onPress={() => navigation.navigate('airtime')}
            />
          </View>
          <View row spread marginT-30>
            <Service
              imageName="giftcard"
              title={'Gift Cards'}
              onPress={() => navigation.navigate('giftcard')}
            />
            <Service imageName="flight" title={'Book  Flight'} />
            <Service imageName="hotel" title={'Book   Hotel'} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
