import {StyleSheet} from 'react-native';
import { colors } from '../../assets/theme/color';
import { moderateScale, moderateScaleVertical, textScale } from '../responsiveSize';

export const styles = StyleSheet.create({
  btnView: {
    alignItems: 'center',
    marginTop: moderateScaleVertical(50),
  },
  button: {
   
    alignItems: 'center',
    backgroundColor: colors.buttonColor,
    height: moderateScaleVertical(50),
    width: moderateScale(130),
    justifyContent: 'center',
    borderRadius: 50,
  },
  txt: {
    color: colors.white,
    fontSize: textScale(15),
  },
});
