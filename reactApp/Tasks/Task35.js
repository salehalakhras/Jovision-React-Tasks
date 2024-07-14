import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

const Task35 = () => {
    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState('');
    const [country, setCountry] = React.useState('');
    const [localUser, setLocalUser] = React.useState(null);
    getData().then(val => {
        const date = new Date();
        if ((date - Date.parse(val.timestamp)) > 60000) {
            val = null;
        }

        if (val != null) {
            setLocalUser(val);
        }
        else {
            storeData({})
            setLocalUser(null);
        }
        return
    })




    function submitBtn() {
        const userObj = {
            'name': name,
            'age': age,
            'country': country,
            'timestamp': new Date(),
        }

        storeData(userObj);
    }

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('user', jsonValue);
        } catch (e) {
            console.log(e)
        }
    };

    async function getData() {
        try {
            const jsonValue = await AsyncStorage.getItem('user');
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} onChangeText={(text) => { setName(text) }} placeholder={'Name:'}>{localUser ? localUser.name : ''}</TextInput>
            <TextInput style={styles.input} onChangeText={(text) => { setAge(text) }} placeholder={'Age:'} keyboardType={'numeric'}>{localUser ? localUser.age : ''}</TextInput>
            <TextInput style={styles.input} onChangeText={(text) => { setCountry(text) }} placeholder={'Country:'}>{localUser ? localUser.country : ''}</TextInput>
            <Button title={'Submit'} onPress={submitBtn}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        borderColor: 'blue',
        borderWidth: 1,
        paddingHorizontal: 5,
        margin: 10,
    }
})

export default Task35;
