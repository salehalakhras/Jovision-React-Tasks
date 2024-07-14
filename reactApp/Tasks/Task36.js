import React from 'react';
import { StyleSheet, View,ScrollView, Text} from 'react-native';

const Task36 = () => {
    const textArr = new Array(100);
    for (let i = 0; i < textArr.length; i++) {
        textArr[i] = (<Text style={styles.text} key={i} >{generateRandomWord(10)}</Text>)
    }
    function generateRandomWord(length) {
        let result = '';
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
    
    return (
        <View>
            <ScrollView refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
                {textArr}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({

    text:{
        fontSize: 24,
        textAlign: 'center'
    }
})

export default Task36;
