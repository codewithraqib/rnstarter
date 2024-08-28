import dimensions from './dimensions';
import {Platform, StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import colors from './colors';

const {width, fontScale} = Dimensions.get('window');

// const fontScale = 1

export const fontSizes = {
  font8: (dimensions.vw * 2.3) / fontScale,
  font9: (dimensions.vw * 2.5) / fontScale,
  font10: (dimensions.vw * 2.7) / fontScale,
  font11: (dimensions.vw * 3.1) / fontScale,
  font12: (dimensions.vw * 3.25) / fontScale,
  font13: (dimensions.vw * 3.5) / fontScale,
  font13_5: (dimensions.vw * 3.6) / fontScale,
  font14: (dimensions.vw * 3.8) / fontScale,
  font15: (dimensions.vw * 4.0) / fontScale,
  font16: (dimensions.vw * 4.25) / fontScale,
  font17: (dimensions.vw * 4.5) / fontScale,
  font18: (dimensions.vw * 4.7) / fontScale,
  font19: (dimensions.vw * 5.0) / fontScale,
  font20: (dimensions.vw * 5.2) / fontScale,
  font21: (dimensions.vw * 5.5) / fontScale,
  font22: (dimensions.vw * 5.7) / fontScale,
  font23: (dimensions.vw * 5.9) / fontScale,
  font25: (dimensions.vw * 6.25) / fontScale,
  font28: (dimensions.vw * 7.0) / fontScale,
  font30: (dimensions.vw * 7.45) / fontScale,
  font40: (dimensions.vw * 8.75) / fontScale,
};
// export const fontSizes = {
//   font8: (dimensions.vw < 3.9 ? dimensions.vw * 2.1 : (dimensions.vw < 4.2 ? dimensions.vw * 2.2 : dimensions.vw * 2.4)) / (fontScale),
//   font9: (dimensions.vw < 3.9 ? dimensions.vw * 2.2 : (dimensions.vw < 4.2 ? dimensions.vw * 2.3 : dimensions.vw * 2.6)) / (fontScale),
//   font10: (dimensions.vw < 3.9 ? dimensions.vw * 2.4 : (dimensions.vw < 4.2 ? dimensions.vw * 2.6 : dimensions.vw * 2.8)) / (fontScale),
//   font11: (dimensions.vw < 3.9 ? dimensions.vw * 2.7 : (dimensions.vw < 4.2 ? dimensions.vw * 2.9 : dimensions.vw * 3.1)) / (fontScale),
//   font12: (dimensions.vw < 3.9 ? dimensions.vw * 2.9 : (dimensions.vw < 4.2 ? dimensions.vw * 3.1 : dimensions.vw * 3.3)) / (fontScale),
//   font13: (dimensions.vw < 3.9 ? dimensions.vw * 3.2 : (dimensions.vw < 4.2 ? dimensions.vw * 3.4 : dimensions.vw * 3.6)) / (fontScale),
//   font14: (dimensions.vw < 3.9 ? dimensions.vw * 3.5 : (dimensions.vw < 4.2 ? dimensions.vw * 3.7 : dimensions.vw * 3.9)) / (fontScale),
//   font15: (dimensions.vw < 3.9 ? dimensions.vw * 3.7 : (dimensions.vw < 4.2 ? dimensions.vw * 3.9 : dimensions.vw * 4.1)) / (fontScale),
//   font16: (dimensions.vw < 3.9 ? dimensions.vw * 4.0 : (dimensions.vw < 4.2 ? dimensions.vw * 4.2 : dimensions.vw * 4.4)) / (fontScale),
//   font17: (dimensions.vw < 3.9 ? dimensions.vw * 4.3 : (dimensions.vw < 4.2 ? dimensions.vw * 4.5 : dimensions.vw * 4.7)) / (fontScale),
//   font18: (dimensions.vw < 3.9 ? dimensions.vw * 4.5 : (dimensions.vw < 4.2 ? dimensions.vw * 4.7 : dimensions.vw * 4.9)) / (fontScale),
//   font19: (dimensions.vw < 3.9 ? dimensions.vw * 4.8 : (dimensions.vw < 4.2 ? dimensions.vw * 5.0 : dimensions.vw * 5.2)) / (fontScale),
//   font20: (dimensions.vw < 3.9 ? dimensions.vw * 5.0 : (dimensions.vw < 4.2 ? dimensions.vw * 5.2 : dimensions.vw * 5.4)) / (fontScale),
//   font21: (dimensions.vw < 3.9 ? dimensions.vw * 5.2 : (dimensions.vw < 4.2 ? dimensions.vw * 5.4 : dimensions.vw * 5.7)) / (fontScale),
//   font22: (dimensions.vw < 3.9 ? dimensions.vw * 5.4 : (dimensions.vw < 4.2 ? dimensions.vw * 5.6 : dimensions.vw * 5.9)) / (fontScale),
//   font23: (dimensions.vw < 3.9 ? dimensions.vw * 5.6 : (dimensions.vw < 4.2 ? dimensions.vw * 5.8 : dimensions.vw * 6.1)) / (fontScale),
//   font25: (dimensions.vw < 3.9 ? dimensions.vw * 6.0 : (dimensions.vw < 4.2 ? dimensions.vw * 6.2 : dimensions.vw * 6.5)) / (fontScale),
//   font28: (dimensions.vw < 3.9 ? dimensions.vw * 6.6 : (dimensions.vw < 4.2 ? dimensions.vw * 6.8 : dimensions.vw * 7.2)) / (fontScale),
//   font30: (dimensions.vw < 3.9 ? dimensions.vw * 7.1 : (dimensions.vw < 4.2 ? dimensions.vw * 7.3 : dimensions.vw * 7.7)) / (fontScale),
//   font40: (dimensions.vw < 3.9 ? dimensions.vw * 8.3 : (dimensions.vw < 4.2 ? dimensions.vw * 8.6 : dimensions.vw * 9.0)) / (fontScale),
// }
// export const fontSizes = {
//   font8: ResponsiveFontSize(8),
//   font9: ResponsiveFontSize(9),
//   font10: ResponsiveFontSize(10),
//   font11: ResponsiveFontSize(11),
//   font12: ResponsiveFontSize(12),
//   font13: ResponsiveFontSize(13),
//   font14: ResponsiveFontSize(14),
//   font15: ResponsiveFontSize(15),
//   font16: ResponsiveFontSize(16),
//   font17: ResponsiveFontSize(17),
//   font18: ResponsiveFontSize(18),
//   font19: ResponsiveFontSize(19),
//   font20: ResponsiveFontSize(20),
//   font21: ResponsiveFontSize(21),
//   font22: ResponsiveFontSize(22),
//   font23: ResponsiveFontSize(23),
//   font25: ResponsiveFontSize(25),
//   font28: ResponsiveFontSize(28),
//   font30: ResponsiveFontSize(30),
//   font40: ResponsiveFontSize(40),
// }

const commonStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  colorPrimary: {
    color: colors.primaryBG,
  },
  colorWhite: {
    color: '#fff',
  },
  textColor: {
    color: '#464647',
    // color:'#777'
  },
  textDarkColor: {
    color: '#333',
  },
  lightDarkColor: {
    color: '#464647',
  },
  inputLogin: {
    height: dimensions.vw * 100 < 600 ? dimensions.vw * 11 : 50,
  },
  textCenter: {
    textAlign: 'center',
  },
  hLine: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  boxShadow: {
    shadowColor: '#000',
    shadowOffset:
      Platform.OS === 'android' ? {width: 3, height: 3} : {width: 1, height: 1},
    shadowOpacity: Platform.OS === 'android' ? 0.5 : 0.25,
    shadowRadius: Platform.OS === 'android' ? 10 : 4,
    elevation: Platform.OS === 'android' ? 3 : 2,
    backgroundColor: '#fff',
  },

  boxShadowIos: {
    shadowColor: '#000',
    shadowOffset:
      Platform.OS === 'android' ? {width: 3, height: 3} : {width: 1, height: 1},
    shadowOpacity: Platform.OS === 'android' ? 0.5 : 0.25,
    shadowRadius: Platform.OS === 'android' ? 10 : 4,
    elevation: Platform.OS === 'android' ? 3 : 2,
    backgroundColor: '#fff',
  },
  whiteBg: {
    backgroundColor: '#fff',
  },
  whiteBG: {
    backgroundColor: '#fff',
  },
  carpoolCard: {
    marginBottom: 10,
    marginTop: 15,
    padding: 20,
    width: dimensions.vw * 100 - 40,
    marginLeft: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: Platform.OS === 'android' ? 3 : 2,
    shadowColor: '#000',
    shadowOpacity: Platform.OS === 'android' ? 0.5 : 0.25,
    shadowOffset:
      Platform.OS === 'android' ? {width: 3, height: 3} : {width: 1, height: 1},
    shadowRadius: Platform.OS === 'android' ? 3 : 3,
  },
  carpoolInput: {
    height: dimensions.vw * 100 < 600 ? dimensions.vw * 11 : 50,
    borderRadius: 10,
    fontSize: fontSizes.font12,
  },
  titleSize: {
    fontSize: fontSizes.font15,
  },
  carpoolButtom: {borderRadius: 10},
  textStyle: {
    color: colors.textColor,
    fontSize: dimensions.vw * 100 > 220 ? fontSizes.font14 : fontSizes.font13,
    fontFamily: Platform.OS === 'android' ? 'DMSans-Regular' : 'DMSans-Regular',
  },
  textBold: {
    fontFamily: Platform.OS === 'android' ? 'DMSans-Medium' : 'DMSans-Medium',

    // ? "DMSans-Bold"
    // : "DMSans-Bold",
    // fontWeight: "bold",
  },
  textBlack: {
    fontFamily: Platform.OS === 'android' ? 'DMSans-Bold' : 'DMSans-Bold',
  },
  underLine: {
    textDecorationLine: 'underline',
  },
  flex_row: {
    flexDirection: 'row',
  },
  flex_center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  space_between: {
    justifyContent: 'space-between',
  },
  flex_wrap: {
    flexWrap: 'wrap',
  },

  payment_radion_button: {
    borderWidth: 2,
    borderColor: colors.secondaryBG,
    width: 16,
    height: 16,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    marginRight: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  payment_button_inner: {
    backgroundColor: colors.secondaryBG,
    width: 8,
    height: 8,
    borderRadius: 5,
    alignSelf: 'center',
  },
});

export default commonStyles;
