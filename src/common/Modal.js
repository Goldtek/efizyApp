import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import Contacts from 'react-native-contacts';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text, View, Colors} from 'react-native-ui-lib';
import {ms} from './utils';
import {BackHeader} from './Header';
import {BoldText, MediumText, RegularText} from './Text';
import {Button} from './Button';

export const ContactModal = ({isOpen, onClose, selectedContact}) => {
  const [allContacts, setAllContacts] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'EfizyPay would like to view your contacts.',
        buttonPositive: 'Yes',
      })
        .then(() => {
          Contacts.getAll().then(people => {
            const filteredPeople = people.filter(
              elem => elem.phoneNumbers.length > 0,
            );
            setAllContacts(filteredPeople);
            setContacts(filteredPeople);
          });
        })
        .catch(error => {
          console.error('Permission error: ', error);
        });
    } else {
      Contacts.getAll().then(people => {
        const filteredPeople = people.filter(
          elem => elem.phoneNumbers.length > 0,
        );
        setAllContacts(filteredPeople);
        setContacts(filteredPeople);
      });
    }
  }, []);

  const generateColor = initials => {
    let hash = 0;
    for (let i = 0; i < initials.length; i++) {
      hash = initials.charCodeAt(i) + ((hash << 5) - hash);
    }
    const red = (hash & 0xff0000) >> 16;
    const green = (hash & 0x00ff00) >> 8;
    const blue = hash & 0x0000ff;
    const color = `rgb(${red},${green},${blue})`;
    return color;
  };

  const searchContacts = val => {
    setSearchText(val);
    if (val) {
      const searchTerm = val.toLowerCase();
      const temp = allContacts?.filter(
        elem =>
          elem.givenName.toLowerCase().includes(searchTerm) ||
          elem.familyName.toLowerCase().includes(searchTerm) ||
          elem.phoneNumbers[0].number.includes(searchTerm),
      );
      setContacts(temp);
    } else {
      setContacts(allContacts);
    }
  };

  const setSelected = nos => {
    selectedContact(nos);
    onClose();
  };

  return (
    <View>
      <Modal
        style={styles.modal}
        isVisible={isOpen}
        useNativeDriver
        useNativeDriverForBackdrop>
        <View
          flex
          paddingT-60
          paddingH-24
          backgroundColor="#fff"
          width={'100%'}>
          <BackHeader
            title="Select a contact"
            closeIcon
            backAction={onClose}
            regularText
          />
          <View style={styles.search}>
            <Icon name="ios-search" size={16} color="#6C757D" />
            <TextInput
              placeholder="Enter a name or phone number"
              placeholderTextColor="#6C757D"
              value={searchText}
              onChangeText={val => searchContacts(val)}
              style={styles.input}
            />
          </View>

          <FlatList
            style={styles.contactList}
            data={contacts}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => setSelected(item.phoneNumbers[0].number)}>
                <View paddingV-10 row marginB-14>
                  <View
                    style={[
                      styles.contactIcon,
                      {
                        backgroundColor: generateColor(
                          `${item.givenName.charAt(0)}${item.familyName.charAt(
                            0,
                          )}`,
                        ),
                      },
                    ]}>
                    <Text white p1>
                      {`${item.givenName.charAt(0)}${item.familyName.charAt(
                        0,
                      )}`}
                    </Text>
                  </View>
                  <View>
                    <Text p black>
                      {`${item.givenName} ${item.familyName}`}
                    </Text>
                    <Text p1 paleSky>
                      {item.phoneNumbers[0].number}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            ListEmptyComponent={() => <Text>No contact found.</Text>}
          />
        </View>
      </Modal>
    </View>
  );
};

