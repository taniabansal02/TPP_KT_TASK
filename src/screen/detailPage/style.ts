import {StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateScaleVertical,
  textScale
} from '../../components/responsiveSize';
import fonts from '../../assets/font';
import { colors } from '../../assets/theme/color';

export const styles = StyleSheet.create({
  detailPgContainer: {
    flex: 1, 
    marginLeft: moderateScale(20)
  },
  btnView: {
    alignItems: 'center', 
    marginTop: moderateScaleVertical(50)
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.buttonColor,
    width: moderateScale(200),
    height: moderateScaleVertical(70),
  },

  btnTxt: {
    color: colors.white, 
    fontSize: textScale(20)
  },
  modalContainer: {
    flex: 1,
    flexDirection:'column',
    alignItems:'flex-start',
    gap: moderateScale(16),
    
  },
  modalView: {
    backgroundColor: colors.white,
    width: moderateScale(343), 
    height: moderateScaleVertical(611),
    alignSelf:'center',
    borderRadius: 30,
  },
  scrollViewStyle: {
    marginHorizontal: moderateScale(16),
  },
  img: {
    height: moderateScaleVertical(26),
    width: moderateScale(221), 
    alignSelf:'center',
  },
  timerCol : {
    flexDirection:'column', 
    alignSelf:'center',
     alignContent:'center'
    },
  timerRow: {
    flexDirection:'row', 
    gap: moderateScale(16)
  },
  timer:{
    color: colors.white, 
    fontFamily: fonts.RobotoRegular, 
    fontSize: textScale(8) 
  },
  timerRow1:{
    flexDirection:'row', 
    gap: moderateScale(5.6), 
    top: moderateScaleVertical(-4)
  },
  timer2:{ 
    fontFamily: fonts.RobotoMedium, 
    fontSize: textScale(11), 
    color: colors.white 
  },
  crossBtnStyle: {
    marginTop: moderateScaleVertical(10),
    alignItems: 'flex-end',
   
  },
  eventDetailView : {
    marginTop: moderateScaleVertical(14),
    flexDirection: 'column',
    alignItems:'flex-start',
    gap: moderateScaleVertical(8),
  },
  recentTxtView: {
    width: moderateScale(76),
    height: moderateScaleVertical(30),
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.yellow,
    paddingVertical: moderateScaleVertical(4),
    paddingHorizontal: moderateScale(12),
    alignItems: 'center',
    justifyContent: 'center',
    gap: moderateScaleVertical(10),
  },
  recentTxtStyle: {
    color: colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: fonts.RobotoMedium,
    fontSize: textScale(10),
    fontStyle:'normal',
    lineHeight: moderateScaleVertical(12),
    textTransform: 'capitalize',
  },
  reviewInterviewStyle: {
    color: 'black',
    fontFamily: fonts.RobotoMedium,
    fontSize: textScale(14),
    fontStyle:'normal',
    lineHeight: moderateScaleVertical(20),
    textTransform:'capitalize',
  },
  eventTimingRow: {
    flexDirection: 'row', 
    gap: moderateScale(2),
  },
  headingTxt: {
    color: colors.black1,
    fontFamily: fonts.RobotoMedium,
    fontSize: textScale(10),
    fontStyle: 'normal',
    lineHeight: moderateScaleVertical(12),
    textTransform: 'capitalize',
  },
  valueTxt: {
    color: colors.black1,
    fontFamily: fonts.RobotoRegular,
    fontSize: textScale(10),
    fontStyle: 'normal',
    lineHeight: moderateScaleVertical(14),
    textTransform:'capitalize'
  },
  mainTxt: {
    color: colors.black,
    fontFamily: fonts.RobotoRegular,
    fontSize: textScale(12),
    fontStyle:'normal',
    marginTop: moderateScaleVertical(16),
    lineHeight: moderateScaleVertical(18),
    textTransform:'capitalize',
    width: moderateScale(312),
    height: moderateScaleVertical(611),
   
  
  },
});
