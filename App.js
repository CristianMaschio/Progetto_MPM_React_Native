import React from "react";
import { View, Image, TouchableHighlight, StyleSheet } from "react-native";
import { StackNavigator } from "react-navigation";
import { Drawer } from "native-base";

import ListGreens from "./src/scenes/ListGreens/ListGreens";
import Green from "./src/scenes/Green/Green";
import Seeding from "./src/scenes/Seeding/Seeding";

import SideBar from "./src/components/SideBar/SideBar";

import { colors } from "./src/services/colors";

const Navigation = StackNavigator(
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

            this.openDrawer();
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
  constructor(props) {
    super(props);
    this.state = {
      startPageX: 0,
      endPageX: 0
    };
  }
  onResponderGrant(evt) {
    this.state.startPageX = evt.nativeEvent.pageX;
  }

  onResponderRelease(evt) {
    this.state.endPageX = evt.nativeEvent.pageX;
    let swipeLeft = false;
    console.log(this.state.startPageX + "-" + this.state.endPageX);
    if (this.state.startPageX - this.state.endPageX > 100)
      //SwipeLeft
      this.drawer._root.open();
    if (this.state.endPageX - this.state.startPageX > 50)
      //SwipeRight
      this.drawer._root.close();
  }

  render() {
    closeDrawer = () => {
      this.drawer._root.close();
    };
    openDrawer = () => {
      this.drawer._root.open();
    };
    return (
      <View
        style={{ flex: 1, backgroundColor: colors.secondary }}
        onStartShouldSetResponder={evt => true}
        onResponderGrant={this.onResponderGrant.bind(this)}
        onResponderRelease={this.onResponderRelease.bind(this)}
      >
        <Drawer
          type="overlay" //displace:overlay:static
          ref={ref => {
            this.drawer = ref;
          }}
          content={<SideBar />}
          onClose={() => this.drawer._root.close()}
          side="right"
          openDrawerOffset={100}
        >
          <Navigation style={{ flex: 2 }} />
        </Drawer>
      </View>
    );
  }
}
