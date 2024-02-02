import React from 'react';
import { CommonActions } from '@react-navigation/native';

export const navigationRef = React.createRef();

export const navigate = () => {
  // navigationRef.current?.resetRoot({
  //   index: 0,
  //   routes: [{ name: 'Dashboard' }],
  // });

  navigationRef?.dispatch((state) => {
    const routes = [{ name: 'Dashboard' }, ...state.routes];
    return CommonActions.reset({
      ...state,
      routes,
      index: 0,
    });
  });
}
