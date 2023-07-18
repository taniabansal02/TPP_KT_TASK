import {StyleSheet} from 'react-native';
import { moderateScale, moderateScaleVertical, textScale } from '../../components/responsiveSize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    marginTop: moderateScaleVertical(50),
    marginHorizontal: moderateScale(20),
    borderWidth: 1,
    paddingLeft: moderateScale(20),
    width: moderateScale('70%'),
    fontSize: textScale(15),
  },
});
