import React from 'react';
import {
  StyleSheet,
  Dimensions,
  StatusBar,
  Text,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Colors, Image, View} from 'react-native-ui-lib';
import {hp, ms} from '../../common';
import {slides} from './slides';
import {ForwardArrow} from '../../../assets/icons';

const {width} = Dimensions.get('screen');

const Onboarding = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.onboardingPage}>
        <View style={styles.onboardingImage} marginB-20>
          <Image
            assetName={item.image}
            assetGroup="onboarding"
            resizeMode="cover"
            width="100%"
            height="100%"
          />
        </View>

        <Text style={styles.onboardingText}>{item.text}</Text>
      </View>
    );
  };

  const renderPagination = activeIndex => {
    return (
      <View style={styles.paginationContainer} marginT-40>
        <SafeAreaView>
          <View style={styles.paginationDots}>
            {slides.length > 1 &&
              slides.map((_, i) => (
                <TouchableOpacity
                  key={i}
                  style={[
                    styles.dot,
                    i === activeIndex ? styles.active : styles.inactive,
                  ]}
                  onPress={() => this.slider?.goToSlide(i, true)}
                />
              ))}
          </View>
        </SafeAreaView>
      </View>
    );
  };

  const onPress = () => {
    navigation.navigate('login');
  };

  return (
    <View style={styles.container} testID="started">
      <StatusBar barStyle={'light-content'} />
      <ImageBackground
        source={require('../../../assets/images/splash.png')}
        style={styles.container}>
        <AppIntroSlider
          testID="slides"
          renderItem={renderItem}
          data={slides}
          showNextButton={false}
          renderPagination={() => null}
        />
        <View style={styles.buttonWrapper}>
          {renderPagination(0)}
          <TouchableOpacity style={styles.buttonN} onPress={onPress}>
            <ForwardArrow color={Colors.blue700} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circle: {
    backgroundColor: 'rgba(23,43,77, 0.3)',
    width: width * 2,
    aspectRatio: 1,
    borderRadius: width,
    position: 'absolute',
    left: ms(-80),
    top: ms(-107),
  },
  onboardingPage: {
    marginTop: hp(111),
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: ms(40),
  },
  buttonWrapper: {
    marginBottom: 48,
    paddingHorizontal: ms(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  onboardingImage: {
    width: '100%',
    maxWidth: ms(400),
    aspectRatio: 375 / 470,
  },
  onboardingText: {
    maxWidth: 327,
    fontFamily: 'DMSans-Regular',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 31,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  buttonN: {
    height: ms(50),
    width: ms(50),
    borderRadius: ms(25),
    backgroundColor: Colors.white,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationContainer: {
    bottom: 16,
    left: 16,
    right: 16,
  },
  paginationDots: {
    height: 16,
    //  margin: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  active: {backgroundColor: 'white', width: 30, height: 5},
  inactive: {backgroundColor: 'rgba(0, 0, 0, .2)'},
});
export default Onboarding;
