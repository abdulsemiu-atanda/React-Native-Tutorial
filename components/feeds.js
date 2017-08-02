import React, { Component } from "react";
import {
  View,
  ActivityIndicator,
  RefreshControl,
  Text,
  ListView,
  StyleSheet,
  Button } from "react-native";
import { createStore, applyMiddleware } from "redux";
import dataService from "../actions/fetchTrends";
import allReducers from "../reducers";

const store = createStore(allReducers, applyMiddleware(dataService));

class Feeds extends Component {
  constructor(props, context) {
    super(props, context)
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: ds.cloneWithRows(props.feeds),
      animating: true,
      refreshing: false
    }
  }

  componentWillReceiveProps(props) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.setState({ dataSource: ds.cloneWithRows(props.feeds) });
    this.setState({ animating: false });
  }

  onRefresh() {
    this.setState((prevState, props) => {
      return { refreshing: !prevState.refreshing }
    });
    const newDispatch = new Promise((resolve, reject)=> {
      resolve(store.dispatch({type: "FETCH_TRENDS"}))
    });
    newDispatch.then(() => {
      this.setState({refreshing: false});
    });
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
        {this.state.animating ? 
          <ActivityIndicator
            animating={this.state.animating}
            style={styles.spinner}
            size="large"
            color="blue"
          /> :
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh.bind(this)}
                title="Pull to refresh"
              />
            }
          />
        }
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
  button: {
    height: 60,
    borderColor: "#05A5D1",
    borderWidth: 2,
    backgroundColor: "#333",
    margin: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  spinner: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    height: 80
  }
});

export default Feeds;