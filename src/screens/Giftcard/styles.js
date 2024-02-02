import {StyleSheet} from 'react-native';
import {ms} from '../../common';
import {Colors} from 'react-native-ui-lib';

export const styles = StyleSheet.create({
  linkWrapper: {
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 1,
    shadowRadius: 24,
    elevation: 2,
  },
  buttonLinkTop: {
    borderTopRightRadius: ms(8),
    borderTopLeftRadius: ms(8),
  },
  buttonLinkBottom: {
    borderBottomRightRadius: ms(8),
    borderBottomLeftRadius: ms(8),
  },
  icon: {
    width: ms(40),
    height: ms(40),
  },
});

export const BuyStyles = StyleSheet.create({
  cardWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: 'pink',
  },
  banner: {
    marginBottom: ms(24),
    marginRight: ms(12),
  },
  searchInput: {
    height: ms(48),
    width: '80%',
    backgroundColor: '#fff',
  },
  flatlist: {paddingTop: ms(24)},
  scrollView: {paddingBottom: 50},
  filter: {
    borderColor: '#E2E4E8',
    borderWidth: 1,
    borderRadius: 8,
    width: ms(48),
    height: ms(48),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  select: {},
  selectBtn: {
    height: ms(48),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#E2E4E8',
    borderWidth: 1,
    borderRadius: ms(8),
    paddingHorizontal: ms(16),
    backgroundColor: '#fff',
  },
  radioContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: -10,
  },
  viewAllBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  scrollWrapper: {
    paddingLeft: ms(24),
  },
  scrollLarge: {
    width: ms(262),
    height: ms(128),
  },
  imageLarge: {
    width: ms(262),
    height: ms(128),
    borderRadius: ms(8),
  },
  scrollMini: {
    width: ms(185),
    // height: ms(120),
  },
  imageMini: {
    width: ms(185),
    height: ms(120),
    borderRadius: ms(8),
  },
  marginR12: {
    marginRight: ms(12),
  },
});

