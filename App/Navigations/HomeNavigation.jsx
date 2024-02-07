import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import BusinessDetailScreen from '../Screens/BusinessDetailScreen/BusinessDetailScreen';
import BusinessListByCategoryScreen from '../Screens/BusinessListByCategoryScreen/BusinessListByCategoryScreen';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';

const Stack = createStackNavigator();

export default function HomeNavigation() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='home-screen' component={HomeScreen} />
            <Stack.Screen name='business-list' component={BusinessListByCategoryScreen} />
            <Stack.Screen name='business-detail' component={BusinessDetailScreen} />
        </Stack.Navigator>
    )
}



