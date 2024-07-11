import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import PressableImageFComponent_Task28 from '../Components/PressableImageFComponent_Task28';
import {imgList} from '../Components/ImageList_Task28';

const Task28 = () => {
    return (
        <View style={styles.container}>
            <FlatList
                style={{flex: 1,}}
                contentContainerStyle={{flexGrow: 1,}}
                data={imgList}
                renderItem={({ img, index }) => <PressableImageFComponent_Task28 index={index}/>}
                keyExtractor={item => item.index}>
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
