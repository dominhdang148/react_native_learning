import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../../Utils/GlobalApi';

export default function BusinessLists() {

    const [businessLists, setBusinessLists] = useState();

    useEffect(() => {
        getBusinessLists()
    }, [])

    const getBusinessLists = () => {
        GlobalApi.getBusinessLists().then((resp) => {
            console.log(resp.businessLists);
            setBusinessLists(resp?.businessLists)
        })
    }


    return (
        <View>
            <Text>BusinessLists</Text>
        </View>
    )
}