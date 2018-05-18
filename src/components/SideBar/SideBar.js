import React from "react";
import { Image, Text, TouchableHighlight, View } from "react-native";
import { colors } from "../../services/colors";
import { styles } from "../../services/styles";
import NavigationService from "../../utils/NavigationService.js";



export default class SideBar extends React.PureComponent {
  navigation(screen) {
    NavigationService.navigate(screen);
    this.props.closeDrawer();
  }

  element(link, name, image) {
    return (
      <TouchableHighlight
        onPress={() => this.navigation(link)}
        underlayColor={colors.lightPrimary}
        key = {name}
      >
        <View
          style={[
            styles.sideBarRowContainer,
            { borderBottomWidth: 1, borderColor: colors.lightDark }
          ]}
        >
          <Image style={styles.sideBarImage} source={image} />
          <Text style={styles.subTitle}>{name}</Text>
          <Text
            style={[styles.subTitle, { marginLeft: "auto", color: "#C3C3C3" }]}
          >
            >
          </Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.sideBar}>
        {this.element("Home", "Home", require("../img/home.png"))}
        {this.element(
          "ListGreens",
          "Lista Ortaggi",
          require("../img/list.png")
        )}
        {this.element("MyGarden", "Il mio orto", require("../img/plant.png"))}
      </View>
    );
  }
}
