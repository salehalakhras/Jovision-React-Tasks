/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { useState } from 'react';

const Task16 = () => {
  const [showState, setShow] = useState(false);
  return (
    <View>
      {showState ? (
        <View>
          <Text >'John Doe'</Text>
        </View>
      ) : null}
      <Button onPress={() => {
        setShow(!showState);
      }} title="Show" />
    </View>
  );
};

export default Task16;
