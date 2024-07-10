import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import MyClassPageTask25 from '../Components/MyClassPage_Task25';

const Task25 = () => {
    const [input, setInput] = React.useState('');
    const childRef = React.useRef(null);

    function handleTextChange(input) {
        childRef.current.changeText(input);
    }

    return (
        <View style={styles.body}>
            <TextInput style={styles.input}
                value={input}
                onChangeText={text => {
                    setInput(text);
                    handleTextChange(text)
                }}></TextInput>
            <MyClassPageTask25 ref={childRef}></MyClassPageTask25>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        borderWidth: 3,
        borderColor: 'blue',
        borderRadius: 15,
    }
})

export default Task25;
