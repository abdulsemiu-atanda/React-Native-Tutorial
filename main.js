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
setTimeout(() => {store.dispatch({type: "FETCH_TRENDS"}) }, 2000);
export default App;