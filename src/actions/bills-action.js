import { GET_AIRTIME_SERVICE_PROVIDER, GET_DISCOS, GET_INTERNET_SERVICE_PROVIDER, GET_INTERNET_PLANS } from "./action-types";
import { store } from "../../store";


export const storeAirtimeProviders = (providers) => {
  store.dispatch({
      type: GET_AIRTIME_SERVICE_PROVIDER,
      payload: providers,
    });
}

export const storeDiscos = (providers) => {
  store.dispatch({
      type: GET_DISCOS,
      payload: providers,
    });
}

export const storeISPProviders = (providers)  => {
  store.dispatch({
      type: GET_INTERNET_SERVICE_PROVIDER,
      payload: providers,
    });
}


export const storePlans = (plans)  => {
  store.dispatch({
      type: GET_INTERNET_PLANS,
      payload: plans,
    });
}
