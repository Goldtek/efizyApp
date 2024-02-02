import React from 'react';
import {View, Image, ActivityIndicator} from 'react-native';

import styles from './styles';
// import logo from '../../../assets/images/logo.png';

const Splash = () => (
  <View style={styles.container}>
    {/* <Image source={logo} style={styles.logo} /> */}
    <ActivityIndicator size="large" color={'red'} />
  </View>
);

export default Splash;
