import {StyleSheet, View, useColorScheme} from 'react-native';
import Header from "./Header";
import Content from "./Content";

//npx create-expo-app@latest --template blank [expo 디렉터리 이름]
// 실행 명령어: npx expo start --localhost --android

export default function Home() {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';
    
    return (
        <View style={styles.container}>
            <View
                style={{
                    backgroundColor: '#02343F',
                    paddingTop: 20,
                }}>
                <Header />
            </View>

            <View style={[styles.contentContainer,
                {backgroundColor: isDark ? 'black' : 'cornsilk'},
                {fontColor: isDark ? 'white' : 'black'},]}>
                <Content />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#495E57',
    },
    contentContainer: {
        flex: 1,
        backgroundColor: '#F0EDCC',
        fontColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
});
