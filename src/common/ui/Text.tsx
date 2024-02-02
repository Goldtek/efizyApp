import React from 'react';
import {StyleSheet, TextInput, TextStyle, View} from 'react-native';
import {Text as TText} from 'react-native-ui-lib';
import {useColor} from './Colors';
import {Search} from '../../../assets/icons';
import {hp, wp} from '../utils';

type TTexts = {
  h1?: boolean;
  h2?: boolean;
  body1?: boolean;
  body2?: boolean;
  caption?: boolean;
  bold?: boolean;
  medium?: boolean;
  normal?: boolean;
  black?: boolean;
  testID?: string;
  center?: boolean;
};

type Tprops = {
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
} & TTexts;

export const Text = ({children, style, black, ...props}: Tprops) => {
  const styles = useStyles();
  return (
    <TText style={[styles.text, black && styles.blackText, style]} {...props}>
      {children}
    </TText>
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

    searchView: {
      width: wp(281),
      height: hp(40),
      borderWidth: 1,
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: colors.grey700,
      paddingLeft: wp(15),
      backgroundColor: colors.white,
    },
    input: {
      fontSize: 12,
      fontFamily: 'DMSans-Medium',
      width: wp(287),
      height: '100%',
      marginLeft: wp(12),
    },
  });
};

interface searchProps {
  search: string;
  setSearch(arg: string): void;
}

export const SearchBar = ({search, setSearch}: searchProps): JSX.Element => {
  const styles = useStyles();
  return (
    <View style={styles.searchView}>
      <Search />
      <TextInput
        value={search}
        onChangeText={(value: any) => setSearch(value)}
        placeholder={'Search Transactions'}
        style={styles.input}
        autoCorrect={false}
        autoComplete="off"
      />
    </View>
  );
};
