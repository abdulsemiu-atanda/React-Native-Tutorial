import React, { Component } from "react";
import { Alert, View, Button, TextInput, StyleSheet } from "react-native";

class UserInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: ""
    }
    this.onButtonPress = this.onButtonPress.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(text) {
    this.text = text
  }
  onButtonPress(text) {
    Alert.alert(`You wanna search twitter for ${this.text}`);
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={this.onChange}
        />
        <Button
          onPress={this.onButtonPress}
          title="Search"
          style={{ color: "purple" }}
          accessibilityLabel="Dispatches action that searches twitter for input"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 150,
    backgroundColor: "#F7F7F7"
  },
  input: {
    borderWidth: 1,
    borderColor: "#D7D7D7",
    height: 50,
    marginRight: 10,
    marginLeft: 10,
    padding: 15,
    borderRadius: 3,
  }
});

export default UserInput;