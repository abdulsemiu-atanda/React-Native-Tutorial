import React from "react";
import { StackNavigator } from "react-navigation";

import UserInput from "../../components/userInput";
import TwitterApp from "../../main";

export default Analysis = StackNavigator({
  Home: {
    screen: TwitterApp
  },
  Input: {
    screen: UserInput,
  },
});