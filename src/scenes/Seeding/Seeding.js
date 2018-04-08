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

import { greens } from "../../services/greens";
import { colors } from "../../services/colors";
import { styles } from "../../services/styles";

export default class Seeding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false
    };
  }
  render() {
    return (
      <View style={styles.conteiner}>
        <ScrollView>
          <View style={{ flex: 1, flexDirection: "row", height: 80 }}>
            <Avatar
              large
              rounded
              /*source={{
                uri: this.props.navigation.state.params.picture
              }}*/
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
            />
            <Text style={styles.title}>
              {/*this.props.navigation.state.params.name*/}
            </Text>
          </View>

          <View style={styles.textConteiner}>
            <Text style={styles.subTitle}>Imposta tipo di semina:</Text>
            <CheckBox
              containerStyle={{backgroundColor:"transparent", borderColor:"transparent"}}
              title="Semenzaio"
              checkedIcon="dot-circle-o"
              checkedColor={colors.success}
              uncheckedIcon="circle-o"
              checked={!this.state.checked}
              onPress={() => this.setState({checked: !this.state.checked})}
            />
            <CheckBox
              containerStyle={{backgroundColor:"transparent", borderColor:"transparent"}}
              title="Aperto"
              checkedIcon="dot-circle-o"
              checkedColor={colors.success}
              uncheckedIcon="circle-o"
              checked={this.state.checked}
              onPress={() => this.setState({checked: !this.state.checked})}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent("Seeding", Seeding);
