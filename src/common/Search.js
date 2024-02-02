import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {View} from 'react-native-ui-lib';
import {ms} from './utils';
import {SearchIcon} from '../../assets/icons';

export const Search = ({placeholder, value, onChange, style}) => (
  <View style={[styles.search, style]} marginT-10 marginB-20>
    <SearchIcon size={14} />
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
      placeholderTextColor="#6C757D"
      style={styles.searchInput}
    />
  </View>
);

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

  listItem: {
    paddingVertical: ms(10),
  },
  input: {
    borderColor: '#E2E4E8',
    borderWidth: 1,
    borderRadius: ms(8),
    height: ms(48),
    paddingLeft: ms(16),
    backgroundColor: '#fff',
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
  search: {
    borderColor: '#E2E4E8',
    borderWidth: 1,
    borderRadius: ms(8),
    paddingLeft: ms(16),
    flexDirection: 'row',
    alignItems: 'center',
    height: ms(45),
    width: ms(340),
    backgroundColor: '#fff',
    alignSelf: 'center',
  },
  searchInput: {
    height: '100%',
    paddingLeft: ms(14),
    width: ms(352),
    fontFamily: 'DMSans-Regular',
  },
});
