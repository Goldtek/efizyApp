import {
  FETCH_USER,
  LOGIN_SUCCESS,
  LOG_OUT,
  FETCH_USER_BALANCE,
  STORE_USER_ERROR_MSG,
  STORE_SECRETS,
  STORECREDS,
  GOOGLE_AUTH,
} from '../actions/action-types';

const initialState = {
  user: {},
  loading: true,
  errorMessage: null,
  step: '',
  bvn: '',
  token: '',
  refreshToken: '',
  secret: '',
  balance: 0,
  isAuthenticated: false,
  credentails: null,
  google_auth: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };

      case STORE_SECRETS:
        return {
          ...state,
          token: action.payload.token,
          secret: action.payload.secret,
          refreshToken: action.payload.refreshToken,
        };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case STORE_USER_ERROR_MSG:
      return {
        ...state,
        errorMessage: action.payload,
      };

    case FETCH_USER_BALANCE:
      return {
        ...state,
        balance: action.payload,
      };


    case STORECREDS:
      return {
        ...state,
        credentails: action.payload,
      };

    case GOOGLE_AUTH:
      return {
        ...state,
        google_auth: action.payload,
      };

    case LOG_OUT:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default UserReducer;
