import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {View as UIView, Text} from 'react-native-ui-lib';
import {useNavigation} from '@react-navigation/native';
import {BackArrow, Close, BackButton} from '../../assets/icons';
import {TextInput, BoldText, RegularText} from './Text';
import {ms} from './utils';
import useStyles from './styles';
import {useColor} from './Colors';

export const Header = ({
  leftClick,
  back,
  isSendGift,
  leftStyle,
  leftComponent,
  title,
  rightComponent,
  headerStyle,
  titleStyle = {},
}) => {
  const styles = useStyles();
  return (
    <>
      <View style={[styles.header, headerStyle]}>
        <TouchableOpacity onPress={leftClick}>
          <View row>
            {!back ? (
              <View style={leftStyle}>{leftComponent}</View>
            ) : (
              <View style={styles.backArrow}>
                {isSendGift ? <BackButton /> : <BackArrow />}
              </View>
            )}

            <TextInput style={[styles.title, titleStyle]}>{title}</TextInput>
          </View>
        </TouchableOpacity>

        <View style={styles.rightComponent}>
          <View>{rightComponent}</View>
        </View>
      </View>
    </>
  );
};

// IsHeader
export const LiteHeader = ({title, canClose}) => {
  const navigation = useNavigation();
  const Colors = useColor();
  return (
    <UIView
      row
      centerH
      spread
      paddingB-24
      paddingT-40
      // paddingH-24
      backgroundColor={Colors.white}>
      <Text h2 black>
        {title}
      </Text>
      {canClose && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Close />
        </TouchableOpacity>
      )}
    </UIView>
  );
};

export const BackHeader = ({
  title,
  stack,
  regularText,
  closeIcon,
  backAction,
  flagIcon
}) => {
  const navigation = useNavigation();
  const Colors = useColor();
  return (
    <>
      {stack ? (
        <View>
          <UIView row>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.stackBtn}
              onPress={backAction ? backAction : () => navigation.goBack()}>
                <BackArrow />
            </TouchableOpacity>
          </UIView>
          {regularText ? (
             <UIView row  marginL-25>
              {flagIcon ? flagIcon : null} 
              <RegularText size={20} text={title} marginB-24/>
            </UIView>
          ) : (
            <UIView row  marginL-25>
              {flagIcon ? flagIcon : null} 
              <BoldText size={20} text={title} marginB-24 />
            </UIView>
          )}
        </View>
      ) : (
        <UIView row center>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.backBtn}
            onPress={backAction ? backAction : () => navigation.goBack()}>
            {closeIcon ? <Close /> : <BackArrow />}
          </TouchableOpacity>
          {/* <BoldText text={title} /> */}
          {regularText ? (
            <RegularText size={22} text={title} />
          ) : (
            <BoldText text={title} size={22} color={Colors.blue700} />
          )}
          {/* <Text h4 black>

          </Text> */}
        </UIView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  backBtn: {
    paddingHorizontal: ms(5),
    paddingVertical: ms(10),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
  },
  stackBtn: {
    paddingHorizontal: ms(10),
    paddingVertical: ms(8),
    marginBottom: ms(18),
    marginTop: ms(20),
    marginLeft: ms(14),
  },
});
