import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={
      {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }
    }>
      <Text>여기는 본문 내용이 들어갈 장소입니다.</Text>
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
