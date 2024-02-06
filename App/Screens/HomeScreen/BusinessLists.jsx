import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../../Utils/GlobalApi';
import Heading from '../../Components/Heading';
import BusinessListItemSmall from './BusinessListItemSmall';

export default function BusinessLists() {

    const [businessLists, setBusinessLists] = useState([]);

    useEffect(() => {
        getBusinessLists()
    }, [])

    const getBusinessLists = () => {
        GlobalApi.getBusinessLists().then((resp) => {
            setBusinessLists(resp?.businessLists)
        })
    }


    return (
        <View style={{ marginTop: 20 }}>
            <Heading text={"Latest Business"} isViewAll={true} />
            <FlatList
                data={businessLists}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View style={{ marginRight: 10 }}>
                        <BusinessListItemSmall business={item} />
                    </View>
                )}
            />
        </View>
    )
}