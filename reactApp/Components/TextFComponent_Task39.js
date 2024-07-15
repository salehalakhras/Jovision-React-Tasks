import React from 'react';
import { StyleSheet, TextInput} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';


const TextFComponentTask39 = () => {
    const text = useSelector(state => state.text);
    const dispatch = useDispatch();
    var inputText = text;
    React.useEffect(() => {
        return () => {
            console.log(inputText);
            dispatch({type: 'SAVE_STATE', text: inputText})
        }
    },[inputText])

    return (
        <>
        <TextInput style={styles.input} onChangeText={(txt) => {inputText = txt}}>{inputText}</TextInput>
        </>
    );
}

const styles = StyleSheet.create({
    input:{
        padding: 10,
        borderColor: 'green',
        borderWidth: 1,
    }
})

export default TextFComponentTask39;
