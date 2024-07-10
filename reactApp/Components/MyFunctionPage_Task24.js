import React,{useState,forwardRef,useRef,useImperativeHandle} from 'react';
import { Text, View } from 'react-native';

const MyFunctionPageTask24 = forwardRef(function(props, ref) {
    const inputRef = useRef(null);
    const [text,setText] = useState('');
    function changeText(input){
        setText(input);
    }
    useImperativeHandle(ref, ()=>{
        return {
            changeText,
        }
    },[])

    return (
        <View>
            <Text ref={inputRef}>{text}</Text>
        </View>
    );
});


export default MyFunctionPageTask24;
