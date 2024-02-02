import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Text} from './Text';
import {hp, wp} from '../utils';
import {VerifiedSvg} from '../../../assets/icons';
import {useColor} from './Colors';

const Input = ({
  error,
  style,
  value,
  keyboardType,
  placeholder,
  label,
  inputStyle,
  inputContainerStyle,
  isEditable = true,
  isValid,
  onChange,
  onChangeText,
  maxLength,
  onFocus,
  onBlur,
  leftIcon,
  rightIcon,
  placeholderTextColor,
  noBorder,
  customInputStyle,
  verifiedIconStyle,
  returnKeyType = 'done',
  ...rest
}) => {
  const styles = useStyles();
  const colors = useColor();
  const [isInFocus, setFocus] = useState(false);

  const handleFocus = () => {
    if (onFocus) {
      onFocus();
    }
    setFocus(true);
  };

  const handleBlur = () => {
    if (onBlur) {
      onBlur();
    }
    setFocus(false);
  };

  return (
    <View style={inputContainerStyle}>
      {label && <Text style={[styles.label]}>{label}</Text>}
      <View
        style={[
          styles.textInput,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            backgroundColor: isEditable ? colors.white : colors.Snow300,
            borderWidth: isEditable ? 0.5 : 0,
          },
          style,
          isInFocus && styles.isInFocus,
          noBorder && styles.borderwidth,
          error && styles.errorContainer,
        ]}>
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
        <TextInput
          {...rest}
          autoCorrect={false}
          value={value}
          placeholder={placeholder}
          editable={isEditable}
          style={[styles.input, inputStyle, customInputStyle]}
          keyboardType={keyboardType}
          maxLength={maxLength}
          onChange={onChange}
          onChangeText={onChangeText}
          placeholderTextColor={placeholderTextColor || colors.lightish}
          onFocus={handleFocus}
          onBlur={handleBlur}
          returnKeyType={returnKeyType}
        />
        {isValid && (
          <View style={[styles.icon, verifiedIconStyle]}>
            <VerifiedSvg />
          </View>
        )}
        {rightIcon && <View style={styles.icon}>{rightIcon}</View>}
      </View>
      {error ? <Text style={[styles.errorMessage]}>{error}</Text> : null}
    </View>
  );
};
const useStyles = () => {
  const colors = useColor();
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    label: {
      color: colors.brand,
      fontSize: 14,
      marginBottom: hp(10),
    },
    textInput: {
      fontSize: hp(12),
      backgroundColor: 'white',
      height: hp(48),
      borderColor: colors.grey600,
      borderRadius: 10,
      marginBottom: hp(24),
      paddingHorizontal: 16,
      display: 'flex',
      flexDirection: 'row',
      fontStyle: 'normal',
      fontFamily: 'DMSans-Medium',
    },
    input: {
      fontSize: 14,
      fontFamily: 'DMSans-Medium',
      color: colors.black,
      fontStyle: 'normal',
      borderColor: colors.grey600,
      width: wp(325),
      borderRadius: 4,
    },
    activeinput: {
      fontFamily: 'DMSans-Medium',
      color: colors.grey600,
    },
    icon: {
      alignSelf: 'center',
      marginLeft: wp(-38),
    },
    leftIcon: {
      alignSelf: 'center',
      marginRight: wp(12),
    },
    errorMessage: {
      color: colors.red,
      marginTop: hp(13),
      fontFamily: 'DMSans-Medium',
    },

    isInFocus: {
      borderColor: colors.black,
      borderWidth: 1,
    },
    errorContainer: {
      borderWidth: 1,
      borderColor: colors.red,
    },
    borderwidth: {borderWidth: 0},
  });
};

export {Input};
