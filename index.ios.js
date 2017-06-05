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
  onButtonPress() {
    Alert.alert('Button has been pressed!');
  }
  render() {
    return (
      <View>
        <Twitter />
      </View>
    );
  }
}

AppRegistry.registerComponent('analysis', () => analysis);
