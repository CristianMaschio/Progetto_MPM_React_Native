import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  AppRegistry,
  Image,
  StyleSheet
} from "react-native";
import { Avatar, CheckBox } from "react-native-elements";
import { StackNavigator } from "react-navigation";
import ItemHeader from "../../components/ItemHeader/ItemHeader";

import { greens } from "../../services/greens";
import { colors } from "../../services/colors";
import { styles } from "../../services/styles";

export default class Planting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: true
    };
  }
  render() {
    return (
      <View style={styles.conteiner}>
        <ScrollView>
          <ItemHeader
            title={this.props.navigation.state.params.name}
            image={this.props.navigation.state.params.picture}
          />

          <View style={styles.textConteiner}>
            <Text style={styles.subTitle}>Imposta il luogo:</Text>
            <CheckBox
              containerStyle={{backgroundColor:"transparent", borderColor:"transparent"}}
              title="Serra"
              checkedIcon="dot-circle-o"
              checkedColor={colors.success}
              uncheckedIcon="circle-o"
              checked={this.state.checked}
              onPress={() => this.setState({checked: !this.state.checked})}
            />
            <CheckBox
              containerStyle={{backgroundColor:"transparent", borderColor:"transparent"}}
              title="Aperto"
              checkedIcon="dot-circle-o"
              checkedColor={colors.success}
              uncheckedIcon="circle-o"
              checked={!this.state.checked}
              onPress={() => this.setState({checked: !this.state.checked})}
            />
          </View>
          
          <View style={styles.textConteiner}>
            <Text style={styles.subTitle}>Come trapiantare:</Text>
            <Text style={styles.text}>
              {this.props.navigation.state.params.transplant.how}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}


AppRegistry.registerComponent("Planting", Planting );
