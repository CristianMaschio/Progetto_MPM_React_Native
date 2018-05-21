import React, { Component } from "react";
import { Text, View } from "react-native";
import { Avatar } from "react-native-elements";
import { styles } from "../../services/styles";

export default class ItemHeader extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.title === nextProps.title) {
      return false;
    }
    return true;
  }

  static defaultProps = {
    title: "Nessun titolo",
    image: ""
  };

  render() {
    return (
      <View style={[styles.rowConteiner, { height: 80 }]}>
        <Avatar
          large
          rounded
          source={{
            uri: this.props.image
          }}
          activeOpacity={0.7}
        />
        <Text style={[styles.title, { paddingLeft: 10 }]}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}
