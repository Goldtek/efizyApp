import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Colors, Text, View} from 'react-native-ui-lib';

import Account from 'accounting'
// import { Flag } from 'react-native-svg-flagkit';
import RBSheet, {RBSheetProps} from 'react-native-raw-bottom-sheet';
import Icon from 'react-native-vector-icons/Ionicons';
import {ms} from './utils';
import {BackHeader} from './Header';
import {BottomSheet} from './BottomSheet';
import {
  ClosedPasswordEyeSvg,
  ContactIcon,
  PasswordEyeSvg,
  SearchIcon,
} from '../../assets/icons';
import {ContactModal} from './Modal';
import {MediumText, RegularText} from './Text';
import { nairaFormat } from './utils';

export const Input = ({
  value,
  onChange,
  label,
  secondLabel,
  placeholder,
  keyboardType = 'default',
  style,
  isMoney,
  props,
  disabled,
  hasError,
  rightIcon,
  testID,
  onBlur,
  isPassword,
  multiline,
  numberOfLines,
  maxLength,
  onPress,
}) => {
  const [showPassword, setShowPassword] = useState(isPassword);
  return (
    <View style={styles.inputWrapper} marginB-16 testID={testID}>
      {label && (
        <View row marginB-10>
          <RegularText text={label} size={14} />
          {secondLabel && (
            <RegularText text={` ${secondLabel}`} color="#7F7887" size={14} />
          )}
        </View>
      )}
      {isMoney ? (
        <View style={styles.input} row>
          <TextInput
            testID={testID}
            editable={!disabled}
            placeholder={placeholder}
            placeholderTextColor={Colors.black800}
            keyboardType="phone-pad"
            value={value}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
            onBlur={onBlur}
            style={styles.amountInput}
            onChangeText={onChange}
            multiline={multiline}
            numberOfLines={numberOfLines}
            maxLength={maxLength}
          />
          <RegularText
            size={14}
            text="NGN"
            marginB-10
            style={styles.amountText}
            color="#6C757D"
          />
        </View>
      ) : (
        <>
          <TextInput
            editable={!disabled}
            {...props}
            placeholder={placeholder}
            placeholderTextColor={Colors.paleSky}
            keyboardType={keyboardType}
            secureTextEntry={showPassword}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
            style={[
              styles.input,
              disabled && styles.disableInput,
              hasError && styles.errorInput,
              style,
            ]}
            value={value}
            onChangeText={onChange}
          />
          {isPassword && (
            <>
              {showPassword ? (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setShowPassword(false)}
                  style={styles.rightIcon}>
                  <ClosedPasswordEyeSvg />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setShowPassword(true)}
                  style={styles.rightIcon}>
                  <PasswordEyeSvg />
                </TouchableOpacity>
              )}
            </>
          )}

          {rightIcon && (
            <TouchableOpacity
              activeOpacity={1}
              onPress={onPress}
              style={styles.rightIcon}>
              {rightIcon}
            </TouchableOpacity>
          )}
        </>
      )}
      {hasError && (
        <Text p1 red marginT-6>
          Exceeded transaction limit
        </Text>
      )}
    </View>
  );
};

export const TextArea = ({label, placeholder, onChange, value, ref}) => (
  <View>
    <Text p1 black marginB-4>
      {label}
    </Text>
    <TextInput
      ref={ref}
      multiline
      textAlignVertical="top"
      placeholder={placeholder}
      placeholderTextColor="#6C757D"
      value={value}
      onChangeText={onChange}
      style={styles.textarea}
    />
  </View>
);

export const BeneficiaryInput = ({
  label,
  placeholder,
  value,
  onChange,
  onSelect,
}) => {
  const [openContacts, setOpenContacts] = useState(false);

  const handleSelection = data => {
    if (onSelect) {
      onSelect(data);
    }
  };

  return (
    <>
      <ContactModal
        isOpen={openContacts}
        onClose={() => setOpenContacts(false)}
        selectedContact={handleSelection}
      />
      <View testID="beneficiary-input">
        <Input
          label={label}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          keyboardType="phone-pad"
          rightIcon={<ContactIcon color={Colors.blue700} />}
          onPress={() => setOpenContacts(true)}
        />
      </View>
    </>
  );
};

