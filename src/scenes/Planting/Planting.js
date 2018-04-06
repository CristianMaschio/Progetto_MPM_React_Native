import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  AppRegistry,
  Image,
  StyleSheet
} from "react-native";
import { Avatar } from "react-native-elements";
import { StackNavigator } from "react-navigation";

import { greens } from "../../services/greens";
import { colors } from "../../services/colors";
import { styles } from "../../utils/styles";

export default class Planting extends Component {
  render() {
    return (
      <View style={styles.conteiner}>
        <ScrollView>
          <View style={{ flex: 1, flexDirection: "row", height: 80 }}>
            <Avatar
              large
              rounded
              source={{
                uri: this.props.navigation.state.params.picture
              }}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
            />
            <Text style={styles.title}>
              {this.props.navigation.state.params.name}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}


AppRegistry.registerComponent("Planting", Planting );
