import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text, Colors, TouchableOpacity, Image} from 'react-native-ui-lib';
import {BackArrow, InfoOutline} from '../../assets/icons';
import {ms} from './utils';


export const BackView = ({
  title,
  stack,
  children,
  footer,
  backgroundColor,
  useView,
}) => (
  <View flex backgroundColor={backgroundColor || Colors.grey500}>
    <View style={stack ? styles.stackHeader : styles.header}>
      <TouchableOpacity
        activeOpacity={0.2}
        style={stack ? styles.stackBtn : styles.backBtn}
        // onPress={}
        >
        <BackArrow />
      </TouchableOpacity>
      <Text style={stack ? styles.stackTitle : styles.headerTitle}>
        {title}
      </Text>
    </View>
    {useView ? (
      <View style={styles.backScrollStyle}>{children}</View>
    ) : (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.backScroll}
        contentContainerStyle={styles.backScrollStyle}>
        {children}
      </ScrollView>
    )}
    {footer && (
      <View backgroundColor={Colors.white} padding-24>
        {footer()}
      </View>
    )}
  </View>
);

export const NoContent = ({icon, text}) => (
  <View flex centerV centerH>
    <View style={styles.noContent} marginB-29>
      {icon}
    </View>
    <Text p black center marginH-30>
      {text}
    </Text>
  </View>
);

export const NoticeBanner = ({text}) => (
  <View style={styles.fnote}>
    <InfoOutline />
    <Text purple style={styles.fnoteText}>
      {text}
    </Text>
  </View>
);

export const PaymentMethods = ({transferAction, cardAction}) => (
  <View>
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.list}
      onPress={transferAction}>
      <View row centerV>
        <Image
          assetGroup="icons"
          assetName="bank_transfer"
          resizeMode="cover"
          style={styles.icon}
        />
        <Text p1 black>
          Bank transfer
        </Text>
      </View>
      <Icon name="chevron-forward" size={24} color="#372AA4" />
    </TouchableOpacity>

    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.list}
      onPress={cardAction}>
      <View row centerV>
        <Image
          assetGroup="icons"
          assetName="debit_card"
          resizeMode="cover"
          style={styles.icon}
        />
        <Text p1 black>
          Debit card
        </Text>
      </View>
      <Icon name="chevron-forward" size={24} color="#372AA4" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  stackHeader: {
    paddingTop: ms(60),
    paddingBottom: ms(24),
    paddingHorizontal: ms(24),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    paddingTop: ms(60),
    paddingBottom: ms(24),
    shadowColor: '#E1E1E1',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: ms(24),
  },
  stackBtn: {
    marginBottom: ms(28),
  },
  backBtn: {
    position: 'absolute',
    left: ms(10),
    bottom: ms(14),
    padding: ms(10),
  },
  stackTitle: {
    fontSize: 24,
    lineHeight: 30,
    color: Colors.black,
    fontFamily: '-SemiBold',
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 16,
    lineHeight: 16,
    color: Colors.black800,
    fontFamily: 'DMSans-Medium',
  },
  backScroll: {
    width: '100%',
    flex: 1,
  },
  backScrollStyle: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: ms(30),
    paddingHorizontal: ms(24),
  },
  noContent: {
    backgroundColor: Colors.gray,
    width: ms(72),
    height: ms(72),
    borderRadius: ms(72 / 2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  fnote: {
    width: '100%',
    flexDirection: 'row',
    borderRadius: ms(8),
    backgroundColor: '#EFEEFF',
    paddingVertical: ms(16),
    paddingHorizontal: ms(17),
  },
  fnoteText: {
    fontFamily: 'DMSans-Regular',
    fontSize: 14,
    lineHeight: ms(20),
    width: '90%',
  },
  list: {
    borderRadius: ms(8),
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: ms(16),
    marginBottom: ms(16),
    shadowColor: 'rgba(213, 211, 228, 0.12)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 2,
  },
  icon: {
    width: ms(40),
    height: ms(40),
    marginRight: ms(16),
  },
});
