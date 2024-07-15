import React from 'react';
import { StyleSheet, View,Text } from 'react-native';


export const Screnn1 = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize:24}}>{'Screen' + (navigation.getState().index + 1)}</Text>
        </View>
    );
}
export const Screnn2 = ({navigation}) => {
    
    return (
        <View style={styles.container}>
             <Text style={{fontSize:24}}>{'Screen' + (navigation.getState().index + 1)}</Text>
        </View>
    );
}
export const Screnn3 = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize:24}}>{'Screen' + (navigation.getState().index + 1)}</Text>
        </View>
    );
}
export const Screnn4 = ({navigation}) => {
    return (
        <View style={styles.container}>
             <Text style={{fontSize:24}}>{'Screen' + (navigation.getState().index + 1)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

