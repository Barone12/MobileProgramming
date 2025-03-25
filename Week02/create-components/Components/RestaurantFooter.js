import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function RestaurantFooter() {
    return (
        <View style={styles.footer}>
            <Text style={styles.text}>
                2025년 봄학기 모바일프로그래밍 04분반. All Rights Reserved.
            </Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#FFDDAB',
    },
    text: {
        fontSize: 14,
        color: '#333',
    },
});
