import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';

export default function Title({ text = "제목없음" }) {
    return(<View>
        <Text style={styles.title}>{text}</Text>
        </View>);
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 20,
        paddingTop: 20,
        color: '#02343F',
    },
});
