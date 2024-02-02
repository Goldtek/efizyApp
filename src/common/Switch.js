import React from 'react';
import {Colors, Text, View} from 'react-native-ui-lib';
import ToggleSwitch from 'toggle-switch-react-native';

export const Switch = ({label, labelColor, isOn, onChange}) => (
  <View row spread centerV marginV-17>
    <Text p1 color={labelColor || Colors.black} marginR-16>
      {label}
    </Text>
    <ToggleSwitch
      isOn={isOn}
      onColor="#372AA4"
      offColor="#E2E8F0"
      size="small"
      onToggle={onChange}
    />
  </View>
);
