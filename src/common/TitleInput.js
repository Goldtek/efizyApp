import React from 'react';
import { Colors, View, Text } from 'react-native-ui-lib';
import { Platform, TextInput, TouchableOpacity } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ms, calculateOpacity } from './utils';

export const TitleInput = props => {
  let [state, setState] = React.useState({ focused: false });

  const {
    onIconPress,
    iconName,
    children,
    editable,
    backgroundColor,
    maxLength,
    error,
    onChangeText,
    height,
    inputTitle,
    inputSubTitle,
    reference,
    defaultValue,
    keyboardType,
    showIcon,
    onBlur,
    valid,
    info,
    onMaxPress,
    placeholder,
    showLeftIcon,
    infoStyle,
    leftIconName,
    placeholderTextColor,
    noMarginBottom,
    noInputTitle,
    extraBottomMargin
  } = props;

  let { value, multiline, numberOfLines, secureTextEntry } = props;
  if (numberOfLines == undefined) {
    numberOfLines = 1;
  }

  return (
    <View>
      {noInputTitle ? null : <Text style={[styles.titleText, {color: Colors.black}]}>{inputTitle}</Text>}
      {inputSubTitle && <Text style={[styles.subTitleText, {color: Colors.TEXTPRIMARY}]}>{'(' + inputSubTitle + ')'}</Text>}

      <View
        ref={reference}
        style={[
          styles.viewStyle,
          {
            height:
              height == undefined ? ms(50) * numberOfLines : height,
            marginTop: 10,
            marginBottom: noMarginBottom ? 0 : 30,
            borderColor: '#E2E4E8',
            borderRadius: 10,
            borderWidth: 1,
            backgroundColor:
              backgroundColor == undefined
                ? Colors.white + calculateOpacity(10)
                : backgroundColor,
          },
        ]}>
        {showLeftIcon && (
          <View style={styles.iconLeft}>
            <TouchableOpacity onPress={() => { }}>
              <MaterialCommunityIcon
                name={leftIconName}
                size={20}
                style={{ color: '#E2E4E8' }}
              />
            </TouchableOpacity>
          </View>
        )}
        <TextInput
          // {...props}
          editable={editable}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          value={defaultValue}
          placeholderTextColor={placeholderTextColor || '#8A8A8A'}
          placeholder={placeholder}
          multiline={multiline}
          secureTextEntry={secureTextEntry}
          autoCapitalize="none"
          numberOfLines={numberOfLines}
          maxLength={maxLength ? maxLength : 100}
          onFocus={() => {
            setState({ focused: true });
          }}
          onBlur={
            onBlur
              ? onBlur
              : () => {
                setState({ focused: false });
              }
          }
          style={{
            fontSize: 14,
            color: Colors.black,
            marginTop: Platform.OS === 'android' ? 0 : 16,
          width: '90%',
          alignSelf: 'center',
            paddingLeft: showLeftIcon ? 40 : 10,
          }}
        />
        {children}
        {showIcon && (
          <View style={styles.iconRight}>
            <TouchableOpacity onPress={onIconPress}>
              <MaterialCommunityIcon
                name={iconName}
                size={20}
                style={{ color: '#E2E4E8' }}
              />
            </TouchableOpacity>
          </View>
        )}
        {onMaxPress && (
          <TouchableOpacity onPress={onMaxPress} style={styles.iconRight}>
            <Text style={[styles.maxTxt, {color: Colors.BLUE_WHITE_TEXT}]}>Max</Text>
          </TouchableOpacity>
        )}
        {extraBottomMargin && <View style={{margin: 10}}/> }
        {error ? <Text style={[styles.errorMsg, {color: Colors.RED}]}> {error}</Text> : null}
        {valid ? <Text style={[styles.successMsg, {color: Colors.DARKGREENTEXT}]}> {valid}</Text> : null}
        {info ? <Text style={[styles.infoMsg, infoStyle, {color: Colors.PRIMARY_SECONDARY}]}> {info}</Text> : null}
      </View>
      
    </View>
  );
};

const styles = {
  viewStyle: {
    borderWidth: 1,
    marginTop: ms(15),
    borderRadius: ms(7),
    marginBottom: 10
  },
  styleActive: {
    marginLeft: ms(15),
    marginRight: 0,
    paddingLeft: ms(5),
    paddingRight: ms(5),
    marginTop: ms(-13),
    alignSelf: 'flex-start',
  },
  titleText: {
    fontSize: 14,
   // fontFamily: FONTFAMILYREGULAR,
    // marginLeft: 5
  },
  subTitleText: {
    fontSize: 12,
  //  fontFamily: FONTFAMILYREGULAR,
    marginTop: 5
  },
  errorMsg: {
 //   fontFamily: FONTFAMILYREGULAR,
    fontSize: 13,
    marginTop: 5,
    marginBottom: 10,
  },
  successMsg: {
   // fontFamily: FONTFAMILYREGULAR,
    fontSize: 13,
    marginTop: 10,
    marginBottom: 10,
  },
  infoMsg: {
  //  fontFamily: FONTFAMILYMEDIUM,
    fontSize: 13,
    marginTop: 10,
    marginBottom: 10,
  },
  maxTxt: {
   // fontFamily: FONTFAMILYMEDIUM,
  },
  iconRight: {
    position: 'absolute',
    right: 17,
    bottom: 0,
    top: 0,
    justifyContent: 'center',
  },
  iconLeft: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    top: 0,
    left: 10,
    justifyContent: 'center',
  },
};
