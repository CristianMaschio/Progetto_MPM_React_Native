import React, { Component } from "react";
import { AppRegistry, Image, ScrollView, Text, View } from "react-native";
import { colors } from "../../services/colors";
import { styles } from "../../services/styles";


export default class Home extends Component {
  static navigationOptions = {
    title: "Home"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ backgroundColor: colors.secondary, flex: 1 }}>
        <ScrollView>
          <Image />
          <Text style={styles.title}>Home</Text>
        </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent("Home", () => Home);
