import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers";
import TwitterApp from "./components/main";
import dataService from "./actions/fetchTrends";
import { View } from "react-native";

const store = createStore(allReducers, applyMiddleware(dataService));

store.subscribe(() => {
  console.log(store.getState());
})

class App extends Component {
  static navigationOptions = {
    title: "Home"
  }
  render() {
    return (
      <Provider store={store}>
      <TwitterApp
        navigation={this.props.navigation}
      />
      </Provider>
    );
  }
}
store.dispatch({type: "FETCH_TRENDS"});
export default App;