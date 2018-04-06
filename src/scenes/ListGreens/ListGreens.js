import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  AppRegistry,
  TouchableHighlight,
  Image
} from "react-native";
import { List, ListItem } from "react-native-elements";
import { StackNavigator } from "react-navigation";

import { greens } from "../../services/greens";
import { colors } from "../../services/colors";

export default class ListGreens extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ backgroundColor: colors.secondary, flex: 1}}>
        <ScrollView>
          <List>
            {greens.map(green => (
              <ListItem
                key={green.name}
                roundAvatar
                avatar={{ uri: green.picture }}
                title={green.name}
                onPress={() => navigate("Green", green)}
                titleStyle={{
                  fontSize: 18,
                  fontWeight: "bold", 
                  color: colors.dark 
                }}
                containerStyle={{backgroundColor: colors.secondary}}
              />
            ))}
          </List>
        </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent("ListGreens", () => ListGreens);
