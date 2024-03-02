import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity, StyleSheet, Animated} from 'react-native';
import {View, Text, Colors} from 'react-native-ui-lib';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import Onboarding from '../screens/Auth/Onboarding';
import Login from '../screens/Auth/Login';
import RegisterDevice from '../screens/Auth/registerDevice';
import Signup from '../screens/Auth/Signup';
import ForgotPassword from '../screens/Auth/forgotPassword/ForgotPassword';
import Success from '../screens/Auth/Success';
import VerifyEmail from '../screens/Auth/forgotPassword/verify';
import Help from '../screens/Help';
import Cards from '../screens/Card';
import Wallet from '../screens/Wallet';
import Profile from '../screens/Profile';
import Dashboard from '../screens/Dashboard';
import LockScreen from '../screens/Auth/Lockscreen';
import Support from '../screens/Profile/support';
import ChangePassword from '../screens/Auth/forgotPassword/changePassword';
import Giftcard from '../screens/Giftcard';
import BuyGiftCard from '../screens/Giftcard/BuyGiftcard';
import SellGiftCard from '../screens/Giftcard/SellGiftCard';
import CardCategory from '../screens/Giftcard/BuyGiftcard/CardCategory';
import CardDetails from '../screens/Giftcard/BuyGiftcard/CardDetails';
import LocalCards from '../screens/Giftcard/BuyGiftcard/LocalCards';
import LocalCardDetails from '../screens/Giftcard/BuyGiftcard/LocalCardDetails';
import AllSellCards from '../screens/Giftcard/SellGiftCard/AllCards';
import SellCardDetails from '../screens/Giftcard/SellGiftCard/SellDetails';
import SellCardType from '../screens/Giftcard/SellGiftCard/SellCardType';
import SellValues from '../screens/Giftcard/SellGiftCard/SellValues';
import SelectionSummary from '../screens/Giftcard/SellGiftCard/SelectionSummary';
import {loadConfigurations} from '../common/designSystem';
import ExtendSecurity from '../screens/Profile/security';
import Airtime from '../screens/Refill/Airtime';
import AirtimeDetails from '../screens/Refill/Airtime/AirtimeDetails';
import Internet from '../screens/Refill/Internet/InternetView';
import Data from '../screens/Refill/Internet/DataView';
import TV from '../screens/Refill/cable';
import Electricity from '../screens/Refill/electricity';
import BankTransfer from '../screens/BankTransfer';

import Currency from '../screens/Wallet/currency';
import Contact from '../screens/Wallet/contact';

import {
  HomeIcon,
  ProfileIcon,
  CardIcon,
  GiftIconActive,
  WalletIcon,
} from '../../assets/icons';

loadConfigurations();

const Stack = createStackNavigator();


