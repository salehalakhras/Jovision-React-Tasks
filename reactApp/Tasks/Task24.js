import React,{useRef} from 'react';
import { TextInput,View,StyleSheet } from 'react-native';
import MyFunctionPageTask24 from '../Components/MyFunctionPage_Task24';

const Task24 = () => {
    const ref = useRef(null);
    function changeChild(input){
        ref.current.changeText(input);
    }
    return (
        <View style={styles.body}>
            <TextInput onChangeText={text => {changeChild(text)}}></TextInput>
            <MyFunctionPageTask24 ref={ref}></MyFunctionPageTask24>
        </View>
    );
}

const styles = StyleSheet.create({
    body:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Task24;
