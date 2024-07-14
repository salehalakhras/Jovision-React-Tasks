import React from 'react';
import {View,Text} from 'react-native';
import useCurrentTime from '../Components/useCurrentTime'

const Time = () =>{
    const time = useCurrentTime();
    return(
        <View>
            <Text style={{fontSize: 20}}>{useCurrentTime().toString()}</Text>
        </View>
    )
}

export default Time;