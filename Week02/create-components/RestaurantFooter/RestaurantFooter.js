import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';

export default function RestaurantFooter() {
    return (
        <View style={
            {
                justifyContent: 'center',
            }
        }>
            <footer>
            <Text>2025년 봄학기 모바일프로그래밍 04분반.All Rights Reserved.</Text>
            <StatusBar style="auto"/>
            </footer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
