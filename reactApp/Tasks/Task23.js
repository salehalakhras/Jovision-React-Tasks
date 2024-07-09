import React, {useState} from 'react';
import MyClassPage_Task23 from '../Components/MyClassPage_Task23';
import {View, TextInput} from 'react-native';

const Task23 = () => {
  const [data, setData] = useState('');
  return (
    <View>
      <TextInput
        onChangeText={text => {
          setData(text);
        }}></TextInput>
      <MyClassPage_Task23 data={data} />
    </View>
  );
};

export default Task23;
