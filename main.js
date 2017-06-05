import React, { Component } from "react";

import { AppRegistry, Text, View, StyleSheet } from "react-native";
import Feeds from "./components/feeds"

class TwitterApp extends Component {
  constructor() {
    super()
    this.state = {
      trending: ["obasanjo", "atiku", "UCL"]
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text> Hello to every one!! </Text>
        <Feeds feeds={this.state.trending}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  },
});

export default TwitterApp;