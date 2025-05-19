import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import React from 'react';


export default function CustomText({children, style, ...props }) {
    const isDark = useColorScheme() === 'dark';
    const textColor = isDark ? '#C7C2C7' : '#02343F';
    
    return (
        <Text style={[{ color: textColor }, style]} {...props}>
            {children}
        </Text>
    );
}

