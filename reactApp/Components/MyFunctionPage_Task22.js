import React, {useState} from 'react';
import {View, TextInput} from 'react-native';

const MyFunctionPage_Task22 = ({sendData}) => {
  const [text, setText] = useState('');
  return (
    <View>
      <TextInput onChangeText={sendData} />
    </View>
  );
};

export default MyFunctionPage_Task22;
