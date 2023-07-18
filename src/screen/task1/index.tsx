import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
import {styles} from './style';
import Strings from '../../assets/strings';
import Button from '../../components/button';
import {moderateScale, moderateScaleVertical} from '../../components/responsiveSize';

const Task1 = () => {
  const [isActive, setIsActive] = useState(false);
  const [num, setNum] = useState('');
  const [counting, setCounting] = useState([]);
  const arr: any = [];
  const onHandle = (num) => {
    setIsActive(true);
    if (num != '') {
      for (let i = 1; i <= num; i++) {
        arr.push(i);
      }
    }
    setCounting(arr);
  };
  const onClear = () => {
    setIsActive(false);
    setCounting([]);
    setNum('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={Strings.ENTER_NO}
        keyboardType="numeric"
        value={num}
        onChangeText={val => setNum(val)}
        returnKeyType="next"
        maxLength={4}
        style={styles.input}
      />

      <Button
        fun={() => onHandle(num)}
        title={Strings.PRESS}
        mrgBtm={moderateScaleVertical(40)}
        wt={moderateScale(130)}
      />

      {isActive && counting.length > 0 ? (
        <ScrollView contentContainerStyle={{alignItems: 'center'}}>
          <Text>{counting + ' '}</Text>
          <Button
            fun={() => onClear()}
            title={Strings.CLOSE}
            mrgBtm={moderateScaleVertical(120)}
            wt={moderateScale(130)}
          />
        </ScrollView>
      ) : null}
    </View>
  );
};
export default Task1;
