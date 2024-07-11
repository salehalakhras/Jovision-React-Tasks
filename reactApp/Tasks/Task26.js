import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import MyFunctionPageTask26 from '../Components/MyFunctionPage_Task26';

const Task26 = () => {
    const [ip, setIp] = React.useState('');
    async function blockUIReq() {
        let res = await fetch('https://api.ipify.org?format=json');
        let data = await res.json();
        let ipReq = await data.ip;
        setIp(ipReq);
    }
    function nonBlockUIReq() {
        fetch('https://api.ipify.org?format=json')
        .then(res => res.json())
        .then(data => {setIp(data.ip)})
    }
    return (
        <View style={styles.body}>
            <MyFunctionPageTask26 text={ip}></MyFunctionPageTask26>
            <Button onPress={nonBlockUIReq} title={'Non Blocking Request'}></Button>
            <Button onPress={blockUIReq} title={'Blocking Request'}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
    },

})

export default Task26;
