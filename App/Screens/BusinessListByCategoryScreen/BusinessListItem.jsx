import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../../Utils/Colors'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
export default function BusinessListItem({ business }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.push('business-detail', { business: business })}
        >
            <Image source={{ uri: business?.images[0]?.url }}
                style={styles.image} />
            <View style={styles.subContainer}>
                <Text style={{ fontFamily: 'outfit', color: Colors.GRAY, fontSize: 15 }}>{business.contactPerson}</Text>
                <Text style={{ fontFamily: 'outfit-medium', fontSize: 19 }}>{business.name}</Text>
                <Text style={{ fontFamily: 'outfit', color: Colors.GRAY, fontSize: 16 }}>
                    <Ionicons name="location-sharp" size={20} color={Colors.PRIMARY} style={{ marginRight: 10 }} />{business.address}</Text>
            </View>
        </TouchableOpacity >
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: Colors.WHITE,
        borderRadius: 15,
        marginBottom: 15,
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 15
    },
    subContainer: {
        gap: 8
    },
})