/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button, ActivityIndicator} from 'react-native';

const Task18 = () => {
  const [clear, setClear] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setClear(false);
    }, 5000);
  }, []);

  return (
    <View>
      {clear ? (
        <View>
          <ActivityIndicator size="large" />
          <Text>'Loading'</Text>
        </View>
      ) : (
        <Text>'John Doe'</Text>
      )}
    </View>
  );
};

export default Task18;
