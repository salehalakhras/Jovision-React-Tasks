import React from 'react';
import { StyleSheet, View } from 'react-native';
import Video, {VideoRef} from 'react-native-video';

const Task32 = () => {
    const video = require('../Resouces/Task32/video.mp4');
    return (
        <View style={styles.container}>
            <Video source={video}                                                  
                style={styles.Video}
                poster={'https://baconmockup.com/300/200/'} />
        </View>
    );
}

const styles = StyleSheet.create({
    Video: {
        height: 250,
        borderWidth: 1,
        borderColor: 'blue',
      },
    container:{
        flex:1,
        justifyContent: 'center',
    }
})

export default Task32;
