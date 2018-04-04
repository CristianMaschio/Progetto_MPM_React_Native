import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  AppRegistry,
  TouchableHighlight,
  Image,
  StyleSheet
} from "react-native";
import { List, ListItem, Avatar, Rating } from "react-native-elements";
import { greens } from "../services/data";
import { StackNavigator } from "react-navigation";

export default class Item extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <ScrollView>
          <View style={{ flex: 1, flexDirection: "row", height: 80 }}>
            <Avatar
              large
              rounded
              source={{
                uri: this.props.navigation.state.params.picture.thumbnail
              }}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
            />
            <Text style={styles.title}>
              {this.props.navigation.state.params.name}
            </Text>
          </View>

          <View style={styles.rowConteiner}>
            <Text style={styles.subSubTitle}>Difficoltà: </Text>
            <Rating
              imageSize={20}
              type="custom"
              readonly
              startingValue={this.props.navigation.state.params.difficulty}
              ratingBackgroundColor="#000"
              style={{ flex: 1 }}
            />
          </View>

          <View style={styles.rowConteiner}>
            <Text style={[styles.focus, styles.text]}>Range temperatura:</Text>
            <Text style={[ styles.text, { color: "blue" }]}>
              {this.props.navigation.state.params.tempMin}-
            </Text>
            <Text style={[ styles.text, { color: "red" }]}>
              {this.props.navigation.state.params.tempMax}
            </Text>
          </View>

          <View style={styles.rowConteiner}>
            <Text style={[styles.focus, styles.text]}>
              Distanza tra le piante:
            </Text>
            <Text style={[ styles.text]}>
              {this.props.navigation.state.params.distancePlants}
            </Text>
          </View>
          <View style={styles.rowConteiner}>
            <Text style={[styles.focus, styles.text]}>
              Distanza tra le file:
            </Text>
            <Text style={[ styles.text]}>
              {this.props.navigation.state.params.distanceFiles}
            </Text>
          </View>

          <View style={styles.textConteiner}>
            <Text style={styles.subTitle}>Descrizione:</Text>
            <Text style={styles.text}>
              {this.props.navigation.state.params.description}
            </Text>
          </View>

          <View style={styles.textConteiner}>
            <Text style={styles.subTitle}>Clima:</Text>
            <Text style={styles.text}>
              {this.props.navigation.state.params.climate}
            </Text>
          </View>

          <View style={styles.textConteiner}>
            <Text style={styles.subTitle}>Terreno:</Text>
            <Text style={styles.text}>
              {this.props.navigation.state.params.ground}
            </Text>
          </View>

          <View style={styles.textConteiner}>
            <Text style={styles.subTitle}>Fertilizzazione:</Text>
            <Text style={styles.text}>
              {this.props.navigation.state.params.fertilization}
            </Text>
          </View>

          <View style={styles.textConteiner}>
            <Text style={styles.subTitle}>Apporto d'acqua:</Text>
            <Text style={styles.text}>
              {this.props.navigation.state.params.waterSupply}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    fontSize: 36,
    fontWeight: "bold",
    textAlignVertical: "center"
  },
  subTitle: {
    flex: 1,
    fontSize: 22,
    fontWeight: "bold"
  },
  subSubTitle: {
    flex: 0,
    fontSize: 18,
    fontWeight: "bold"
  },
  focus: {
    fontWeight: "bold",
    paddingRight: 3
  },
  text: {
    fontSize: 16
  },
  rowConteiner: {
    flex: 1,
    flexDirection: "row"
  },
  textConteiner: {
    flex: 1,
    paddingBottom: 10
  }
});

AppRegistry.registerComponent("Item", Item);
