import React from 'react'
import { Colors } from 'react-native-ui-lib';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message'


const toastConfig = {
    /* 
      overwrite 'success' type,  
      modifying the existing `BaseToast` component
    */
    success: ({ text1, props, ...rest }) => (
      <BaseToast
        {...rest}
        style={{ borderLeftColor: Colors.white }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 16,
          fontWeight: '500'
        }}
        text2Style={{
          fontSize: 22
          }}
        text1={text1}
        text2={props.uuid}
        visibilityTime = {4000}
        
      />
    ),
  
    /*
      Reuse the default ErrorToast toast component
    */
    error: (props) => (
      <ErrorToast
        {...props}
        style={{ borderLeftColor: Colors.red }}
        text1Style={{
            fontSize: 16,
            fontWeight: '500'
          }}
          text2Style={{
              fontSize: 22
            }}
          visibilityTime = {4000}
      />
    )
  };

const ToastRoot = () => {
  return (
    <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
  )
}

export default ToastRoot