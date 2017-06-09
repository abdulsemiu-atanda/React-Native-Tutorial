import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Alert
} from "react-native";
import Feeds from "./feeds";
import * as twitterTrends from "../actions/fetchTrends";

class TwitterApp extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     trending: ["obasanjo", "atiku", "UCL"]
  //   }
  // }

  static navigationOptions = {
    title: "Home"
  }
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
  },
  text: {
    marginLeft: 20,
    marginBottom: 20,
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
  }
});

function mapStateProps(state) {
  return {
    trending: state.trending
  }
}
function mapDispatchToProps (dispatch) {
  bindActionCreators({ trending: twitterTrends }, dispatch);
}

export default connect(mapStateProps, mapDispatchToProps)(TwitterApp);