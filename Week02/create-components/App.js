import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RestaurantHeader from "./RestaurantHeader/RestaurantHeader";
import RestaurantFooter from "./RestaurantFooter/RestaurantFooter";
export default function App() {
  return (
    <View 
        style={{
          flex: 1,
          backgroundColor: '#485E57',
      }}
    >
      <View style={{
        backgroundColor: '#C9BA6B',
        paddingTop: 40,
      }}
      >
        <RestaurantHeader />
      </View>
      <View style={{
        flex: 1,
        backgroundColor: '#567EB3',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text>
          여기는 본문이...
        </Text>
      </View>
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
