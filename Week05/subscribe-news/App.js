import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SubscribeScreen from "./Components/SubscribeScreen";
export default function App() {
  return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          //Todo Header
            <Header />
        </View>
        <View style={styles.contentContainer}>
          //Todo SubscribeScreen
            <SubscribeScreen/>
        </View>
        <View style={styles.footerContainer}>
          //Todo footer
            <Footer />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
  headerContainer: {
    backgroundColor: '#C9BA6B',
    paddingTop: 40,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#567EB3',
  },
  footerContainer: {
    backgroundColor: '#C9BA6B',
    paddingTop: 20,
  }
});
