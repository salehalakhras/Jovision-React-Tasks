import React from 'react';
import { StyleSheet, View,Text } from 'react-native';

const MyFunctionPageTask26 = (props) => {
    return (
        <View>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
    borderColor: 'blue',
    borderWidth: 2,
    },
})

export default MyFunctionPageTask26;
