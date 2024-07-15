import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
// import TextFComponentTask39 from '../Components/TextFComponent_Task39';
import { useSelector, useDispatch } from 'react-redux';
import TextCComponentTask40 from '../Components/TextCComponent_Task40';


const Task39 = () => {
    const showComponent = useSelector(state => state.showComponent)
    const dispatch = useDispatch();
    return (
            <View style={styles.container}>
                {showComponent? (<TextCComponentTask40></TextCComponentTask40>):null}
                <Button onPress={() => dispatch({type: 'TOGGLE_SHOW', showComponent: !showComponent})} title={showComponent? 'Hide':'Show'}></Button>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Task39;
