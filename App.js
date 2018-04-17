import React from "react";
import { View, Image, TouchableHighlight, StyleSheet } from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";
import Drawer from "react-native-drawer";
import NavigationService from "./src/utils/NavigationService";

import ListGreens from "./src/scenes/ListGreens/ListGreens";
import Green from "./src/scenes/Green/Green";
import Seeding from "./src/scenes/Seeding/Seeding";
import Planting from "./src/scenes/Planting/Planting";
import Lab from "./src/scenes/Lab/Lab";

import SideBar from "./src/components/SideBar/SideBar";

import { colors } from "./src/services/colors";

const TabSelect = TabNavigator(
  {
    Green: {
      screen: Green,
      navigationOptions: {
        title: 'Ortaggio'
      }
    },
    Seeding: {
      screen: Seeding,
      navigationOptions: {                                           
        title: 'Semina'
      }
    },
    Planting: {
      screen: Planting,
      navigationOptions: {
        title: 'Trapianta'
      }
    }
  },{
    tabBarPosition: 'bottom',
    tabBarOptions:  {
    style: {backgroundColor: colors.secondary},
    labelStyle: {
      color: colors.dark,
      fontWeight: 'bold'
    },
    tabStyle: {backgroundColor: colors.primary, borderBottomColor: colors.success}
    }
  }
)

const Navigation = StackNavigator(
  {
    Lab:{
      screen: Lab
    },
    ListGreens: {
      screen: ListGreens
    },
    Green: {
      screen: TabSelect
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
  render() {
    closeDrawer = () => {
      this.drawer.close();
    };
    openDrawer = () => {
      this.drawer.open();
    };
    return (
      <Drawer
        type="overlay" //displace:overlay:static
        ref={ref => {
          this.drawer = ref;
        }}
        content={<SideBar closeDrawer={closeDrawer} />}
        onClose={() => this.drawer.close()}
        side="right"
        openDrawerOffset={120}
        negotiatePan={true}
        panOpenMask={25}
        styles={drawerStyles}
        tweenHandler={ratio => ({
          main: {
            opacity: (2 - ratio) / 2,
            backgroundColor: colors.dark
          }
        })}
        elevation={20}
      >
        <Navigation
          style={{ flex: 2 }}
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Drawer>
    );
  }
}

const drawerStyles = {
  drawer: {
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 3,
    backgroundColor: colors.dark
  },
  main: { backgroundColor: colors.dark }
};
