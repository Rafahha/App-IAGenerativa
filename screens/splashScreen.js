import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";

import logo from "../assets/icon_app.png";

export default function SplashScreen({ navigation }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace("Home");
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.logoBox}>
                <Image
                    source={logo}
                    style={styles.logo}
                />
            </View>
            <Text style={styles.title}>PitchCraft</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000C1D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: "Georgia, sans-serif",
        textAlign: "center",
        position: "absolute",
        bottom: "20%",
        fontSize: 50,
        color: "#FFFFFF"
    },
    logoBox: {
        width: "60%",
        height: "60%"
    },
    logo: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    }
});