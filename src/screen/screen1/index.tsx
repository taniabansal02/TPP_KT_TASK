import React, {useContext, useState} from 'react';
import {TextInput, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AppContext} from '../../root';
import {styles} from './style';
import Button from '../../components/button';
import Strings from '../../assets/strings';
import { colors } from '../../assets/theme/color';
import { moderateScale } from '../../components/responsiveSize';

const Screen1 = () => {
  const navigation = useNavigation();
  const navigateToScreen2 = () => {
    setText(test)
    navigation.navigate('Screen2');
  };
 
  const {text, setText} = useContext(AppContext);
  const [test, setTest] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={Strings.ENTER_TEXT}
        value={test}
        placeholderTextColor={colors.black}
        onChangeText={val => setTest(val)}
      />

      <Button
        title={Strings.GO_TO_SCREEN1}
        fun={() => navigateToScreen2()}
        wt={moderateScale(160)}

      />
    </View>
  );
};

export default Screen1;
