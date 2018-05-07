import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  AppRegistry,
  TouchableHighlight,
  Image
} from "react-native";
import { ListItem } from "react-native-elements";
import { StackNavigator } from "react-navigation";

import { greens } from "../../services/greens";
import { colors } from "../../services/colors";

export default class ListGreens extends Component {
  
  static navigationOptions = {
    title: 'Lista ortaggi',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ backgroundColor: colors.secondary, flex: 1}}>
        <ScrollView>
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
        </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent("ListGreens", () => ListGreens);
