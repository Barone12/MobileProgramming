import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Title from "./Components/Title";
import Content from "./Components/Content";
import MenuList from "./Components/MenuList";
import {useState} from "react";
import MenuButton from "./Components/MenuButton";
//npx create-expo-app@latest --template blank [expo 디렉터리 이름]
// 실행 명령어: npx expo start --localhost --android
export default function App() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <View style={styles.container}>
            <View
                style={{
                    backgroundColor: '#02343F',
                    paddingTop: 20,
                }}>
                <Header />
            </View>
            {(showMenu) ?(popupMenuList(0.3, <Content/>), popupMenu(0.7, <MenuList/>)): (popupMenuList(0))}
            
            <View style={{flex: 0.3}}>
                <MenuButton
                    toggleMenu={() => setShowMenu(!showMenu)}
                    text={showMenu ? '메뉴 닫기' : '메뉴 열기'}/>
            </View>
            
            <Footer />

            <View style={{
                backgroundColor: '#02343F',
                paddingTop: 20,
            }}>
            </View>

        </View>
    );
}

const popupMenuList = ({flexity, content}) => (
    <View style={{flex: flexity}}>
        {content}
    </View>
);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#495E57',
    },
    contentContainer: {
        flex: 1,
        backgroundColor: '#F0EDCC',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
});
