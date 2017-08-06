import React from "react";
import { StackNavigator, TabNavigator } from "react-navigation";
import { Icon } from "native-base";
import { Platform } from "react-native";

import UserInput from "../../components/userInput";
import ResultPage from "../../components/resultsPage";
import NotFound from "../../components/notFound";
import App from "../../main";
const MainScreen = TabNavigator({
  Home: {
    screen: App,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) =>
        <Icon
          name={Platform.OS === "ios" ? "albums": "home"}
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
          name="search"
          size={32} color={tintColor}
        />
    }
  },
}, {
    tabBarOptions: {
      showIcon: true
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
  },
  NotFound: {
    screen: NotFound
  }
});