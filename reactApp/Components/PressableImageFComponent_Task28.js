import React from 'react';
import { StyleSheet, View, Pressable,Image, Alert } from 'react-native';
import {imgList} from './ImageList_Task28';


const PressableImageFComponent_Task28 = (props) => {

    function imgPress(){
        Alert.alert('Image Pressed',`You have selected image: ${props.index}`);
    }
    return (
        <View style={styles.container}>
            <Pressable style={styles.imgPressable} onPress={imgPress}>
                <Image style={styles.img} source={imgList[props.index].img}></Image>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',   
    },
    imgPressable:{
        borderWidth: 1,
        borderColor: 'blue',
    },
    img:{
        height: 200,
        resizeMode: 'contain',
    }
})

export default PressableImageFComponent_Task28;
