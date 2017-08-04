import axios from "axios";
import React, { Component } from "react";
import { ActivityIndicator, Alert, View, Keyboard, TextInput, StyleSheet } from "react-native";
import { Button, Text, Content, Item, Input, Container } from "native-base";
import settings from "../private/settings/settings";

class UserInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: "",
      animating: false
    }
    this.onButtonPress = this.onButtonPress.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(text) {
    this.text = text
  }
  onButtonPress() {
    this.setState({ animating: true });
    if (this.text) {
      this.text.replace(/\s/g, '%20');
      let searchResult;
      const metadata = [];
      const notFound = { text: `Aww! Snap \n No results found for ${this.text}` };
      axios.defaults.headers.common['Authorization'] = settings.twitter.authorization;
      axios.get(`https://api.twitter.com/1.1/search/tweets.json?q=${this.text}`).then(response => {
        searchResult = response.data.statuses;
        searchResult.map(result => {
          const { created_at, user, text, retweet_count, favorite_count } = result;
          metadata.push({ created_at, user, text, retweet_count, favorite_count });
        });
        if (metadata.length > 0) {
          this.props.navigation.navigate("Results", { text: metadata });
          this.setState({ animating: false });
        } else {
          this.props.navigation.navigate("NotFound", { err: notFound });
        }
      }).catch(err => {
        error = err;
      });
    } else {
      Alert.alert("Enter something in the search box");
    }
  }
  render() {
    return (
      <Container>
        {this.state.animating ?
          <ActivityIndicator 
            animating={this.state.animating}
            style={{ alignSelf: "center", height: 80}}
            size="large"
            color="blue"
          /> :
          <Content>
            <Item style={{ marginTop: 20, marginLeft: 10, marginRight: 10, backgroundColor: "#F7F7F7" }} regular>
              <Input onChangeText={this.onChange} />
            </Item>
            <Button style={{ alignSelf: "center", marginTop: 20 }} onPress={this.onButtonPress} bordered>
              <Text>Search</Text>
            </Button>
          </Content>
        }
      </Container>
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
    marginBottom: 20,
    padding: 15,
    borderRadius: 3,
  },
});

export default UserInput;