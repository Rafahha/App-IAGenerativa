import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const AppButton = ({ onPress, title, style, textStyle, activeOpacity = 0.8 }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={style}
            activeOpacity={activeOpacity}
        >
            <Text style={[textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default AppButton;