import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PlayScreen from "./src/PlayScreen";

export default function App() {
  const[play, setplay] = useState(false)
  return (
    play ? (<PlayScreen />) :
      (
        <View style={styles.container}>
          <Text style={styles.header}>Rock Papper Scissors</Text>
          <Text style={{ fontSize: 70 }}>✊ ✋ ✌️ </Text>
          <View style={styles.btn}>
            <Button onPress={() => setplay(true)} title="PLAY" />
          </View>
        </View>
      )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 35,
    marginBottom: 10,
  },
  btn: {
    width: 350,
    marginTop: 20,
  }

});
