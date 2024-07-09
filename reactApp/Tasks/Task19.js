/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, Button} from 'react-native';
import {useState} from 'react';
import MyClassComponent_Task19 from '../Components/MyClassComponent_Task19';

const Task19 = () => {
  const [showState, setShow] = useState(false);
  return (
    <View>
      <Button
        onPress={() => {
          showState? console.log('Class Component HIdden') : console.log('Class Component Shown');
          setShow(!showState);
        }}
        title={'Show'}></Button>
      {showState ? <MyClassComponent_Task19></MyClassComponent_Task19> : null}
    </View>
  );
};

export default Task19;
