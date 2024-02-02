import React, {useEffect} from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import Root from './screens/root';
// import SplashScreen from 'react-native-splash-screen';
import {store, persistor} from '../store';

const App = () => {
  useEffect(() => {
    // SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Root />
      </PersistGate>
    </Provider>
  );
};

export default App;
