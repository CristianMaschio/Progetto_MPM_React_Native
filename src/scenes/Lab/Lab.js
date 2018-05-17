import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import { greens } from "../../services/greens";
import { styles } from "../../services/styles";



export default class Lab extends Component {
  static navigationOptions = {
    title: 'Lab',
  };

  takeOneGreen() {
    return { state: { params: greens[1] } };
  }  
  render() {
    return (
      <View>
        <ScrollView>
          <Text style={styles.title}>MyGarden:</Text>
        </ScrollView>
      </View>
    );
  }
}
/*

          <Text style={styles.title}>Planting:</Text>
          <Planting navigation={this.takeOneGreen()} />

*/ 