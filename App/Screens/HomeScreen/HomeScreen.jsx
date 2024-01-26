import React from 'react'
import { View } from 'react-native'
import Header from './Header'
import Slider from './Slider'

export default function HomeScreen() {
    return (
        <View>
            {/* Header */}
            <Header />
            {/* Slider  */}
            <Slider />
        </View>
    )
}