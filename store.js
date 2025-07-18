import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';

import allReducers from './src/reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user', 'bill'],
};
const middlewares = [thunk];
const enhancers = applyMiddleware(...middlewares);

const persistedReducer = persistReducer(persistConfig, allReducers);

const store = createStore(persistedReducer, compose(enhancers));
const persistor = persistStore(store);

export {store, persistor};