export const WalletPaymentModal = ({show, onPress, onCancel}) => {
  const [hasError] = useState(false);
  return (
    <View>
      <Modal
        style={styles.modal}
        isVisible={show}
        useNativeDriver
        useNativeDriverForBackdrop
        hideModalContentWhileAnimating>
        <View
          style={styles.iconWrapper}
          backgroundColor={hasError ? '#FFE1DF' : '#D4E3FF'}>
          {/* <Image
            source={
              hasError
                ? require('@assets/images/wallet_modal_error.png')
                : require('@assets/images/wallet_modal_icon.png')
            }
            resizeMode="cover"
            style={styles.walletIcon}
          /> */}
        </View>

        <View style={styles.modalContent}>
          {hasError ? (
            <>
              <BoldText
                text="Insufficient funds"
                color={Colors.red}
                size={20}
              />
              <RegularText
                text="You have insufficient funds. Please top up your wallet and try again."
                size={12}
                color={Colors.grey400}
                style={styles.errorLabel}
              />
              <View style={[styles.payable, styles.errorBox]}>
                <MediumText
                  text="Available Balance"
                  size={11}
                  color="#172B4D"
                  style={styles.payableLabel}
                />
                <BoldText
                  text=" ₦ 1,240.00"
                  size={24}
                  color={Colors.red}
                  style={styles.payableAmount}
                />
              </View>
            </>
          ) : (
            <>
              <View style={styles.payable}>
                <MediumText
                  text="You are to pay"
                  size={11}
                  color="#172B4D"
                  style={styles.payableLabel}
                />
                <BoldText
                  text=" ₦ 1,240.00"
                  size={24}
                  color={Colors.blue}
                  style={styles.payableAmount}
                />
              </View>
              <RegularText
                text="This amount will be debited from your wallet"
                size={14}
                color={Colors.grey400}
                style={styles.modalLabel}
              />
            </>
          )}
          <Button
            title={hasError ? 'Deposit' : 'Buy'}
            onPress={onPress}
            style={styles.button}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.cancelBtn}
            onPress={onCancel}>
            <Text style={styles.cancelText}>No, cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export const SendGiftModal = ({show}) => {
  return (
    <View>
      <Modal
        style={styles.modal}
        isVisible={show}
        useNativeDriver
        useNativeDriverForBackdrop
        hideModalContentWhileAnimating>
        <View style={styles.modalContent} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalWrapper: {},
  modal: {
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    width: ms(86),
    height: ms(80),
    borderRadius: ms(15),
    position: 'relative',
    bottom: ms(-45),
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  walletIcon: {
    width: ms(43),
    height: ms(46),
  },
  modalContent: {
    backgroundColor: Colors.white,
    paddingHorizontal: ms(34),
    borderRadius: ms(15),
    width: ms(327),
    height: ms(388),
    // justifyContent: 'center',
    alignItems: 'center',
    paddingTop: ms(72),
  },
  payable: {
    backgroundColor: Colors.grey500,
    borderRadius: ms(15),
    paddingVertical: ms(9),
    width: ms(241),
    height: ms(85),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: ms(16),
  },
  errorBox: {
    marginBottom: ms(24),
  },
  payableLabel: {
    lineHeight: 24,
  },
  payableAmount: {
    lineHeight: 34,
  },
  modalLabel: {
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: ms(40),
  },
  errorLabel: {
    lineHeight: 18,
    textAlign: 'center',
    marginTop: ms(8),
    marginBottom: ms(24),
  },
  button: {
    width: '100%',
    marginBottom: ms(8),
  },
  cancelBtn: {
    paddingVertical: ms(14),
  },
  cancelText: {
    fontFamily: 'DMSans-Regular',
    fontSize: 14,
    lineHeight: 22,
    color: '#372AA4',
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E2E4E8',
    borderWidth: 1,
    borderRadius: 6,
    paddingLeft: ms(14),
    width: '100%',
    height: ms(40),
    marginTop: ms(48),
  },
  input: {
    paddingLeft: ms(15),
  },
  contactList: {
    paddingTop: ms(24),
  },
  contactIcon: {
    width: ms(40),
    height: ms(40),
    borderRadius: ms(20),
    backgroundColor: '#3BB3F2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: ms(16),
  },
});