export const PublicNavigator = () => (
  <Stack.Navigator initialRouteName="onboarding">
    <Stack.Screen
      name="login"
      component={Login}
      options={{
        headerTitle: '',
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="signup"
      component={Signup}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="onboarding"
      component={Onboarding}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
    name='forgot_password'
    component={ForgotPassword}
    options={{
      headerShown: false,
    }}
  />

  <Stack.Screen
    name='success'
    component={Success}
    options={{
      headerShown: false,
    }}
  />

  <Stack.Screen
    name='verify_email'
    component={VerifyEmail}
    options={() => ({
      headerTitle: '',
      headerShown: false,
    })}
  />


  <Stack.Screen
    name='change_password'
    component={ChangePassword}
    options={() => ({
      headerTitle: '',
      headerShown: false,
    })}
  />

  <Stack.Screen
    name='register_device'
    component={RegisterDevice}
    options={() => ({
      headerTitle: '',
      headerShown: false,
    })}
  />

  </Stack.Navigator>
);

export const PrivateNavigator = () => (
  <Stack.Navigator initialRouteName="Dashboard">
    <Stack.Screen
      name="Lockscreen"
      component={LockScreen}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="Dashboard"
      component={BottomStackNavigator}
      options={props => ({
        headerTitle: '',
        headerShown: false,
      })}
    />

    {/* Gift cards */}

    <Stack.Screen
      name="buygiftcard"
      component={BuyGiftCard}
      options={props => ({
        headerTitle: '',
        headerShown: false,
      })}
    />

    <Stack.Screen
      name="SellGiftCard"
      component={SellGiftCard}
      options={props => ({
        headerTitle: '',
        headerShown: false,
      })}
    />
    <Stack.Screen
      name="giftcard"
      component={Giftcard}
      options={props => ({
        headerTitle: '',
        headerShown: false,
      })}
    />
    <Stack.Screen
      name="buy_giftcard"
      component={BuyGiftCard}
      options={props => ({
        headerTitle: '',
        headerShown: false,
      })}
    />
    <Stack.Screen
      name="card_category"
      component={CardCategory}
      options={props => ({
        headerTitle: '',
        headerShown: false,
      })}
    />
    <Stack.Screen
      name="local_cards"
      component={LocalCards}
      options={props => ({
        headerTitle: '',
        headerShown: false,
      })}
    />

    <Stack.Screen
      name="local_card_details"
      component={LocalCardDetails}
      options={props => ({
        headerTitle: '',
        headerShown: false,
      })}
    />

    <Stack.Screen
      name="card_details"
      component={CardDetails}
      options={props => ({
        headerTitle: '',
        headerShown: false,
      })}
    />

    <Stack.Screen
      name="sell_giftcard"
      component={SellGiftCard}
      options={props => ({
        headerTitle: '',
        headerShown: false,
      })}
    />
    <Stack.Screen
      name="sell_allcard"
      component={AllSellCards}
      options={props => ({
        headerTitle: '',
        headerShown: false,
      })}
    />

    <Stack.Screen
      name="sell_details"
      component={SellCardDetails}
      options={props => ({
        headerTitle: '',
        headerShown: false,
      })}
    />

    <Stack.Screen
      name="sell_cardtype"
      component={SellCardType}
      options={() => ({
        headerTitle: '',
        headerShown: false,
      })}
    />


    <Stack.Screen
      name="sell_values"
      component={SellValues}
      options={props => ({
        headerTitle: '',
        headerShown: false,
      })}
    />

    <Stack.Screen
      name="selection_summary"
      component={SelectionSummary}
      options={props => ({
        headerTitle: '',
        headerShown: false,
      })}
    />

    <Stack.Screen
      name="airtime"
      component={Airtime}
      options={props => ({
        headerTitle: '',
        headerShown: false,
      })}
    />

    <Stack.Screen
      name="airtime_details"
      component={AirtimeDetails}
      options={props => ({
        headerTitle: '',
        headerShown: false,
      })}
    />

    <Stack.Screen 
      name="bank_transfer" 
      component={BankTransfer}
    />
    
    <Stack.Screen
      name="internet"
      component={Internet}
      options={() => ({
        headerTitle: '',
        headerShown: false,
      })}
    />

    <Stack.Screen
      name="data"
      component={Data}
      options={() => ({
        headerTitle: '',
        headerShown: false,
      })}
    />

    <Stack.Screen
      name="tv"
      component={TV}
      options={props => ({
        headerTitle: '',
        headerShown: false,
      })}
    />

    <Stack.Screen
      name="security"
      component={ExtendSecurity}
      options={() => ({
        headerTitle: '',
        headerShown: false,
      })}
    />

    <Stack.Screen
      name="electricity"
      component={Electricity}
      options={props => ({
        headerTitle: '',
        headerShown: false,
      })}
    /> 

    <Stack.Screen
      name='success'
      component={Success}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="support"
      component={Support}
      options={props => ({
        headerTitle: '',
        headerShown: false,
      })}
    /> 

     <Stack.Screen
      name="currency"
      component={Currency}
      options={props => ({
        headerTitle: '',
        headerShown: false,
      })}
    /> 

    <Stack.Screen 
      name='contact' 
      component={Contact} 
      options={() => ({
        headerTitle: '',
        headerShown: false,
      })} 
    />    
  </Stack.Navigator>
);

const _renderIcon = (routeName, selectedTab) => {
  const focused = selectedTab === routeName;

  switch (routeName) {
    case 'Home':
      return (
        <View style={styles.bottomViewStyle}>
          {focused ? <HomeIcon color={Colors.blue700} /> : <HomeIcon />}
          <View style={styles.verticalPadding} />
          <Text
            style={{
              color: focused ? Colors.blue700 : Colors.NEUTRAL350,
              // fontFamily: FONTFAMILYREGULAR,
            }}>
            Home
          </Text>
        </View>
      );
    case 'Card':
      return (
        <View style={styles.bottomViewStyle}>
          {focused ? <CardIcon color={Colors.blue700} /> : <CardIcon />}
          <View style={styles.verticalPadding} />
          <Text
            style={{
              color: focused ? Colors.blue700 : Colors.NEUTRAL350,
              // fontFamily: FONTFAMILYREGULAR,
            }}>
            Card
          </Text>
        </View>
      );
    case 'Wallet':
      return (
        <View style={styles.bottomViewStyle}>
          {focused ? <WalletIcon color={Colors.blue700} /> : <WalletIcon />}
          <View style={styles.verticalPadding} />
          <Text
            style={{
              color: focused ? Colors.blue700 : Colors.NEUTRAL350,
              //  fontFamily: FONTFAMILYREGULAR,
            }}>
            Wallet
          </Text>
        </View>
      );
    case 'Profile':
      return (
        <View style={styles.bottomViewStyle}>
          {focused ? <ProfileIcon color={Colors.blue700} /> : <ProfileIcon />}
          <View style={styles.verticalPadding} />
          <Text
            style={{
              color: focused ? Colors.blue700 : Colors.NEUTRAL350,
              // fontFamily: FONTFAMILYREGULAR,
            }}>
            Profile
          </Text>
        </View>
      );
    default:
      break;
  }
};

const renderTabBar = ({routeName, selectedTab, navigate}) => {
  return (
    <TouchableOpacity
      onPress={() => navigate(routeName)}
      style={styles.renderTabView}>
      {_renderIcon(routeName, selectedTab)}
    </TouchableOpacity>
  );
};

const BottomStackNavigator = () => {
  // const {theme} = useContext(ThemeContext);
  // let appColorTheme = theme2[theme.mode];

  return (
    <CurvedBottomBar.Navigator
      initialRouteName={'Home'}
      type={'DOWN'}
      strokeWidth={2}
      strokeColor={Colors.white}
      height={75}
      circleWidth={50}
      circlePosition={'CENTER'}
      bgColor={Colors.titanWhite}
      screenOptions={{
        headerShown: false,
      }}
      renderCircle={({selectedTab, navigate}) => (
        <View>
          <Animated.View
            style={[
              styles.btnCircle,
              {
                backgroundColor: Colors.blue700,
                shadowColor: Colors.bordergray,
              },
            ]}>
            <TouchableOpacity
              style={styles.circleView}
              onPress={() => navigate('Reward')}>
              <GiftIconActive />
            </TouchableOpacity>
          </Animated.View>
        </View>
      )}
      tabBar={renderTabBar}>
      <CurvedBottomBar.Screen
        name={'Home'}
        component={Dashboard}
        position="LEFT"
      />
      <CurvedBottomBar.Screen name={'Card'} component={Cards} position="LEFT" />

      <CurvedBottomBar.Screen
        name={'Wallet'}
        component={Wallet}
        position="RIGHT"
      />

      <CurvedBottomBar.Screen
        name={'Profile'}
        component={Profile}
        position="RIGHT"
      />
    </CurvedBottomBar.Navigator>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    marginVertical: 5,
  },
  bottomBar: {},
  btnCircle: {
    width: 54,
    height: 54,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0.2,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1,
    bottom: 14,
  },

  bottomViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  renderTabView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleView: {
    flex: 1,
    justifyContent: 'center',
  },
  referralText: {
    flex: 1,
    bottom: 8,
  },
  verticalPadding: {
    paddingVertical: 3,
  },
});
