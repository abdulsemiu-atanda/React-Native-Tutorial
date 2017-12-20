/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';
import Analysis from "./config/routes/navigate";

class analysis extends Component {
  render() {
    return (
        <Analysis />
    );
  }
}

AppRegistry.registerComponent('analysis', () => analysis);