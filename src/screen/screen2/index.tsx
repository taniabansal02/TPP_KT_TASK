import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AppContext} from '../../root';
import {styles} from './style';
import Button from '../../components/button';
import Strings from '../../assets/strings';
import { moderateScale } from '../../components/responsiveSize';

const Screen2 = () => {
  const { navigate} = useNavigation();
  const {text, setText} = useContext(AppContext);

  const navigateToScreen1 = () => {
    setText('');
    navigate('Screen1');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>
        {Strings.TEXT_ENTERED_BY_USER} {text}{' '}
      </Text>

      <Button title={Strings.GO_BACK} fun={() => navigateToScreen1()} wt={moderateScale(130)} />
    </View>
  );
};

export default Screen2;
