import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const images = [
    require('reactApp/Resouces/img1.jpg'),
    require('reactApp/Resouces/img2.jpg'),
    require('reactApp/Resouces/img3.jpg')
]

const ImageFComponentTask27 = (props) => {
    const [imgPath, setImgPath] = React.useState('');

    return (
        <View>
            <Image source={images[props.imgIndex-1]} style={styles.img}></Image>
        </View>
    );
}

const styles = StyleSheet.create({

    img: {
        width: 300,
        height: 600,
        margin: 10,
    }
})

export default ImageFComponentTask27;
