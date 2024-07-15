import React from 'react';
import { StyleSheet, TextInput} from 'react-native';
import { connect } from 'react-redux';

class TextCComponentTask40 extends React.Component {
    constructor(){
        super();
        this.inputText;
    }

    componentWillMount(){
        this.inputText = this.props.text;
    }

    componentWillUnmount(){
        console.log(this.inputText);
        this.props.dispatch({type: 'SAVE_STATE', text: this.inputText});
    }

    render() {
        return (
            <>
            <TextInput style={styles.input} onChangeText={(txt) => {this.inputText = txt}}>{this.inputText}</TextInput>
            </>
        );
    }
}

const styles = StyleSheet.create({
    input:{
        padding: 10,
        borderColor: 'green',
        borderWidth: 1,
    }
})

const mapStateToProps = (state) => {
    return {
        text: state.text,
    }
}

export default connect(mapStateToProps)(TextCComponentTask40);