import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class UserInput extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>This will take inputs</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    paddingTop: 40
  }
});

export default UserInput;