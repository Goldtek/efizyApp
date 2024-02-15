import {combineReducers} from 'redux';

import User from './user';
import giftcards from './giftcards';
import Bill from './bill'

export default combineReducers({
  bill: Bill,
  user: User,
  giftcards,
});
