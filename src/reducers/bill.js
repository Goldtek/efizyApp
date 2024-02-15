import {
GET_AIRTIME_SERVICE_PROVIDER,
GET_DISCOS,
GET_INTERNET_SERVICE_PROVIDER,
LOG_OUT,
GET_INTERNET_PLANS
} from '../actions/action-types';

const initialState = {
  airtimeServiceProvider: [],
  dataPlans: [],
  internetServiceProvider: [],
  discos: [],

};

const BillReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AIRTIME_SERVICE_PROVIDER:
      return {
        ...state,
        airtimeServiceProvider: action.payload,
      };

      case GET_DISCOS:
        return {
          ...state,
          discos: action.payload,
        };

    case GET_INTERNET_SERVICE_PROVIDER:
      return {
        ...state,
        internetServiceProvider: action.payload,
      };

    case GET_INTERNET_PLANS:
      return {
        ...state,
       dataPlans: action.payload,
      };

    case LOG_OUT:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default BillReducer;
