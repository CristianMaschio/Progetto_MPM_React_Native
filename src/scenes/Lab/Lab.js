import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";

import { styles } from "../../services/styles";
import Seeding from "../Seeding/Seeding";
import Planting from "../Planting/Planting";
import MyGarden from "../MyGarden/MyGarden";

import { greens } from "../../services/greens";
import { colors } from "../../services/colors";

export default class Lab extends Component {
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