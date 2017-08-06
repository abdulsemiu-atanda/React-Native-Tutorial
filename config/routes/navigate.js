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
          name={Platform.OS === "ios" ? "ios-home-outline": "md-home"}
          size={32} tintColor={tintColor}
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
      activeTintColor: "black",
      inactiveTintColor: "#D3D3D3",
      showIcon: true,
      style: {
        backgroundColor: "#F7F7F7"
      },
      indicatorStyle:{
        opacity: 0
      },
      tabStyle: {
        height: 40
      },
      showLabel: false
    },
    tabBarPosition: "bottom",
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