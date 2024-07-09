/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, Button} from 'react-native';
import {useState} from 'react';
import MyFunctionPage_Task22 from '../Components/MyFunctionPage_Task22';

const Task22 = () => {
  const [dataFromComp, setData] = useState('');
  function recData(data){
    setData(data);
  }
  return (
    <View>
      <Text>{dataFromComp}</Text>
      <MyFunctionPage_Task22 sendData={recData}></MyFunctionPage_Task22>
    </View>
  );
};

export default Task22;