export const Select = ({
  label,
  placeholder,
  selectedValue,
  inputStyle,
  height = 675,
  data,
}) => {
  const selectRef = useRef();
  return (
    <View style={styles.inputWrapper} marginB-16>
      <View style={styles.select}>
        {label && <RegularText text={label} size={14} marginB-4 />}
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.selectBtn, inputStyle]}
          onPress={() => selectRef.current?.open()}>
          {selectedValue ? (
            <RegularText text={selectedValue} marginB-4 />
          ) : (
            <RegularText
              text={placeholder || label || ''}
              marginB-4
              color={Colors.paleSky}
            />
          )}
          <Icon name="chevron-down" size={16} color="#ADB5BD" />
        </TouchableOpacity>
      </View>
      <RBSheet
        height={height}
        ref={selectRef}
        closeOnDragDown={false}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(92,92,92,0.5)',
          },
        }}>
        <View style={styles.sheet}>
          <View style={styles.dash} />
          <View style={styles.header}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.closeBtn}
              onPress={() => selectRef.current?.close()}>
              <Icon name="close" size={24} color="#110E14" />
            </TouchableOpacity>
            <Text p4 black>
              {placeholder || label}
            </Text>
          </View>
          {/* Use this when implementing APIs */}
          {/* <SearchInput /> */}
          {/* Can remove the block below */}
          <View style={styles.search}>
            <Icon name="search-outline" size={16} color="#6C757D" />
            <TextInput
              placeholder={placeholder || label}
              placeholderTextColor="#6C757D"
              style={styles.searchInput}
            />
          </View>
          {/* END block to remove  */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.selectScroll}>
            {data?.map((elem, index) => (
              <TouchableOpacity
                activeOpacity={0.8}
                key={index}
                style={styles.listItem}>
                {/* <Text>{elem}</Text> */}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </RBSheet>
    </View>
  );
};

export const SearchInput = ({placeholder, value, onChange, style}) => (
  <View style={[styles.search, style]}>
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

export const CountrySelector = ({
  selectedValue,
  openRef,
  onClose,
  onSelect,
  height,
  showSearchIcon,
  placeholder,
}) => {
  const [searchText, setSearchText] = useState('');

  const setCountry = country => {
    onSelect(country);
    onClose();
  };

  return (
    <View>
      <View style={styles.select}>
        <Text p1 black marginB-4>
          Country
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.selectBtn}
          onPress={() => openRef.current?.open()}>
          <View row centerV>
            {selectedValue ? (
              <>
                {/* <View style={styles.flag} marginR-8>
                  <Flag id={'US'} size={0.2} />
                </View> */}
                <Text p1 black>
                  {selectedValue}
                </Text>
              </>
            ) : (
              <>
                {showSearchIcon && (
                  <Icon name="search" size={16} color="#6C757D" />
                )}
                <Text p1 paleSky marginL-8>
                  {placeholder || 'Choose a country'}
                </Text>
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
        render={() => (
          <View>
            <BackHeader
              title="Choose a country"
              stack
              backAction={onClose}
              closeIcon
            />
            <SearchInput
              label=""
              value={searchText}
              onChange={setSearchText}
              placeholder="Choose a country"
            />
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={styles.countryScroll}>
              <TouchableOpacity
                row
                paddingV-10
                marginB-14
                activeOpacity={0.8}
                onPress={() => setCountry('United States of America')}>
                {/* <View style={styles.flag} marginR-16>
                  <Flag id={'US'} size={0.2} />
                </View> */}
                <Text p black>
                  United States of America
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                testID="select-item"
                row
                activeOpacity={0.8}
                onPress={() => setCountry('Ghana')}>
                {/* <View style={styles.flag} marginR-16>
                  <Flag id={'GH'} size={0.2} />
                </View> */}
                <Text p black>
                  Ghana
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        )}
      />
    </View>
  );
};

export const SelectData = ({label, placeholder, selected, data, onSelect}) => {
  const selectRef = useRef(null);
  const handleSelect = item => {
    onSelect(item);
    selectRef.current?.close();
  };
  return (
    <View style={styles.inputWrapper} marginB-16>
      <View style={styles.select}>
        {label && <RegularText text={label} size={14} marginB-4 />}
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.selectBtn]}
          onPress={() => selectRef.current?.open()}>
          {selected ? (
            <RegularText text={`${selected.name.split('--')[0]} - ${selected.name.split('--')[1]} (${selected.meta.data_expiry})`} marginB-4 />
          ) : (
            <RegularText
              text={placeholder || label || ''}
              marginB-4
              color={Colors.paleSky}
            />
          )}
          <Icon name="chevron-down" size={16} color="#ADB5BD" />
        </TouchableOpacity>
      </View>
      <RBSheet
        height={ms(900)}
        ref={selectRef}
        closeOnDragDown={false}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(92,92,92,0.5)',
          },
        }}>
        <View style={styles.sheet}>
          <View style={styles.dash} />
          <View style={styles.header}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.closeBtn}
              onPress={() => selectRef.current?.close()}>
              <Icon name="close" size={24} color="#110E14" />
            </TouchableOpacity>
            <MediumText text={placeholder || label} size={18} />
          </View>

          <SearchInput placeholder={placeholder || label} />

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.selectScroll}
            contentContainerStyle={{ paddingBottom: 250 }}
            >
              
            {data &&
              data.map(elem => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  key={elem.id}
                  style={styles.listItem}
                  onPress={() => handleSelect(elem)}>
                  <RegularText text={`${elem.meta.currency} ${(elem.meta.fee)} - ${elem.name.split('--')[0]} ${elem.name.split('--')[1]} (${elem.meta.data_expiry})`} marginB-4 />
                </TouchableOpacity>
              ))}
          </ScrollView>
        </View>
      </RBSheet>
    </View>
  );
};

export const QuantityInput = ({
  label = 'Quantity',
  total = 0,
  onReduce,
  onIncrease,
}) => (
  <View marginB-16 row spread centerV centerH>
    <RegularText text={label} />
    <View row spread centerH centerV>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.quantityBtn}
        onPress={onReduce}>
        <Icon name="add" size={18} color="#372AA4" />
      </TouchableOpacity>
      <View style={styles.quantityBox}>
        <MediumText text={total} />
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.quantityBtn}
        onPress={onIncrease}>
        <Icon name="remove" size={18} color="#372AA4" />
      </TouchableOpacity>
    </View>
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
  quantity: {},
  selectScroll: {
    paddingTop: ms(20),
  },
  listItem: {
    paddingVertical: ms(15),
    borderBottomColor: '#E2E4E8',
    borderBottomWidth: 0.5,
  
  },
  chevronDown: {
    position: 'absolute',
    right: ms(16),
  },
  inputWrapper: {},
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
});
