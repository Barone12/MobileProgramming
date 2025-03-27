import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import RestaurantHeader from "./Components/RestaurantHeader";
import RestaurantFooter from "./Components/RestaurantFooter";
import Title from "./Components/Title";
import Content from "./Components/Content";
import MenuList from "./Components/MenuList";

// 실행 명령어: npx expo start --localhost --android
export default function App() {
  return (
      <View style={styles.container}>
        <View
            style={{
              backgroundColor: '#02343F',
              paddingTop: 20,
            }}>
          <RestaurantHeader />
        </View>

        <ScrollView>
          <View style={styles.contentContainer}>
            <Title text="귀귀살전: 조선풍 꼬리잡기 서바이벌" />
            <Content />
          </View>
        </ScrollView>

        <View>
          <MenuList />
        </View>

        <RestaurantFooter />

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
    flex: 0.3,
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
