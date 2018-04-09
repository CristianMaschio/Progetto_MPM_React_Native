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
import { StackNavigator } from "react-navigation";

import { greens } from "../../services/greens";
import { colors } from "../../services/colors";
import { styles } from "../../services/styles";

export default class Green extends Component {
  render() {
    return (
      <View style={styles.conteiner}>
        <ScrollView>
          <View style={[styles.rowConteiner, { height: 80 }]}>
            <Avatar
              large
              rounded
              source={{
                uri: this.props.navigation.state.params.picture
              }}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
            />
            <Text style={[styles.title, {paddingLeft:10}]}>
              {this.props.navigation.state.params.name}
            </Text>
          </View>

          <View style={styles.rowConteiner}>
            <Text style={styles.subSubTitle}>Difficoltà: </Text>
            <Rating
              imageSize={20}
              type="custom"
              readonly
              ratingImage={require("./star.png")}
              startingValue={this.props.navigation.state.params.difficulty}
              ratingBackgroundColor={colors.secondary}
              style={{ flex: 1 }}
            />
          </View>

          <View style={styles.rowConteiner}>
            <Text style={[styles.focus, styles.text]}>Range temperatura:</Text>
            <Text style={[styles.text, { color: "blue" }]}>
              {this.props.navigation.state.params.tempMin}-
            </Text>
            <Text style={[styles.text, { color: "red" }]}>
              {this.props.navigation.state.params.tempMax}
            </Text>
          </View>
          
          <View style={styles.rowConteiner}>
            <Text style={[styles.focus, styles.text]}>
              Apporto luce:
            </Text>
            <Text style={[styles.text]}>
              {this.props.navigation.state.params.sun}
            </Text>
          </View>

          <View style={styles.rowConteiner}>
            <Text style={[styles.focus, styles.text]}>
              Distanza tra le piante:
            </Text>
            <Text style={[styles.text]}>
              {this.props.navigation.state.params.distancePlants}
            </Text>
          </View>
          <View style={styles.rowConteiner}>
            <Text style={[styles.focus, styles.text]}>
              Distanza tra le file:
            </Text>
            <Text style={[styles.text]}>
              {this.props.navigation.state.params.distanceFiles}
            </Text>
          </View>
          <View style={styles.rowConteiner}>
            <Text style={[styles.focus, styles.text]}>
              Litraggio vaso:
            </Text>
            <Text style={[styles.text]}>
              {this.props.navigation.state.params.literGround}
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

AppRegistry.registerComponent("Green", Green);
