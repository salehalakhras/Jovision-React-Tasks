import React from 'react';
import { StyleSheet, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { Screnn1,Screnn2,Screnn3,Screnn4 } from '../Components/NavigationFComponent_Task41';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator()

const Task41 = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name={'Screen 1'}
                            component={Screnn1}>
                </Tab.Screen>
                <Tab.Screen name={'Screen 2'}
                            component={Screnn2}>
                </Tab.Screen>
                <Tab.Screen name={'Screen 3'}
                            component={Screnn3}>
                </Tab.Screen>
                <Tab.Screen name={'Screen 4'}
                            component={Screnn4}>
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({})

export default Task41;
