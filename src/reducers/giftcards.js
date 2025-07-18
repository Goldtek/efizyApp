import {
  FETCH_USER,
  LOGIN_SUCCESS,
  LOG_OUT,
  STORE_USER_ERROR_MSG,
} from '../actions/action-types';

const initialState = {
  user: {},
  loading: true,
  errorMessage: '',
  step: '',
  bvn: '',
};

const GiftCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_USER_ERROR_MSG:
      return {
        ...state,
        errorMessage: action.message,
      };

    case LOG_OUT:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default GiftCardReducer;
