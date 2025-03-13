import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function RestaurantHeader() {
  return (
    <View style={
      {
        backgroundColor: '#F4ACE14'
      }
    }>
      <Text
          style={{
            fontSize: 30,
            color: 'black',
            textAlign: 'center',
          }}
      >
        일락정
      </Text>
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
