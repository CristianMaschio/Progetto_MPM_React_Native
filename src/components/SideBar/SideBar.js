import React from "react";
import { View, Image, Text } from "react-native";

import { List, ListItem } from "react-native-elements";
import { colors } from "../../services/colors";
import { styles } from "../../services/styles";
import { greens } from "../../services/greens";

export default class SideBar extends React.Component {
  render() {
    return (
      <View style={styles.sideBar}>
        <View style={[styles.rowConteiner, styles.sideBarRowContainer]}>
          <Image
            style={{ width: 30, height: 30, marginLeft: 10, marginRight: 10 }}
            source={require("../img/home.png")}
          />
          <Text style={styles.subTitle}>Home</Text>
        </View>

        <View style={[styles.rowConteiner, styles.sideBarRowContainer]}>
          <Image
            style={{ width: 30, height: 30, marginLeft: 10, marginRight: 10 }}
            source={require("../img/list.png")}
          />
          <Text style={styles.subTitle}>Lista Ortaggi</Text>
        </View>
        <View style={[styles.rowConteiner, styles.sideBarRowContainer]}>
          <Image
            style={{ width: 30, height: 30, marginLeft: 10, marginRight: 10 }}
            source={require("../img/plant.png")}
          />
          <Text style={styles.subTitle}>Il mio orto</Text>
        </View>
      </View>
    );
  }
}
