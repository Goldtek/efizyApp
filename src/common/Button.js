import React from 'react';
import {StyleSheet, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {View} from 'react-native-ui-lib';
import {useColor} from './Colors';
import {ms} from './utils';

export const Button = ({
  title,
  bgColor,
  color,
  outline,
  textOnly,
  isLabel,
  disabled,
  style,
  onPress,
  testID,
  labelStyle,
  buttonStyle,
  Icon,
  transparent,
  isLoading,
  loaderSize,
  ...props
}) => {
  const styles = useStyles();
  const handlePress = () => {
    if (disabled) {
      return;
    }
    onPress();
  };

  const computeStyles = () => {
    if (isLabel) {
      return {
        button: [
          styles.button,
          styles.isLabel,
          style,
          disabled && styles.disabled,
        ],
        label: styles.outlineLabel,
      };
    }

    if (textOnly) {
      return {
        button: [
          styles.button,
          styles.textOnly,
          style,
          disabled && styles.disabled,
        ],
        label: styles.outlineLabel,
      };
    }

    if (outline) {
      return {
        button: [
          styles.button,
          styles.outline,
          style,
          disabled && styles.disabled,
        ],
        label: styles.outlineLabel,
      };
    }

    return {
      button: [
        styles.button,
        style,
        bgColor ? {backgroundColor: bgColor} : null,
        disabled ? styles.disabled : null,
      ],
      label: [styles.labelStyle, color ? {color} : undefined],
    };
  };

  const buttonStyles = computeStyles();

  return (
    <TouchableOpacity
      style={[
        buttonStyles.button,
        transparent && styles.transparentBtn,
        buttonStyle,
      ]}
      onPress={handlePress}
      activeOpacity={disabled ? 1 : 0.7}
      testID={testID}
      {...props}>
      <View style={styles.row}>
          {!isLoading ? (
            <>
            <View marginT-2>
            {Icon ? <Icon style={styles.icon} /> : null}
           </View>
           <Text
             style={[
               buttonStyles.label,
               labelStyle,
               transparent && styles.transparentText,
             ]}> {title} </Text>
             </>
        ) : (
          <ActivityIndicator
            color={'#ffffff'}
            size={!loaderSize ? 'large' : loaderSize}
          />
        )} 
       
      </View>
    </TouchableOpacity>
  );
};

const useStyles = () => {
  const colors = useColor();
  return StyleSheet.create({
    button: {
      borderRadius: 8,
      height: ms(48),
      backgroundColor: colors.blue700,
      justifyContent: 'center',
      alignItems: 'center',
    },
    transparentBtn: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: colors.blue700,
    },
    transparentText: {
      color: colors.blue700,
    },
    outline: {
      backgroundColor: colors.transparent,
      borderWidth: 0.5,
      borderColor: colors.blue700,
    },
    isLabel: {
      borderRadius: 24,
      backgroundColor: colors.white,
      alignSelf: 'flex-start',
      paddingHorizontal: 20,
      shadowColor: 'rgba(44, 36, 8)',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.12,
      shadowRadius: 16,
      elevation: 5,
    },
    textOnly: {
      backgroundColor: colors.transparent,
    },
    disabled: {
      opacity: 0.3,
    },
    labelStyle: {
      fontFamily: 'DMSans-Medium',
      fontSize: 16,
      lineHeight: 21,
      color: colors.white,
    },
    outlineLabel: {
      fontFamily: 'DMSans-Medium',
      fontSize: 16,
      lineHeight: 21,
      color: colors.blue700,
    },
    row: {
      flexDirection: 'row',
    },
    icon: {
      width: 15,
      height: 12,
      marginRight: 12,
      color: colors.white,
      verticalAlign: 'middle',
    },
  });
};
