import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import TextCComponentTask38 from './TextCComponent_Task38';
import {textContext} from '../Tasks/Task38';

const TextFComponentTask38 = (props) => {
    const {text, setText} = React.useContext(textContext);
    return (
        <>
        <TextInput placeholder={'Enter Text'} style={styles.input} onChangeText={text => {setText(text)}}></TextInput>
        <TextCComponentTask38></TextCComponentTask38>
        </>
    );
}

const styles = StyleSheet.create({
    input:{
        borderColor: 'blue',
        borderWidth: 1,
        margin: 10,
        padding: 10,
    }
})

export default TextFComponentTask38;
