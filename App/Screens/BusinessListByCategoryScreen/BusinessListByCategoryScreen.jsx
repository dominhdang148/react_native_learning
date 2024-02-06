import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import GlobalApi from '../../../Utils/GlobalApi';
import BusinessListItem from './BusinessListItem';
import Colors from '../../../Utils/Colors';

export default function BusinessListByCategoryScreen() {
    const param = useRoute().params;
    const navigation = useNavigation();
    const [businessLists, setBusinessLists] = useState([]);
    useEffect(() => {
        param && getBusinessListByCategory()
    }, [param]);
    const getBusinessListByCategory = () => {
        GlobalApi.getBusinessListsByCategory(param.category).then(resp => {
            console.log(resp.businessLists);
            setBusinessLists(resp?.businessLists);
        })
    }
    return (
        <View style={{ padding: 20, paddingTop: 30 }}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                <Ionicons name="arrow-back-outline" size={30} color="black" />
                <Text style={{ fontSize: 25, fontFamily: "outfit-medium" }}>{param?.category}</Text>
            </TouchableOpacity>
            {businessLists.length > 0 ? <FlatList
                style={{ marginTop: 15 }}
                data={businessLists}
                renderItem={({ item, index }) => (
                    <BusinessListItem business={item} />
                )}
            /> :
                <Text
                    style={{
                        fontFamily: 'outfit-medium',
                        fontSize: 20,
                        textAlign: 'center',
                        marginTop: '20%',
                        color: Colors.GRAY,
                    }}
                >No Business Found</Text>
            }
        </View >
    )
}