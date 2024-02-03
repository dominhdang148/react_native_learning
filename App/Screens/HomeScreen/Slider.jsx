import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import GlobalApi from "../../../Utils/GlobalApi";

export default function Slider() {
    const [sliders, setSliders] = useState();
    useEffect(() => {
        getSliders();
    }, []);
    const getSliders = () => {
        GlobalApi.getSliders().then((resp) => {
            console.log("resp: ", resp.sliders);
            setSliders(resp?.sliders);
        });
    };
    return (
        <View>
            <Text style={styles.heading}>Offer For You</Text>
            <FlatList
                data={sliders}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View style={{ marginRight: 20 }}>
                        <Image
                            source={{ uri: item?.image?.url }}
                            style={styles.sliderImage}
                        />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontFamily: "outfit-medium",
        marginBottom: 10,
    },
    sliderImage: {
        width: 270,
        height: 150,
        borderRadius: 20,
        objectFit: "contain",
    },
});
