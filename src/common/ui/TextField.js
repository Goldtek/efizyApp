import React, {Component} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {hp, wp} from '../utils';
import * as colors from './Colors';
import {Text} from './Text';
import {ClosedPasswordEyeSvg} from '../../../assets/icons';

class TextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: props.value && props.value.length === 0,
      borderColor: colors.Platinum,
      borderWidth: 0.5,
      secureTextEntry: !!props.rightIcon,
      securedText: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleIconPress = this.handleIconPress.bind(this);
  }

  handleChange(ev) {
    this.setState({placeholder: ev.nativeEvent.text.length === 0});
    this.props.onChange && this.props.onChange(ev);
  }

  handleFocus() {
    if (this.props.onFocus) {
      this.props.onFocus();
    }
    this.setState({borderColor: colors.DarkBlue, borderWidth: 1});
  }

  handleBlur() {
    if (this.props.onBlur) {
      this.props.onBlur();
    }
    this.setState({borderColor: colors.Platinum, borderWidth: 0.5});
  }

  handleIconPress() {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry,
      securedText: !this.state.securedText,
    });
  }

  render() {
    const {
      inputStyle,
      onChange,
      style,
      rightIcon,
      leftText,
      onFocus,
      onBlur,
      error,
      placeholderTextColor,
      showErrorMsg = true,
      renderRightIcon,
      errorMessageStyle,
      disabled,
      ...rest
    } = this.props;
    const {
      placeholder,
      borderColor,
      borderWidth,
      secureTextEntry,
      securedText,
    } = this.state;
    const primaryIcon = this.props.rightIcon;
    const secondaryicon = <ClosedPasswordEyeSvg />;

    return (
      <>
        <View
          style={[
            styles.view,
            rightIcon ? {paddingLeft: wp(12)} : null,
            leftText ? {paddingLeft: wp(14)} : null,
            style,
          ]}>
          {this.props.leftText ? (
            <Text style={styles.leftText}>{this.props.leftText}</Text>
          ) : (
            <>
              {this.props.icon && (
                <>
                  <View style={styles.icon}>{this.props.icon}</View>
                  <View style={styles.iconBorder} />
                </>
              )}
            </>
          )}
          <TextInput
            {...rest}
            autoCompleteType="off"
            onChange={this.handleChange}
            style={[
              styles.textInput,
              inputStyle,
              // eslint-disable-next-line react-native/no-inline-styles
              placeholder && {fontSize: 12},
              {borderColor, borderWidth},
              rightIcon ? {marginRight: -wp(30)} : null,
              this.props.leftText
                ? {marginLeft: -wp(39), paddingLeft: wp(50)}
                : null,

              error && {borderColor: colors.Red},
            ]}
            placeholderTextColor={placeholderTextColor || colors.LightGrey}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            secureTextEntry={secureTextEntry}
            autoCapitalize="none"
          />
          {!renderRightIcon && this.props.rightIcon && (
            <TouchableOpacity
              style={styles.rightIcon}
              onPress={this.handleIconPress}>
              {securedText ? primaryIcon : secondaryicon}
            </TouchableOpacity>
          )}

          {renderRightIcon && this.props.rightIcon && (
            <TouchableOpacity style={styles.rightIcon}>
              {primaryIcon}
            </TouchableOpacity>
          )}
        </View>
        {showErrorMsg && error ? (
          <Text style={styles.errorMessage}> {error} </Text>
        ) : null}
      </>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: hp(30),
    paddingLeft: wp(9), // TextField Container-surround spacing
  },
  icon: {
    zIndex: 50,
    width: wp(36),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBorder: {
    width: 0.5,
    backgroundColor: colors.Platinum,
    height: hp(46),
    zIndex: 50,
  },
  leftText: {
    zIndex: 50,
    fontSize: 12,
  },
  rightIcon: {
    height: hp(50),
    width: wp(30),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 50,
  },
  textInput: {
    height: hp(50),
    width: wp(325),
    color: colors.BlackCoral,
    backgroundColor: colors.White,
    borderColor: colors.grey600,
    borderRadius: 10,
    borderWidth: 0.5,
    fontStyle: 'normal',
    fontSize: 14,
    fontWeight: 'normal',
    marginLeft: -wp(37.67), // Space between Icon and Border
    paddingLeft: wp(20), // Space Between Icon and PlaceHolder/Text
  },
  label: {
    fontSize: 16,
    marginTop: hp('0.8%'),
    color: '#616161',
  },
  placeholderStyle: {
    height: hp(50),
    width: wp(325),
    backgroundColor: colors.White,
    borderColor: colors.Platinum,
    borderRadius: 4,
    borderWidth: 0.5,
    paddingLeft: wp(35),
    marginLeft: -wp(25.67),
    fontStyle: 'normal',
    fontSize: 12,
    // marginRight: -wp(30),
  },
  errorMessage: {
    color: colors.Red,
    marginTop: hp(10),
    alignSelf: 'flex-start',
    marginLeft: wp(20),
  },
});

export {TextField};
