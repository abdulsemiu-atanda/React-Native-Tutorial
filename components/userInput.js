import axios from "axios";
import React, { Component } from "react";
import { Alert, View, Button, TextInput, StyleSheet } from "react-native";
import settings from "../private/settings/settings";

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
  onButtonPress() {
    if (this.text) {
      let searchResult;
      const resultText = [];
      axios.defaults.headers.common['Authorization'] = settings.twitter.authorization;
      axios.get(`https://api.twitter.com/1.1/search/tweets.json?q=${this.text}`).then(response => {
        searchResult = response.data.statuses;
        searchResult.map(result => {
          resultText.push(result.text);
        });
        this.props.navigation.navigate("Results", { text: resultText });
      }).catch(err => {
        error = err;
      });
    } else {
      Alert.alert("Enter something in the search box");
    }
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
          color="#841584"
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