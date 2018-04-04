import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  AppRegistry,
  TouchableHighlight,
  Image
} from "react-native";
import { List, ListItem, Avatar, Rating } from "react-native-elements";
import { greens } from "../services/data";
import { StackNavigator } from "react-navigation";

export default class Item extends Component {
  render() {
    return (
      <View style={{ flex: 2 }}>
        <ScrollView>
          <Avatar
            large
            source={{
              uri: this.props.navigation.state.params.picture.thumbnail
            }}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
          <Text>{this.props.navigation.state.params.name}</Text>

          <View>
            <Text>Difficoltà: </Text>
            <Rating
  imageSize={20}
  type='custom'
  readonly
  startingValue={5}
  style={{backgroundColor: "transparent", borderColor: 'blue'}}
/>
          </View>

          <Text>Descrizione:</Text>
          <Text>{this.props.navigation.state.params.description}</Text>
        </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent("Item", Item);