export const sellStyles = StyleSheet.create({
  scrollView: {paddingBottom: 50},
  content: {
    // paddingHorizontal: ms(24),
    backgroundColor: Colors.white,
    borderTopLeftRadius: ms(15),
    borderTopRightRadius: ms(15),
    paddingVertical: ms(22),
    marginBottom: ms(24),
  },
  quickLink: {
    borderRadius: 15,
    backgroundColor: '#fafbfc',
    borderStyle: 'solid',
    borderColor: '#dee2e6',
    borderWidth: 1,
    paddingHorizontal: ms(20),
    paddingVertical: ms(9),
    alignSelf: 'flex-start',
    marginRight: ms(16),
  },
  scrollWrapper: {
    paddingLeft: ms(24),
  },
  scrollContent: {
    paddingRight: ms(30),
  },
  banner: {
    backgroundColor: '#fff',
    borderRadius: ms(16),
    padding: ms(8),
    marginRight: ms(11),
  },
  bannerImage: {
    width: ms(140),
    height: ms(105),
    borderRadius: ms(11),
    marginBottom: ms(8),
  },
  bannerTag: {
    borderRadius: ms(19),
    backgroundColor: '#e0ffff',
    paddingHorizontal: 4,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerBtn: {
    borderRadius: 8,
    height: ms(38),
    width: ms(100),
  },
  scrollMini: {
    // width: ms(185),
    // height: ms(120),
  },
  imageMini: {
    width: ms(152),
    height: ms(114),
    borderRadius: ms(8),
  },
  allcard: {
    width: ms(152),
    height: ms(114),
    marginBottom: ms(23),
  },
  marginR12: {
    marginRight: ms(12),
  },
});

export const cardDetailsStyles = StyleSheet.create({
  banner: {
    width: '100%',
    height: ms(120),
    // aspectRatio: 1,
    borderRadius: ms(17),
    marginBottom: ms(24),
  },
  quantityBtn: {
    backgroundColor: '#EFEEFF',
    borderRadius: ms(24),
    padding: ms(11),
  },
  quantityBox: {
    borderColor: '#E2E4E8',
    borderWidth: 1,
    borderRadius: ms(8),
    width: ms(80),
    height: ms(32),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  quantity: {},
  buttons: {
    backgroundColor: '#fff',
    paddingVertical: ms(24),
    paddingHorizontal: ms(24),
    width: '100%',
    // position: 'absolute',
    // bottom: 0,
    alignSelf: 'center',
    zIndex: 100,
  },
  button: {
    borderColor: '#372AA4',
    borderWidth: 1,
    width: '100%',
    height: ms(48),
    borderRadius: ms(8),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: ms(16),
  },
  box: {
    borderRadius: ms(8),
    backgroundColor: '#fff',
    paddingHorizontal: ms(16),
    paddingTop: ms(16),
    shadowColor: 'rgba(213, 211, 228, 0.12)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 2,
  },
  list: {
    borderBottomColor: 'rgba(237, 237, 237, 0.8)',
    borderBottomWidth: 1,
  },
  noBorder: {
    borderBottomColor: '#fff',
  },
});

export const gcSummaryStyles = StyleSheet.create({
  valueView: {
    width: ms(327),
    borderRadius: ms(18),
    borderColor: '#F0EBFD',
    borderWidth: 1,
    alignItems: 'center',
    position: 'relative',
    zIndex: 100,
  },
  summaryView: {
    width: ms(335),
    marginTop: ms(-54),
    borderRadius: ms(18),
  },
  item: {
    borderBottomColor: Colors.grey700,
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  iconImage: {
    width: ms(40),
    height: ms(40),
    marginRight: ms(16),
  },
  listBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: ms(16),
    backgroundColor: Colors.white,
    borderRadius: ms(8),
    marginBottom: ms(16),
  },
  bank: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bankWrapper: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    paddingVertical: ms(24),
    width: '100%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  copyBtn: {
    position: 'absolute',
    right: ms(40),
    top: ms(98),
  },
  bankBtn: {
    width: '100%',
    // marginTop: ms(100),
    // position: 'absolute',
    // bottom: ms(30),
  },
});

export const categoryStyles = StyleSheet.create({
  list: {
    paddingTop: ms(24),
  },
  listWrapper: {
    // justifyContent: 'space-between',
    marginBottom: ms(70),
  },
  listItem: {
    width: ms(158),
    height: ms(120),
    marginRight: ms(11),
  },
  listImage: {
    width: ms(158),
    height: ms(120),
    borderRadius: ms(8),
    marginBottom: ms(8),
  },
});

export const cardTypeStyles = StyleSheet.create({
  banner: {
    width: ms(259),
    height: ms(101),
    borderRadius: ms(17),
    alignSelf: 'center',
  },
  typeWrapper: {
    backgroundColor: '#FFFFFF',
    paddingTop: ms(31),
    paddingLeft: ms(16),
    borderRadius: 15,
    marginTop: ms(-33),
    paddingBottom: ms(27),
  },
  cardFrame: {
    borderRadius: 5,
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderColor: '#dee2e6',
    borderWidth: 0.5,
    paddingHorizontal: ms(4),
    paddingTop: ms(4),
    paddingBottom: ms(16),
    alignItems: 'center',
    marginRight: ms(10),
    height: ms(89),
  },
  selected: {
    height: ms(113),
    borderColor: Colors.blue,
  },
  cardImage: {
    height: ms(49),
    width: ms(82),
    marginBottom: ms(8),
  },
  checkmark: {
    width: ms(15),
    height: ms(15),
  },
  opener: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: ms(16),
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: ms(12),
    paddingLeft: ms(30),
    paddingRight: ms(22),
  },
  chevron: {
    width: ms(24),
    height: ms(24),
  },
  imageWrapper: {
    width: '100%',
    height: ms(209),
    backgroundColor: 'rgba(217, 213, 251,0.25)',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: ms(32),
  },
  sheetImage: {
    width: ms(215),
    height: ms(129),
  },
  cart: {
    backgroundColor: '#fff',
    paddingVertical: ms(13),
    paddingHorizontal: ms(14),
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: ms(16),
  },
  quantityWrapper: {
    borderRadius: 6,
    backgroundColor: '#fafbfc',
    padding: ms(8),
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    width: 25,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: ms(6),
  },
  cardIcon: {
    width: ms(66),
    height: ms(43),
  },
  other: {
    backgroundColor: '#fff',
    paddingTop: ms(23),
    paddingHorizontal: ms(16),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DEE2E6',
    marginTop: ms(8),
  },
  otherInput: {
    borderRadius: 10,
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderColor: '#dee2e6',
    borderWidth: 1,
    width: '60%',
    height: ms(36),
    paddingLeft: ms(13),
    fontSize: 12,
    color: '#989898',
  },
  valueWrapper: {
    backgroundColor: '#fff',
    padding: ms(16),
    borderRadius: ms(10),
  },
  value: {
    backgroundColor: '#f0ebfd',
    borderRadius: 10,
    padding: ms(8),
  },
  imgWrapper: {
    width: ms(88),
    height: ms(86),
    marginRight: ms(12),
  },
  img: {
    width: ms(79),
    height: ms(80),
  },
  imgClose: {
    width: ms(18),
    height: ms(18),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: -1,
    top: -8,
  },
  closeIcon: {
    width: ms(17),
    height: ms(17),
  },
  modal: {
    flex: 1,
    margin: 0,
  },
  modalContent: {
    width: '90%',
    height: ms(470),
    alignSelf: 'center',
    paddingHorizontal: ms(20),
    paddingBottom: ms(47),
    paddingTop: ms(24),
    backgroundColor: '#fff',
    borderRadius: ms(10),
    alignItems: 'center',
  },
  modalImage: {
    width: ms(72),
    height: ms(46),
    marginBottom: ms(17),
  },
  dot: {
    width: 4,
    height: 4,
    backgroundColor: Colors.black800,
    marginRight: 10,
    borderRadius: 20,
    marginTop: 10,
  },
  modalText: {
    lineHeight: 22,
  },
});
