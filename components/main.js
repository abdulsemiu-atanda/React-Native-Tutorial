import React, { Component } from "react";
import { connect } from "react-redux";
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Alert,
  Button
} from "react-native";
import Feeds from "./feeds";

class TwitterApp extends Component {
  static navigationOptions = {
    title: "Home"
  }
  buttonPress() {
    const { navigate } = this.props.navigation;
    return navigate("Input");
  }

  render() {
    return (
      <View style={styles.container}>
        <Feeds
          feeds={this.props.trending}
          navigation={this.props.navigation}
        />
        <Button style={styles.buttonText}
          onPress={this.buttonPress.bind(this)}
          title="Enter Username"
          color="#841584"
          accessibilityLabel="Username to be searched on twitter"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1
  },
  buttonText: {
    color: "#FAFAFA",
    fontSize: 20,
    fontWeight: "600"
  },
});

function mapStateProps(state) {
  return {
    trending: state.trending
  }
}

export default connect(mapStateProps)(TwitterApp);