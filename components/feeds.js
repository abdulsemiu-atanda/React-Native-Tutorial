import React, { Component } from "react";

import { AppRegistry, View, Text, ListView, StyleSheet, Button } from "react-native";

class Feeds extends Component {
  constructor(props, context) {
    super(props, context)
    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
        dataSource: ds.cloneWithRows(props.feeds)
    }
    this.buttonPress = this.buttonPress.bind(this);
  }
  buttonPress() {
      const { navigate } = this.props.navigation;
      return navigate("Input");
  }

  renderRow(feed) {
      return (
          <View style={styles.container}>
          <Text style={styles.label}>{feed}</Text>
          </View>
      );
  }
  render() {
    return (
        <View style={styles.list}>
        <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}
        />
        <Button style={styles.buttonText}
        onPress={this.buttonPress}
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
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e7e7e7",
    padding: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  label: {
      fontSize: 20,
      fontWeight: "300",
  },
  list: {
      flex: 0,
  },
  button: {
      height: 60,
      borderColor: "#05A5D1",
      borderWidth: 2,
      backgroundColor: "#333",
      margin: 20,
      justifyContent: "center",
      alignItems: "center"
  },
  buttonText: {
      color: "#FAFAFA",
      fontSize: 20,
      fontWeight: "600"
  },
});

export default Feeds;