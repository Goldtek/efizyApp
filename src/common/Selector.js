import React from 'react';
import {StyleSheet, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import {Colors, Image, Text, View} from 'react-native-ui-lib';
import {moneyFormat, ms} from './utils';
import {RegularText} from './Text';

export const NetworkSelector = ({selected, onSelect, data}) => {
  return (
    <View>
      <RegularText text="Select network provider" marginB-16 size={16} />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

          <View row spread marginB-24 marginR-20 >
          {data.map((item, index) => (
            <TouchableOpacity onPress={() => onSelect(item)}>
              <View
                center
                style={[
                  styles.network,
                   selected.name === item.name && styles.selectedNetwork,
                ]}>
                <Image
                  assetName={item.name.toLowerCase()}
                  assetGroup="networks"
                  style={styles.networkImage}
                />
                <RegularText text={item.name.toUpperCase()} size={14} />
              </View>
            </TouchableOpacity>
          ))}
          </View>
       
      </ScrollView>
    </View>
  );
};

export const AmountSelector = ({selected, onSelect, data}) => (
  <FlatList
    horizontal
    style={styles.amountSelector}
    showsHorizontalScrollIndicator={false}
    data={data}
    renderItem={({item}) => (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => onSelect(item)}
        style={[styles.amount, selected === item && styles.selectedAmount]}>
        <Text p black color={selected === item && Colors.blue}>
          ₦{moneyFormat(item)}
        </Text>
      </TouchableOpacity>
    )}
  />
);

export const TextSelector = ({selected, onSelect, data}) => (
  <FlatList
    horizontal
    style={styles.amountSelector}
    showsHorizontalScrollIndicator={false}
    data={data}
    renderItem={({item}) => (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => onSelect(item)}
        style={[styles.textSelector, selected === item && styles.selectedText]}>
        <RegularText
          text={item}
          size={14}
          color={selected === item && Colors.blue}
        />
      </TouchableOpacity>
    )}
  />
);

const styles = StyleSheet.create({
  network: {
    width: ms(76),
    paddingTop: ms(8),
    borderRadius: ms(8),
    paddingBottom: ms(8),
  },
  selectedNetwork: {
    backgroundColor: 'rgba(234,244,253,0.5)',
    borderColor: Colors.blue,
    borderWidth: 1,
  },
  networkImage: {
    width: ms(56),
    height: ms(56),
    marginBottom: ms(8),
  },
  amountSelector: {
    paddingLeft: ms(24),
    height: ms(40),
  },
  amount: {
    paddingHorizontal: ms(21),
    paddingVertical: ms(11),
    borderColor: '#EDEDED',
    borderWidth: 1,
    borderRadius: ms(8),
    marginRight: ms(8),
  },
  selectedAmount: {
    backgroundColor: 'rgba(234,244,253,0.5)',
    borderColor: Colors.blue,
  },
  textSelector: {
    paddingHorizontal: ms(12),
    paddingVertical: ms(8),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ms(8),
    marginRight: ms(8),
  },
  selectedText: {
    backgroundColor: '#EFEEFF',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
