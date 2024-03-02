import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import * as splash from 'expo-splash-screen';
import react from 'react';

//this function to prevent splash from being hidden automatically
splash.preventAutoHideAsync();

export default function App() {
  react.useEffect(() => {
    //this function to hide splash based on you needs for example you were waiting to check if there a token or anything
    const timer = setTimeout(() => {
      splash.hideAsync();
      clearTimeout(timer);
    }, 10000);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
