import React from 'react';
import { StyleSheet, View,Text,Button } from 'react-native';


export const Screnn1 = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize:24}}>{'Screen' + (navigation.getState().index + 1)}</Text>
            <Button title={'Screen 2'} onPress={()=>{navigation.navigate('Screen 2')}}></Button>
            <Button title={'Screen 3'} onPress={()=>{navigation.navigate('Screen 3')}}></Button>
            <Button title={'Screen 4'} onPress={()=>{navigation.navigate('Screen 4')}}></Button>
        </View>
    );
}
export const Screnn2 = ({navigation}) => {
    
    return (
        <View style={styles.container}>
             <Text style={{fontSize:24}}>{'Screen' + (navigation.getState().index + 1)}</Text>
             <Button title={'Screen 1'} onPress={()=>{navigation.navigate('Screen 1')}}></Button>
            <Button title={'Screen 3'} onPress={()=>{navigation.navigate('Screen 3')}}></Button>
            <Button title={'Screen 4'} onPress={()=>{navigation.navigate('Screen 4')}}></Button>
        </View>
    );
}
export const Screnn3 = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize:24}}>{'Screen' + (navigation.getState().index + 1)}</Text>
            <Button title={'Screen 1'} onPress={()=>{navigation.navigate('Screen 1')}}></Button>
            <Button title={'Screen 2'} onPress={()=>{navigation.navigate('Screen 2')}}></Button>
            <Button title={'Screen 4'} onPress={()=>{navigation.navigate('Screen 4')}}></Button>
        </View>
    );
}
export const Screnn4 = ({navigation}) => {
    return (
        <View style={styles.container}>
             <Text style={{fontSize:24}}>{'Screen' + (navigation.getState().index + 1)}</Text>
             <Button title={'Screen 1'} onPress={()=>{navigation.navigate('Screen 1')}}></Button>
            <Button title={'Screen 2'} onPress={()=>{navigation.navigate('Screen 2')}}></Button>
            <Button title={'Screen 3'} onPress={()=>{navigation.navigate('Screen 3')}}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',

    }
})

