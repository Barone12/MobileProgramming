import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function MenuButton(props) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={props.toggleMenu}
        hipSlop={{top: 10, bottom: 10, left: 20, right: 20}}
        pressRetentionOffset={{top: 20, bottom: 30, left: 20, right: 20}}
        android_ripple={{color: 'white', borderless: false, radius: 150, foreground: true}}
        >
        <Text style={styles.buttonText}>{props.text}</Text>
      </Pressable>
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
  button: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
  },
});
