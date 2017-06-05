/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Twitter from "./main";

export default class analysis extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Twitter />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F7F7",
    flex: 1,
    justifyContent: "flex-start",
  },
});

AppRegistry.registerComponent('analysis', () => analysis);
