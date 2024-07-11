import React from 'react';
import { StyleSheet, View, FlatList,Button } from 'react-native';
import PressableImageFComponent_Task28 from '../Components/PressableImageFComponent_Task28';
import {imgList} from '../Components/ImageList_Task28';
import prompt from 'react-native-prompt-android';

const Task28 = () => {
    const flatListRef = React.useRef(null);
    function scrollToBtn(){
        prompt('Scroll To Index', 'Please enter the image index you want to scroll to:',[
            
                {text: 'Cancel', style: 'cancel'},
                {text: 'Scroll', onPress: index => {
                    if(index < imgList.length && index >= 0){
                        flatListRef.current.scrollToIndex({animated: true,index: index })
                    }
                }},
               ],
               {
                   type: 'numeric',
                   cancelable: false,
                   defaultValue: '',
                   placeholder: ''
               }
        )
    }

    return (
        <View style={styles.container}>
            <Button title={'Scroll To'} onPress={scrollToBtn}></Button>
            <FlatList
                style={{flex: 1,}}
                contentContainerStyle={{flexGrow: 1,}}
                data={imgList}
                renderItem={({ img, index }) => <PressableImageFComponent_Task28 index={index}/>}
                keyExtractor={item => item.index}
                ref={flatListRef}>
                </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})

export default Task28;
