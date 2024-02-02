import React, {useRef} from 'react';
import {StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {Text, Colors, View} from 'react-native-ui-lib';
import {Flag} from '@ladislavbohm/react-native-flagkit';
import Icon from 'react-native-vector-icons/Ionicons';
import {useColor} from './Colors';
import {ms} from './utils';
import {BottomSheet} from './BottomSheet';
import {BackHeader} from './Header';

export const TextInput = ({children, style, black, purple, ...props}) => {
  const styles = useStyles();
  return (
    <Text
      style={[
        styles.text,
        black && styles.blackText,
        purple && styles.purpleText,
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export const RegularText = ({text, style, color, size, ...props}) => {
  const styles = useStyles();
  return (
    <Text
      style={[styles.regular, style, size && {fontSize: size}]}
      color={color || Colors.black}
      {...props}>
      {text}
    </Text>
  );
};

export const MediumText = ({text, style, color, size, ...props}) => {
  const styles = useStyles();
  return (
    <Text
      style={[styles.medium, style, size && {fontSize: size}]}
      color={color || Colors.black}
      {...props}>
      {text}
    </Text>
  );
};

export const BoldText = ({text, style, color, size, ...props}) => {
  const styles = useStyles();
  return (
    <Text
      style={[styles.bold, style, size && {fontSize: size}]}
      color={color || Colors.black}
      {...props}>
      {text}
    </Text>
  );
};

export const CurrencySelector = ({
  selected,
  placeholder,
  onSelect,
  height,
  currencies,
  label,
}) => {
  const openRef = useRef();

  const setSelected = item => {
    onSelect(item);
    openRef.current?.close();
  };

  return (
    <View>
      <View style={styles.select}>
        <RegularText
          text={label || 'Currency'}
          size={14}
          marginB-4
          color={Colors.black}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.selectBtn}
          onPress={() => openRef.current?.open()}>
          <View row centerV>
            {selected ? (
              <>
                <View style={styles.flag} marginR-8>
                  <Flag id={selected.currency} size={0.2} />
                </View>
                <RegularText text={selected.currency} size={14} />
              </>
            ) : (
              <>
                <RegularText
                  text={placeholder}
                  size={14}
                  marginL-8
                  color={Colors.paleSky}
                />
              </>
            )}
          </View>
          <View style={styles.chevronDown}>
            <Icon name="chevron-down" size={16} color="#6C757D" />
          </View>
        </TouchableOpacity>
      </View>

      <BottomSheet
        sheetRef={openRef}
        height={height || 773}
        render={
          <View>
            <BackHeader
              title="Choose Currency"
              backAction={() => openRef.current?.close()}
              closeIcon
            />
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={styles.countryScroll}
              contentContainerStyle={{paddingBottom: 100}}>
              {currencies.map((currency, index) => (
                <TouchableOpacity
                  key={index}
                  row
                  paddingV-10
                  marginB-14
                  centerV
                  activeOpacity={0.8}
                  onPress={() => setSelected(currency)}>
                  <View style={styles.flag} marginR-16>
                    <Flag id={currency.currency} size={0.2} />
                  </View>
                  <MediumText text={currency.currency} />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        }
      />
    </View>
  );
};

const useStyles = () => {
  const colors = useColor();
  return StyleSheet.create({
    text: {
      color: colors.text,
      fontFamily: 'DMSans-Medium',
    },
    blackText: {
      color: colors.black,
    },
    purpleText: {
      color: colors.purple,
    },
    regular: {
      fontFamily: 'DMSans-Regular',
      fontSize: 16,
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'DMSans-Medium',
      fontSize: 14,
      fontWeight: '500',
    },
    bold: {
      fontFamily: 'DMSans-Bold',
      fontSize: 24,
      fontWeight: '700',
    },
  });
};

const styles = StyleSheet.create({
  quantityBtn: {
    backgroundColor: '#EFEEFF',
    borderRadius: ms(24),
    width: ms(32),
    height: ms(32),
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityBox: {
    width: ms(50),
    height: ms(32),
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantity: {},
  selectScroll: {
    paddingTop: ms(10),
  },
  listItem: {
    paddingVertical: ms(20),
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
  },
  chevronDown: {
    position: 'absolute',
    right: ms(16),
  },
  inputWrapper: {
    // marginBottom: ms(16),
  },
  textarea: {
    borderRadius: ms(8),
    borderColor: '#E2E4E8',
    borderWidth: 1,
    paddingHorizontal: ms(16),
    paddingTop: ms(14),
    height: ms(98),
    backgroundColor: '#fff',
  },
  input: {
    borderColor: '#E2E4E8',
    borderWidth: 1,
    borderRadius: ms(8),
    height: ms(48),
    paddingLeft: ms(16),
    backgroundColor: '#fff',
    color: Colors.black,
  },
  rightIcon: {
    position: 'absolute',
    right: 16,
    bottom: 16.5,
  },
  disableInput: {
    backgroundColor: '#EEEFF2',
    borderColor: '#E2E4E8',
    borderWidth: 1,
  },
  errorInput: {
    borderColor: 'red',
  },
  amountInput: {
    width: '88%',
    height: '100%',
    color: Colors.black,
    fontFamily: 'DMSans-Regular',
    fontSize: 14,
    lineHeight: ms(21),
  },
  amountText: {
    position: 'absolute',
    right: 16,
    top: 14,
  },
  select: {
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  countryScroll: {
    // backgroundColor: 'pink',
    paddingVertical: ms(30),
  },
  selectBtn: {
    height: ms(48),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#E2E4E8',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: ms(8),
    paddingHorizontal: ms(16),
  },
  disabledSelect: {
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  sheet: {
    paddingTop: ms(11),
    paddingHorizontal: ms(24),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: ms(24),
  },
  dash: {
    width: ms(48),
    height: ms(5),
    borderRadius: ms(8),
    backgroundColor: '#D4D8DC',
    alignSelf: 'center',
    marginBottom: ms(24),
  },
  closeBtn: {
    paddingVertical: ms(10),
    paddingHorizontal: ms(10),
    position: 'absolute',
    left: 10,
  },
  search: {
    borderColor: '#E2E4E8',
    borderWidth: 1,
    borderRadius: ms(8),
    paddingLeft: ms(16),
    flexDirection: 'row',
    alignItems: 'center',
    height: ms(48),
    width: '100%',
    backgroundColor: '#fff',
  },
  searchInput: {
    height: '100%',
    paddingLeft: ms(14),
    width: '100%',
    fontFamily: 'DMSans-Regular',
  },
  flag: {
    width: ms(24),
    height: ms(24),
    borderRadius: ms(12),
    backgroundColor: 'red',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gcIcon: {
    width: ms(64),
    height: ms(44),
    borderRadius: ms(6),
    marginRight: 16,
  },
  errorText: {
    marginTop: ms(2),
  },
  bounceActiveTextStyle: {
    textDecorationLine: 'none',
    fontWeight: '600',
    color: Colors.Text,
  },
  bounceInActiveTextStyle: {
    textDecorationLine: 'none',
  },
  checkoutIcon: {
    borderColor: Colors.purple,
    borderRadius: 12,
  },
});
