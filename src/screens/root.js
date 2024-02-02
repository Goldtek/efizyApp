/* eslint-disable no-nested-ternary */
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';

import Splash from './splash';
import { navigationRef } from '../navigation/navigationService';
import {PublicNavigator, PrivateNavigator} from '../navigation';

// create screen for signup
// create screen for intro

const Root = props => {
  const [isLoading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    checkAuth();
  });

  const checkAuth = () => {
    const { user: { isAuthenticated } } = props;
    setLoggedIn(isAuthenticated);
  };

  return (
    <NavigationContainer ref={navigationRef}>
      {isLoading ? (
        <Splash />
      ) : // check if loggedIn or not
      loggedIn ? (
        <PrivateNavigator />
      ) : (
        <PublicNavigator />
      )}
    </NavigationContainer>
  );
};

const mapStateToProps = ({user}) => ({
  user,
});

export default connect(mapStateToProps)(Root);
