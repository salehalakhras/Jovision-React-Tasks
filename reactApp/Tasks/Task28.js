import React from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import PressableImageFComponent_Task28 from '../Components/PressableImageFComponent_Task28';
import { imgList } from '../Components/ImageList_Task28';
import prompt from 'react-native-prompt-android';

const Task28 = () => {
    const [imgArr, setImgArr] = React.useState(imgList);
    const flatListRef = React.useRef(null);
    function scrollToBtn() {
        prompt('Scroll To Index', 'Please enter the image index you want to scroll to:', [

            { text: 'Cancel', style: 'cancel' },
            {
                text: 'Scroll', onPress: index => {
                    if (index < imgArr.length && index >= 0) {
                        flatListRef.current.scrollToIndex({ animated: true, index: index })
                    }
                }
            },
        ],
            {
                type: 'numeric',
                cancelable: false,
                defaultValue: '',
                placeholder: ''
            }
        )
    }

    function removeBtn(index){
        setImgArr(imgArr.filter((item,i) => i !== index))
    }


    return (
        <View style={styles.container}>
            <Button title={'Scroll To'} onPress={scrollToBtn}></Button>
            <FlatList
                style={{ flex: 1, }}
                contentContainerStyle={{ flexGrow: 1, }}
                data={imgArr}
                renderItem={({ index, img }) => {
                    return (
                        <View style={styles.listItem}>
                            <PressableImageFComponent_Task28 source={imgArr[index].img} index={index} />
                            <Button color={'red'} title={'Remove'} onPress={()=>removeBtn(index)}></Button>
                        </View>)
                }}
                keyExtractor={item => item.index}
                ref={flatListRef}>
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listItem:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
    }
})

export default Task28;
