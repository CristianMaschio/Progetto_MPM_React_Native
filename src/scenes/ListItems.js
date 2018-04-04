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
import { greens } from "../services/data";
import { StackNavigator } from "react-navigation";

export default class ListItems extends Component {

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{backgroundColor: 'white', flex:1}}>
        <ScrollView  >
          <List >
            {greens.map(green => (
              <ListItem 
                key={green.name}
                roundAvatar
                avatar={{ uri: green.picture.thumbnail }}
                title={green.name}
                onPress={() => navigate('Item',green)}
                titleStyle={{
                  fontSize: 18,
                fontWeight: 'bold'}}
              />
            ))}
          </List>
        </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent("ListItems", () => ListItems);
