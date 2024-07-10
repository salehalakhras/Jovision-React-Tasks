import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class MyClassPageTask25 extends Component {
    
    constructor(props){
        super(props);
        this.textRef = React.createRef();
        this.text = '';
        
    }

    changeText(input) {
        this.text = input;
    }


    render() {
        return (
            <View>
                <Text ref={this.textRef}>{this.text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
})

export default MyClassPageTask25;
