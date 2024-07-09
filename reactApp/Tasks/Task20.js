/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, Button} from 'react-native';
import {useState} from 'react';
import MyFunctionPage_Task20 from '../Components/MyFunctionPage_Task20';

const Task20 = () => {
  const [showState, setShow] = useState(false);
  return (
    <View>
      <Button
        onPress={() => {
          showState
            ? console.log('Function Component HIdden')
            : console.log('Function Component Shown');
          setShow(!showState);
        }}
        title={'Show'}></Button>
      {showState ? <MyFunctionPage_Task20></MyFunctionPage_Task20> : null}
    </View>
  );
};

export default Task20;
