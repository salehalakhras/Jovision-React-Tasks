import React from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';
import ImageFComponentTask27 from '../Components/ImageFComponent_Task27';

const Task27 = () => {
    const [imgIdx,setImgIdx] = React.useState(0);

    function handleImgBtn(){
        Alert.alert(
            'Choose Image',
            'Please enter the image index (1,2,3)',
            [
              {
                text: 'Image 1',
                onPress: () => {
                    setImgIdx(1);
                }
              },
              {
                text: 'Image 2',
                onPress: () => {
                    setImgIdx(2);
                }
              },
              {
                text: 'Image 3',
                onPress: () => {
                    setImgIdx(3);
                }
              },
            ],
          );
    }

    return (
        <View style={styles.container}>
            <ImageFComponentTask27 imgIndex={imgIdx}></ImageFComponentTask27>
            <Button onPress={handleImgBtn} title={'Choose Image'}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Task27;
