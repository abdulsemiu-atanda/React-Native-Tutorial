import React, { Component } from "react";
import {
  View,
  ActivityIndicator,
  RefreshControl,
  ListView,
  StyleSheet } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { Card, CardItem, Text, Button } from "native-base";
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
      <Card style={{ marginLeft: 10, marginTop: 10, marginRight: 10}}>
        <CardItem cardBody>
          <Button transparent>
            <Text>{feed}</Text>
          </Button>
        </CardItem>
      </Card>
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
  spinner: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    height: 80
  }
});

export default Feeds;