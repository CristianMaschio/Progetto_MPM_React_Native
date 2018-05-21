import React from "react";
import { Image, TouchableHighlight } from "react-native";
import Drawer from "react-native-drawer";
import { createStackNavigator, createTabNavigator } from "react-navigation";
import SideBar from "./src/components/SideBar/SideBar";
import EditGreen from "./src/scenes/EditGreen/EditGreen";
import Green from "./src/scenes/Green/Green";
import Home from "./src/scenes/Home/Home";
import Lab from "./src/scenes/Lab/Lab";
import ListGreens from "./src/scenes/ListGreens/ListGreens";
import MyGarden from "./src/scenes/MyGarden/MyGarden";
import Planting from "./src/scenes/Planting/Planting";
import Seeding from "./src/scenes/Seeding/Seeding";
import { colors } from "./src/services/colors";
import NavigationService from "./src/utils/NavigationService";

const TabSelect = createTabNavigator(
  {
    Green: {
      screen: Green,
      navigationOptions: {
        title: "Ortaggio"
      }
    },
    Seeding: {
      screen: Seeding,
      navigationOptions: {
        title: "Semina"
      }
    },
    Planting: {
      screen: Planting,
      navigationOptions: {
        title: "Trapianta"
      }
    }
  },
  {
    tabBarPosition: "bottom",
    tabBarOptions: {
      style: { backgroundColor: colors.secondary },
      labelStyle: {
        color: colors.dark,
        fontWeight: "bold"
        /*
        textAlignVertical: 'center',
        fontSize: 10*/
      },
      tabStyle: {
        backgroundColor: colors.primary,
        borderBottomColor: colors.success
      }
    }
  }
);

const Navigation = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    MyGarden: {
      screen: MyGarden
    },
    Lab: {
      screen: Lab
    },
    ListGreens: {
      screen: ListGreens
    },
    EditGreen: {
      screen: EditGreen
    },
    Green: {
      screen: TabSelect,
      navigationOptions: {
        title: "Ortaggio"
      }
    }
  },
  {
    headerMode: "float",
    mode: "card",
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: colors.primary
      },
      headerRight: (
        <TouchableHighlight
          onPress={this.openDrawer}
          underlayColor="transparent"
          style={{ paddingLeft: 20 }}
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
        onClose={closeDrawer}
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
