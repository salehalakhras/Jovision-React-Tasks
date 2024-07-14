import React from 'react';
import { StyleSheet, View } from 'react-native';
import TextFComponentTask38 from '../Components/TextFComponent_Task38';

export const textContext = React.createContext();

const Task38 = () => {
    const [text,setText] = React.useState()
    return (
        <View style={styles.container}>
            <textContext.Provider value={{text,setText}}>
            <TextFComponentTask38></TextFComponentTask38>
            <TextFComponentTask38></TextFComponentTask38>
            <TextFComponentTask38></TextFComponentTask38>
            <TextFComponentTask38></TextFComponentTask38>
            </textContext.Provider>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
    }
})

export default Task38;
