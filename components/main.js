import React, { Component } from "react";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import {
  Text,
  View,
  StyleSheet
} from "react-native";
import Feeds from "./feeds";

class TwitterApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> #Trending </Text>
        <Feeds
          feeds={this.props.trending}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: "#F7F7F7",
    flex: 1
  },
  buttonText: {
    color: "#FAFAFA",
    fontSize: 20,
    fontWeight: "600"
  },
  text: {
    marginLeft: 20,
    marginBottom: 20,
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
  },
});

function mapStateProps(state) {
  return {
    trending: state.trending
  }
}

export default connect(mapStateProps)(TwitterApp);