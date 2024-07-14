import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
import Time from '../Components/TimeFComponent_Task34'
import useCurrentTime from '../Components/useCurrentTime'

const Task34 = () => {
    
    return (
        <View style={styles.container}>
            <Time></Time>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    }
})

export default Task34;
