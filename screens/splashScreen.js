import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import styles from "../styles/splashStyle";
import global from "../styles/global";

import * as Font from 'expo-font';

import logo from "../assets/icon_app.png";

export default function SplashScreen({ navigation }) {
    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                'Reggae One': require('../assets/fonts/ReggaeOne-Regular.ttf'),
            });
        }
        loadFonts();
    }, []);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace("Home");
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={[styles.container, global.primary_color]}>
            <View style={styles.logoBox}>
                <Image
                    source={logo}
                    style={styles.logo}
                />
            </View>
            <Text style={styles.title}>PITCHCRAFT</Text>
        </View>
    );
}
