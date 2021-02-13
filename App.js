import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Scan from './scan'

export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />

      <Scan/>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
