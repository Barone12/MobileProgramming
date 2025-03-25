import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function RestaurantHeader() {
  return (
    <View style={
      {
        backgroundColor: '#FFDDAB'
      }
    }>
      <Text
          style={{
            fontSize: 30,
            color: 'black',
            textAlign: 'center',
          }}
      >
        귀귀살전
      </Text>
    </View>
  );
}

