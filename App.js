import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from "react-native";
import Reactn from "react-native";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import ListGreens from "./src/scenes/ListGreens/ListGreens";
import Green from "./src/scenes/Green/Green";
import Seeding from "./src/scenes/Seeding/Seeding";

import { colors } from "./src/services/colors";


const SmartOrtoApp = StackNavigator(
  {
    
    ListGreens: {
      screen: ListGreens
    },
    Green: {
      screen: Green
    },
    Seeding: {
      screen: Seeding
    }
  },
  {
    headerMode: 'none'
  }
);

const Drawer = DrawerNavigator({
  SmartOrtoApp: {
    screen: SmartOrtoApp
  },
  ListGreens: {
    screen: ListGreens
  },
  Seeding: {
    screen: Seeding
  }
});


const DrawerStack = StackNavigator(
  {
    Drawer: {
      screen: Drawer
    },
  },
  {
    headerMode: "float",
    mode: "card",
    navigationOptions: ({ navigation }) => ({
      title: "SmartOrto",
      headerStyle: {
        backgroundColor: colors.primary
      },
      headerRight: (
        <TouchableHighlight
          onPress={() => {
            console.log("Funziona il click");

            navigation.navigate("DrawerToggle");
          }}
          underlayColor="transparent"
        >
          <Image
            style={{ width: 35, height: 35, marginRight: 10 }}
            source={require("./src/components/img/black-menu-icon.png")}
          />
        </TouchableHighlight>
      )
    })
  }
);


export default class App extends React.Component {
  render() {
    return <DrawerStack />;
  }
}
