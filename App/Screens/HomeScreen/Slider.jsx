import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import GlobalApi from "../../../Utils/GlobalApi";
import Heading from "../../Components/Heading";

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
            <Heading text={'Offer For You'} />
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
    sliderImage: {
        width: 270,
        height: 150,
        borderRadius: 20,
        objectFit: "fill"
    },
});
