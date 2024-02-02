import {
  widthPercentageToDP as wdp,
  heightPercentageToDP as hdp,
} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import accounting from 'accounting';
import getSymbolFromCurrency from 'currency-symbol-map';
import {useState} from 'react';

const CustomHeight = 812 - 44;
const CustomWidth = 375;

const lowercaseTest = new RegExp('(?=.*[a-z])');
const uppercaseTest = new RegExp('(?=.*[A-Z])');
const numberTest = new RegExp('(?=.*[0-9])');
const specialCharactersTest = new RegExp('(?=.*[!@#$%^&*/\\\\)(+=._-])');
const lengthTest = new RegExp('(?=.{8,})');

export const ms = number => moderateScale(number);

export const capitalize = value => {
  return value && value[0] ? value[0].toUpperCase() + value.slice(1) : value;
};

export const calculateOpacity = percentage => {
  let maxColorValue = 255;
  let opacity = (percentage * maxColorValue) / 100.0;
  let value = parseInt(opacity).toString(16);
  return value;
};

export const moneyFormat = (amount, precision = 0) => {
  return accounting.formatMoney(amount, '', precision);
  // return new Intl.NumberFormat('en-US', {}).format(Number(amount));
};

export const nairaFormat = (amount, precision = 0) => {
  return `₦${accounting.formatMoney(amount, '', precision)}`;
};

export const hp = value => {
  const dimension = (value / CustomHeight) * 100;
  return hdp(`${dimension}%`);
};

export const wp = value => {
  const dimension = (value / CustomWidth) * 100;
  return wdp(`${dimension}%`);
};

const emailValidator = email => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const validateEmail = email => {
  if (emailValidator(email)) {
    return true;
  }
  return false;
};

export const passwordTests = password => {
  const values = {
    length: false,
    lowercase: false,
    number: false,
    special: false,
    uppercase: false,
  };
  if (lowercaseTest.test(password)) {
    values.lowercase = true;
  }
  if (uppercaseTest.test(password)) {
    values.uppercase = true;
  }
  if (numberTest.test(password)) {
    values.number = true;
  }
  if (specialCharactersTest.test(password)) {
    values.special = true;
  }
  if (lengthTest.test(password)) {
    values.length = true;
  }
  return values;
};

export const obscureEmail = email => {
  const [name] = email.split('@');
  return `${name}@***`;
  // return `${name[0]}${new Array(name.length).join('*')}@${domain}`;
};

export const useMergedState = initialState => {
  const [state, setState] = useState(initialState);
  const setMergedState = newState =>
    setState(prevState => Object.assign({}, prevState, newState));
  return [state, setMergedState];
};

export const groupItems = items => {
  const allItems = items.reduce((memo, curr) => {
    const {delivery, cart_code, image_url, isOpen, isChecked, name} = curr;
    if (isChecked) {
      if (!memo[cart_code]) {
        memo[curr.cart_code] = {
          cart_code,
          delivery,
          quantity: 1,
          images: [{url: image_url, name}],
          isOpen,
        };
      } else {
        memo[curr.cart_code].quantity += 1;
        memo[curr.cart_code].images.push({url: image_url, name});
      }
    }
    return memo;
  }, {});

  const newItems = Object.keys(allItems).map(key => allItems[key]);
  return newItems;
};

export const getCurrencySign = currency => {
  return getSymbolFromCurrency(currency) || '$';
};

export const getBundleBasedOnProvider = (
  data,
  selectedBill,
  key = 'group_name',
) => {
  if (!selectedBill) {
    return data;
  }

  const filtered = data.filter(item => {
    return item[key].toLowerCase().includes(selectedBill[key].toLowerCase());
  });
  return filtered;
};

// export const getBeneficiaries = async (
//   service = 'airtime-bill-payment',
//   product = 'bills-payment',
// ) => {
//   try {
//     const { data } = await apiService(getBillsBeneficiaries(product), 'get');
//     getRequestActionType(service, data);
//   } catch (error) {
//     console.log('bene', error);
//   }
// };


// const getRequestActionType = (service: string, data: []) => {
//   switch (service) {
//     case 'airtime-bill-payment':
//       return store.dispatch(addAirtimeBeneficiaries(data));
//     case 'mobile-data-bill-payment':
//       return store.dispatch(addDataBeneficiaries(data));
//     case 'internet-service-bill-payment':
//       return store.dispatch(addInternetBeneficiaries(data));
//     //   };
//     // case 'airtime-to-cash':
//     //   return { request: GET_AIRTIME_TO_CASH_BENEFICIARIES };

//     // case 'cable-bill-payment':
//     //   return {
//     //     request: GET_CABLE_BILL_BENEFICIARIES,
//     //     success: GET_CABLE_BILL_BENEFICIARIES_SUCCESS,
//     //     error: GET_CABLE_BILL_BENEFICIARIES_ERROR,
//     //   };

//     // case 'electricity-bill-payment':
//     //   return {
//     //     request: GET_ELECTRICITY_BILL_BENEFICIARIES,
//     //     success: GET_ELECTRICITY_BILL_BENEFICIARIES_SUCCESS,
//     //     error: GET_ELECTRICITY_BILL_BENEFICIARIES_ERROR,
//     //   };

//     // case 'education-bill-payment':
//     //   return {
//     //     request: GET_EDUCATION_BENEFICIARIES,
//     //     success: GET_EDUCATION_BENEFICIARIES_SUCCESS,
//     //     error: GET_EDUCATION_BENEFICIARIES_ERROR,
//     //   };

//     default:
//       throw new Error('Provide a service');
//   }
// };
