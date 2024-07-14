import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import Video from 'react-native-video';


const Task33 = () => {
    const video = require('../Resouces/Task32/video.mp4');
    const [pause, setPause] = React.useState(false);

    function pauseVideo() {
        setPause(!pause);
    }
    return (
        <View style={styles.container}>
            <Pressable onPressIn={pauseVideo}
                style={styles.pauseBtn}><Video source={video}
                    style={styles.Video}
                    poster={'https://baconmockup.com/300/200/'}
                    paused={pause} />
                    </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    Video: {
        height: 250,
        width: 500,
        borderWidth: 1,
        borderColor: 'blue',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
})

export default Task33;
