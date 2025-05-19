import {StyleSheet, View, useColorScheme} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Footer from "./Footer";
import MenuList from "./MenuList";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";
//npx create-expo-app@latest --template blank [expo 디렉터리 이름]
// 실행 명령어: npx expo start --localhost --android

const Stack = createNativeStackNavigator();
export default function Menu() {
    const [showMenu, setShowMenu] = useState(true);
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';
    const navigation = useNavigation();

    function handlePress(evt)
    {
        navigation.push('Menu');
    }
    
    return (
        <View style={styles.container}>
           <MenuList/>
            <Footer />
            <View style={{
                backgroundColor: '#02343F',
                paddingTop: 20,
            }}>
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
