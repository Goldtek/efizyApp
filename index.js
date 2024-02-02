import * as React from 'react';
import {AppRegistry} from 'react-native';
import Reactotron from 'reactotron-react-native';
import 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import ToastRoot from './src/lib/ToastRoot';
import AppFromRouter from './src/App';
import {QueryClient, QueryClientProvider} from 'react-query';
import {name as appName} from './app.json';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppFromRouter />
      <Toast />
      {/* <ToastRoot /> */}
    </QueryClientProvider>
  );
}

if (__DEV__) {
    import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
    console.tron = Reactotron.log;
  }

AppRegistry.registerComponent(appName, () => App);
