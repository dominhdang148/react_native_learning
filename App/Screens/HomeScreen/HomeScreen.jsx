import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import Header from './Header'
import Slider from './Slider'
import Categories from './Categories'
import BusinessLists from './BusinessLists'
import GlobalApi from '../../../Utils/GlobalApi'

export default function HomeScreen() {
    return (
        <View>
            {/* Header */}
            <Header />

            <View style={{ padding: 20 }}>
                {/* Sliders  */}
                <Slider />
                {/* Categories */}
                <Categories />
                {/* Business Lists */}
                <BusinessLists />
            </View>
        </View>
    )
}