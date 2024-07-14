import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { textContext } from '../Tasks/Task38';

class TextCComponentTask38 extends Component {
    render() {
        return (
            <>
                <textContext.Consumer>
                    {(value) => {
                        return (<Text style={styles.text}>{value.text}</Text>)
                    }}

                </textContext.Consumer>

            </>
        );
    }
}

const styles = StyleSheet.create({
    text:{
        fontSize: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: 'green',
    }
})

export default TextCComponentTask38;
