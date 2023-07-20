import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import fonts from '../../../assets/font';
import { moderateScale, moderateScaleVertical, textScale } from '../../../components/responsiveSize';
import { color } from '../../../assets/colorConstant';
import { font } from '../../../assets/fonts/fontsConstant';
import { Icons } from '../../../assets/i';
import FloatingInput from '../../../components/floatinginput';
import { _validateEmail, _validatePassword} from '../../../components/utils/validations';
import CustomButton from '../../../components/floatingbutton';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPassword, setIsPassword] = useState(false);
    const [passwordRef, setPasswordRef] = useState('');
    const [isActive, setIsActive] = useState(false);
    const[nameError, setNameError] = useState('');
    const[passError, setPasswordError] = useState('');

    const userNameChange = (val) => {
        setUsername(val);
        checkValidation(username, password);
    }

    const passwordChange = (val) => {
        setPassword(val);
        checkValidation(username, password);
    }

    const checkValidation = (name: string, pass: string) => {
        if(name.length == 0 || !_validateEmail(name)){
            setIsActive(false);
            setNameError("Enter valid name");
            return
        }
        if ( pass.length == 0 || !_validatePassword(pass)) {
            setIsActive(false);
            setPasswordError('Enter password');
            return;
        }
       
        
        setNameError('');
        setPasswordError('');
        setIsActive(true);

    }

    const onHandleLogin = () => {
        checkValidation(username, password);
    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: color.WHITE, }}>
            <View style={{ marginHorizontal: moderateScale(16) }}>
                <View style={{ alignItems: 'flex-end' }}>
                    <TouchableOpacity style={{ marginTop: moderateScaleVertical(25), marginBottom: moderateScaleVertical(80), width: moderateScale(39), height: moderateScaleVertical(22) }}>
                        <Text style={{ color: '#E6427A', textAlign: 'center', fontFamily: font.LatoBold, fontSize: textScale(16), fontStyle: 'normal', lineHeight: moderateScaleVertical(22) }}> Skip </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: moderateScale(39), alignSelf: 'center' }}>
                    <Icons.logo />
                </View>

                <View style={{ marginTop: moderateScaleVertical(64) }}></View>
                <FloatingInput
                    floatingText='Email/Username'
                    isMandatory={true}
                    value={username}
                    setText={userNameChange}
                    returnKeyType='next'
                    nextField={passwordRef}
                    keyboardType='email-address'
                    maxLength={150}
                    errorMsg={nameError}
                />

                <FloatingInput
                    floatingText='Password'
                    isMandatory={true}
                    value={password}
                    setText={passwordChange}
                    password={true}
                    isPassword={isPassword}
                    onPasswordToglle={setIsPassword}
                    setRef={(ref) => setPasswordRef(ref)}
                    returnKeyType='done'
                    maxLength={100}
                    onDoneClick={onHandleLogin}
                    errorMsg={passError}

                />

                <View style={{ alignItems: 'flex-end' }}>
                    <TouchableOpacity style={{ marginTop: moderateScaleVertical(25), marginBottom: moderateScaleVertical(80), width: moderateScale(149), height: moderateScaleVertical(22) }}>
                        <Text style={{ color: '#E6427A', textAlign: 'center', fontFamily: font.LatoBold, fontSize: textScale(16), fontStyle: 'normal', lineHeight: moderateScaleVertical(22) }}> Forgot Password? </Text>
                    </TouchableOpacity>
                </View>


                <CustomButton label='LOGIN' onPress={passwordChange} />

                <View style={{ flexDirection: 'row', marginTop: moderateScaleVertical(50), alignSelf: 'center' }}>
                    <Text style={{ color: '#262425', fontFamily: font.LatoRegular, fontWeight: "500", fontSize: textScale(16), fontStyle: 'normal', lineHeight: moderateScaleVertical(22) }}>New To Pageant Planet?</Text>
                    <TouchableOpacity>
                        <Text style={{ color: '#E6427A', fontFamily: font.LatoRegular, fontWeight: "700", fontSize: textScale(16), fontStyle: 'normal', lineHeight: moderateScaleVertical(22) }}> Sign up </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ height: moderateScaleVertical(5), width: moderateScale(150), backgroundColor: '#000', borderRadius: 5, marginTop: moderateScaleVertical(35), alignSelf: 'center' }}></View>

            </View>


        </ScrollView>
    )
}

export default Login;