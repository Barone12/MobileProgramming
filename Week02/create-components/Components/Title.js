import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';

export default function Title({text}) {
    return (
            <Text style={styles.title}>{text}</Text>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
        justify: 'center',
        paddingBottom: 20,
        paddingTop: 20,
    },
});
