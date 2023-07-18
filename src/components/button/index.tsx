import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';

interface Props {
  title: string;
  fun ?: any,
  ht ?: any,
  wt ?: any,
  mrgBtm ?: any,
}

const Button = ({title, fun, mrgBtm, wt}: Props) => {
  return (
    <View style={styles.btnView}>
      <TouchableOpacity style={[styles.button, {marginBottom: mrgBtm, width:wt}]} onPress={fun}>
        <Text style={styles.txt}>{title} </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
