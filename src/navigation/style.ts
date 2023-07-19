import { StyleSheet } from "react-native";
import fonts from "../assets/font";
import { moderateScaleVertical, textScale } from "../components/responsiveSize";


export const styles = StyleSheet.create({
    iconView : { 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    tabBarActiveLabel : { 
        fontFamily: fonts.Lato,
        marginTop: moderateScaleVertical(6),
        color:  '#E6427A', 
        textAlign:'center',
        fontSize: textScale(12),
        fontStyle:'normal',
        lineHeight: moderateScaleVertical(14),

    },
    tabBarInactiveLabel : {
        fontFamily: fonts.Lato,
        marginTop: moderateScaleVertical(6),
        color:  '#707070', 
        textAlign:'center',
        fontSize: textScale(12),
        fontStyle:'normal',
        lineHeight: moderateScaleVertical(14),
    },
 
})