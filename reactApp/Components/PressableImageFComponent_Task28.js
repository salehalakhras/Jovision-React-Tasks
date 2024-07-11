import React from 'react';
import { StyleSheet, View, Pressable,Image, Alert } from 'react-native';


const PressableImageFComponent_Task28 = (props) => {

    function imgPress(){
        Alert.alert('Image Pressed',`You have selected image: ${props.index}`);
    }
    return (
        <View style={styles.container}>
            <Pressable style={styles.imgPressable} onPress={imgPress}>
                <Image style={styles.img} source={props.source}></Image>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',   
    },
    imgPressable:{
        padding: 5,
    },
    img:{
        height: 110,
        aspectRatio: 2,
        resizeMode: 'cover',
    },
})

export default PressableImageFComponent_Task28;
