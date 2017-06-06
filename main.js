import React, { Component } from "react";

import { 
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Alert} from "react-native";
import Feeds from "./components/feeds";

class TwitterApp extends Component {
  constructor() {
    super()
    this.state = {
      trending: ["obasanjo", "atiku", "UCL"]
    }
  }

  static navigationOptions = {
    title: "Home"
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> #Trending </Text>
        <Feeds
        feeds={this.state.trending}
        navigation={this.props.navigation}
        />
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  },
  text: {
    marginLeft: 20,
    marginBottom: 20,
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
  }
});

export default TwitterApp;