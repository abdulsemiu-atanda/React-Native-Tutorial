import React, { Component } from "react";

import { AppRegistry, View, Text, ScrollView, ListView, StyleSheet, Button } from "react-native";

class Feeds extends Component {
  constructor(props, context) {
    super(props, context)
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: ds.cloneWithRows(props.feeds)
    }
  }

  componentWillReceiveProps(props) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.setState({ dataSource: ds.cloneWithRows(props.feeds) });
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
      <View>
        <Text style={styles.text}> #Trending </Text>
        <ListView
          style={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
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
  text: {
    marginLeft: 20,
    marginBottom: 20,
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
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
});

export default Feeds;