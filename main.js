import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers";
import TwitterApp from "./components/main";
import { View } from "react-native";

const store = createStore(allReducers);

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

export default App;