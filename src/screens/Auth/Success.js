import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {Colors, Text, View} from 'react-native-ui-lib';
import LottieView from 'lottie-react-native';
import {ms, Button} from '../../common';


const Success = ({navigation, route}) => {
  const {message, buttonLabel, type, title} = route.params;

  return (
    <View
      flex
      center
      paddingH-30
      paddingT-60
      backgroundColor={Colors.white}
      testID="forgot-success">
      <StatusBar barStyle={'dark-content'} />
      <LottieView
        style={{height: 400, width: 400}}
        source={require('../../../assets/animation/success.json')} 
        autoPlay
        loop
      />
      <Text marginB-16 blue700 medium h1 center>
        {title ? title : 'Great!'}
      </Text>
      <Text white body1 blue700 bold center marginB-40 style={styles.label}>
        {message}
      </Text>
      <Button
        buttonStyle={styles.btn}
        labelStyle={styles.btnText}
        title={buttonLabel || 'Go to home'}
        onPress={() => navigation.navigate(type === 'auth' ? 'login' : 'Dashboard')}
      />
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: {},
  icon: {
    width: ms(80),
    height: ms(80),
    marginBottom: ms(40),
  },
  label: {
    textAlign: 'center',
    width: '90%',
    lineHeight: 24,
    fontWeight: '500',
  },
  btn: {
    backgroundColor: Colors.blue700,
    paddingHorizontal: ms(20),
    borderRadius: 24,
  },
  btnText: {
    color: Colors.white,
    fontWeight: '400',
  },
});
