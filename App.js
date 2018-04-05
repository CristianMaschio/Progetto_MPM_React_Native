import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from "react-native";
import Reactn from "react-native";
import { StackNavigator } from "react-navigation";
import ListGreens from "./src/scenes/ListGreens/ListGreens";
import Green from "./src/scenes/Green/Green";

import { colors } from "./src/services/colors";

const SmartOrtoApp = StackNavigator(
  {
    ListGreens: {
      screen: ListGreens
    },
    Green: {
      screen: Green
    }
  },
  {
  mode: 'modal',
    navigationOptions: {
      title: 'SmartOrto',
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerRight: <TouchableHighlight onPress={()=> {
        console.log('Funziona il click');
        }}
        underlayColor='transparent'><Image style={{width: 35, height: 35, marginRight: 10}}
      source={require('./src/components/img/black-menu-icon.png')}
    />
    </TouchableHighlight >,
    },
  },
  {
    initialRouteName: "ListGreens"
  }
);

export default class App extends React.Component {
  render() {
    return <SmartOrtoApp />;
  }
}
