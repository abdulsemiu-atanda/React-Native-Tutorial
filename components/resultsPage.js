import React, { Component } from "react";
import { Text } from "react-native";

class ResultPage extends Component {
  static navigationOptions = {
    title: "Search Results"
  }
  render() {
    console.log(this.props);
    const { text } = this.props.navigation.state.params
    return (
      <Text>Results from the search for {text} will be here</Text>
    );
  }
}

export default ResultPage;
