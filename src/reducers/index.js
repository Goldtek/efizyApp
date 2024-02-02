import {combineReducers} from 'redux';

import User from './user';
import giftcards from './giftcards';

export default combineReducers({
  user: User,
  giftcards,
});
