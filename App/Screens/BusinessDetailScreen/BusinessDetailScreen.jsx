import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../../../Utils/Colors';
import Heading from '../../Components/Heading';

export default function BusinessDetailScreen() {
    const param = useRoute().params;
    const [business, setBusiness] = useState(param.business);
    useEffect(() => {
        console.log(param?.business)
    }, [])
    const navigation = useNavigation();
    return business && (
        <View>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.backBtnContainer}
            >
                <Ionicons name="arrow-back-outline" size={30} color="white" />
            </TouchableOpacity>
            <Image
                source={{ uri: business?.images[0]?.url }}
                style={{ width: '100%', height: 300 }}
            />
            <View style={styles.infoContainer}>
                <Text
                    style={{ fontFamily: 'outfit-bold', fontSize: 25 }}
                >
                    {business?.name}
                </Text>
                <View style={styles.subContainer}>
                    <Text style={{ fontFamily: 'outfit-medium', color: Colors.PRIMARY, fontSize: 20 }}>
                        {business?.contactPerson} 🌟
                    </Text>
                    <Text style={{
                        color: Colors.PRIMARY,
                        backgroundColor: Colors.PRIMARY_LIGHT,
                        padding: 5,
                        borderRadius: 5,
                    }}>
                        {business?.category?.name}
                    </Text>
                </View>
                <Text style={{ fontSize: 17, fontFamily: 'outfit', color: Colors.GRAY }}>
                    <Ionicons name="location-sharp" size={25} color={Colors.PRIMARY} />
                    {business?.address}
                </Text>
                {/* Horizontal Line */}
                <View style={{
                    borderWidth: 0.4,
                    borderColor: Colors.GRAY,
                    marginBottom: 20,
                }}></View>
                {/* About me Section */}
                <View>
                    <Heading text={"About Me"} />
                    <Text
                        style={{
                            fontFamily: 'outfit',
                            color: Colors.GRAY,
                            fontSize: 16,
                            lineHeight: 28,
                        }}
                        numberOfLines={5}
                    >
                        {business?.about}
                    </Text>
                    <Text
                        style={{
                            color: Colors.PRIMARY,
                            fontSize: 16,
                            fontFamily: 'outfit',
                        }}
                    >
                        Read More
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    backBtnContainer: {
        position: 'absolute',
        zIndex: 10,
        padding: 20,
    },
    infoContainer: {
        padding: 20,
        display: 'flex',
        gap: 7
    },
    subContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center'
    },
})