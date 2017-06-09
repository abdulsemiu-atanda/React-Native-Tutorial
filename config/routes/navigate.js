import React from "react";
import { StackNavigator } from "react-navigation";

import UserInput from "../../components/userInput";
import App from "../../main";
export default  StackNavigator({
  Home: {
    screen: App
  },
  Input: {
    screen: UserInput,
  },
});