import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function RestaurantHeader() {
  return (
    <View style={
      {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }
    }>
      <Text>식당이름</Text>
      <StatusBar style="auto" />
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
