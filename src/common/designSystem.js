import {Assets, Typography} from 'react-native-ui-lib';
import {ThemeManager} from 'react-native-ui-lib';

export const loadConfigurations = () => {
  Assets.loadAssetsGroup('onboarding', {
    services: require('../../assets/images/onboarding/services.png'),
    giftcard: require('../../assets/images/onboarding/giftcard.png'),
    crypto: require('../../assets/images/onboarding/crypto.png'),
    pm: require('../../assets/images/onboarding/pm.png'),
  });

  Assets.loadAssetsGroup('wallet', {
    send: require('../../assets/images/wallet/send.png'),
    recieve: require('../../assets/images/wallet/recieve.png'),
    swap: require('../../assets/images/wallet/swap.png'),
    sendColored: require('../../assets/images/wallet/send2.png'),
    recieveColored: require('../../assets/images/wallet/recieve2.png'),
    swapColored: require('../../assets/images/wallet/swap2.png'),
    cedis: require('../../assets/images/currency/cedis.png'),
    dollar: require('../../assets/images/currency/dollar.png'),
    euro: require('../../assets/images/currency/euro.png'),
    pound: require('../../assets/images/currency/pound.png'),
    ksh: require('../../assets/images/currency/kenya.png'),
    naira: require('../../assets/images/currency/naira.png'),
  });

  Assets.loadAssetsGroup('dashboard', {
    airtime: require('../../assets/images/dashboard/airtime.png'),
    electricity: require('../../assets/images/dashboard/electricity.png'),
    a2c: require('../../assets/images/dashboard/a2c.png'),
    internet: require('../../assets/images/dashboard/internet.png'),
    cabletv: require('../../assets/images/dashboard/tv.png'),
    flight: require('../../assets/images/dashboard/flight.png'),
    data: require('../../assets/images/dashboard/data.png'),
    hotel: require('../../assets/images/dashboard/hotel.png'),
    giftcard: require('../../assets/images/dashboard/giftcard.png'),
    user: require('../../assets/images/profile/account.png')
  });

  Assets.loadAssetsGroup('temporary', {
    advert1: require('../../assets/images/demo/slider_1.jpg'),
    amazon: require('../../assets/images/demo/amazon.png'),
    walmart: require('../../assets/images/demo/walmart-img.png'),
    netflix: require('../../assets/images/demo/netflix.png'),
    valentine: require('../../assets/images/demo/valentine.png'),
    shoprite: require('../../assets/images/demo/shoprite.png'),
    birthday: require('../../assets/images/demo/birthday.png'),
    birthday2: require('../../assets/images/demo/birthday_2.png'),
  });

  Assets.loadAssetsGroup('networks', {
    mtn: require('../../assets/images/networks/mtn.png'),
    glo: require('../../assets/images/networks/glo.png'),
    airtel: require('../../assets/images/networks/airtel.png'),
    visafone: require('../../assets/images/networks/visafone.png'),
    smile: require('../../assets/images/networks/smile.png'),
    '9mobile': require('../../assets/images/networks/9mobile.png'),
  });

  Assets.loadAssetsGroup('logo', {
    full_logo_white: require('../../assets/images/logo/full_logow.png'),
    full_logo: require('../../assets/images/logo/full_logo.png'),
    logo: require('../../assets/images/logo/logo.png'),
    logo_white: require('../../assets/images/logo/logow.png'),
  });

  Typography.loadTypographies({
    h1: {
      fontFamily: 'DMSans-Regular',
      fontSize: 24,
      lineHeight: 32,
    },
    h2: {fontFamily: 'DMSans-Regular', fontSize: 20, lineHeight: 26},
    body1: {fontFamily: 'DMSans-Regular', fontSize: 16, lineHeight: 20},
    body2: {fontFamily: 'DMSans-Regular', fontSize: 14, lineHeight: 18},
    caption: {fontFamily: 'DMSans-Regular', fontSize: 12, lineHeight: 15},
    bold: {fontWeight: 'bold', fontFamily: 'DMSans-Bold'},
    medium: {fontFamily: 'DMSans-Medium', fontWeight: '500'},
    normal: {fontWeight: '400'},
  });
};

ThemeManager.setComponentTheme('Text', {
  normal: true, // will set the text70 typography modifier prop to be true by default
});
