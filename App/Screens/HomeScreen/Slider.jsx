import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import GlobalApi from '../../../Utils/GlobalApi';

export default function Slider() {
    const [slider, setSliders] = useState();
    useEffect(() => {
        getSliders();
    }, [])
    const getSliders = () => {
        GlobalApi.getSliders().then((resp) => {
            console.log("resp: ", resp.sliders)
            setSlider(resp?.sliders)
        })
    }

    return (
        <View>
            <Text>Slider</Text>
        </View>
    )
}