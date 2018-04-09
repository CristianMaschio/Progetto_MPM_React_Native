import React from "react";
import {
  View,
  Image,
  Text,
  AppRegistry,
  TouchableHighlight
} from "react-native";

import { List, ListItem } from "react-native-elements";
import { colors } from "../../services/colors";
import { styles } from "../../services/styles";
import { greens } from "../../services/greens";

import NavigationService from "../../utils/NavigationService.js";

export default class SideBar extends React.Component {
  navigation(screen) {
    NavigationService.navigate(screen);
    this.props.closeDrawer();
  }

  element(link, name, image) {
    return (
      <TouchableHighlight
        onPress={() => this.navigation("ListGreens")}
        underlayColor={colors.lightPrimary}
      >
        <View style={styles.sideBarRowContainer}>
          <Image style={styles.sideBarImage} source={image} />
          <Text style={styles.subTitle}>{name}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.sideBar}>
        {this.element("ListGreens", "Home", require("../img/home.png"))}
        {this.element(
          "ListGreens",
          "Lista Ortaggi",
          require("../img/list.png")
        )}
        {this.element("ListGreens", "Il mio orto", require("../img/plant.png"))}
      </View>
    );
  }
}
