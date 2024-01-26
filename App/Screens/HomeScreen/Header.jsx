import { useUser } from '@clerk/clerk-expo';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import Colors from '../../../Utils/Colors';

export default function Header() {
    const { user, isLoading } = useUser();
    return user && (
        <View style={styles.container}>
            {/* Profile Section */}
            <View style={styles.profileMainContainer}>
                <View style={styles.profileContainer}>
                    <Image
                        source={{ uri: user?.imageUrl }}
                        style={styles.userImage}
                    />
                    <View>
                        <Text style={{ color: Colors.WHITE }}>Welcome,</Text>
                        <Text style={{
                            color: Colors.WHITE,
                            fontSize: 20
                        }}>{user?.fullName}</Text>
                    </View>
                </View>
                <FontAwesome
                    name='bookmark-o'
                    size={27}
                    color="white"
                />
            </View>
            {/* Search Bar Section */}
            <View style={styles.searchBarContainer}>
                <TextInput
                    placeholder='Search'
                    style={styles.textInput}
                />
                <FontAwesome
                    name='search'
                    size={27}
                    style={styles.searchBtn}
                    color={Colors.PRIMARY}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 40,
        backgroundColor: Colors.PRIMARY,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    profileMainContainer: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    profileContainer: {
        display: "flex",
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    userImage: {
        width: 45,
        height: 45,
        borderRadius: 99,
    },
    textInput: {
        padding: 7,
        paddingHorizontal: 16,
        backgroundColor: Colors.WHITE,
        borderRadius: 8,
        width: '85%',
        fontSize: 16
    },
    searchBarContainer: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        marginBottom: 10
    },
    searchBtn: {
        backgroundColor: Colors.WHITE,
        padding: 10,
        borderRadius: 8
    },
})