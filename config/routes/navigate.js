import React from "react";
import { StackNavigator, TabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import { Platform } from "react-native";

import UserInput from "../../components/userInput";
import ResultPage from "../../components/resultsPage";
import App from "../../main";
const MainScreen = TabNavigator({
  Home: {
    screen: App,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) =>
        <Icon
          name={(Platform.OS === "ios") ? "ios-albums-outline" : "md-albums"}
          size={32} color={tintColor}
        />
    }
  },
  Input: {
    screen: UserInput,
    navigationOptions: {
      tabBarLabel: "Search",
      tabBarIcon: ({ tintColor }) =>
        <Icon
          name={(Platform.OS === "ios") ? "ios-search-outline": "md-search"}
          size={32} color={tintColor}
        />
    }
  },
});

export default MainStack = StackNavigator({
  Home: {
    screen: MainScreen,
    navigationOptions: {
      title: "Welcome"
    }
  },
  Results: {
    screen: ResultPage
  }
});