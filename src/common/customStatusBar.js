import React from "react";
import { StatusBar } from "react-native";
import { View } from "react-native-ui-lib";
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export const CustomStatusBar = ({backgroundColor, barStyle}) => {
    const insets = useSafeAreaInsets();
    return (
      <View style={{height: insets.top, backgroundColor}}>
        <StatusBar
          animated={true}
          barStyle={barStyle}
          backgroundColor={backgroundColor}
        />
      </View>
    );
  };
  
