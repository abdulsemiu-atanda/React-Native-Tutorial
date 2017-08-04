import React, { Component } from "react";
import { Card, CardItem, Body, Text } from "native-base";

export default class notFound extends Component {
  static navigationOptions = {
    title: "Not Found"
  }

  render() {
    const { err } = this.props.navigation.state.params;
    return (
      <CardItem>
        <Body>
          <Text>{err.text}</Text>
        </Body>
      </CardItem>
    );
  }
}