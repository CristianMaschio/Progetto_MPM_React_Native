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
import { Calendar } from "react-native-calendars";
import ItemHeader from "../../components/ItemHeader/ItemHeader";

import { greens } from "../../services/greens";
import { colors } from "../../services/colors";
import { styles } from "../../services/styles";

export default class Seeding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: true,
      dateSelected: '2018-05-16'
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
            <Text style={styles.subTitle}>Imposta il luogo di semina:</Text>
            <CheckBox
              containerStyle={{
                backgroundColor: "transparent",
                borderColor: "transparent"
              }}
              title="Semenzaio"
              checkedIcon="dot-circle-o"
              checkedColor={colors.success}
              uncheckedIcon="circle-o"
              checked={this.state.checked}
              onPress={() => this.setState({ checked: !this.state.checked })}
            />
            <CheckBox
              containerStyle={{
                backgroundColor: "transparent",
                borderColor: "transparent"
              }}
              title="Aperto"
              checkedIcon="dot-circle-o"
              checkedColor={colors.success}
              uncheckedIcon="circle-o"
              checked={!this.state.checked}
              onPress={() => this.setState({ checked: !this.state.checked })}
            />
          </View>

          <View style={styles.textConteiner}>
            <Text style={styles.subTitle}>Come seminare:</Text>
            <Text style={styles.text}>
              {this.state.checked
                ? this.props.navigation.state.params.seeding.howIndoors
                : this.props.navigation.state.params.seeding.howOutdoors}
            </Text>
          </View>

          <View style={styles.textConteiner}>
            <Text style={styles.subTitle}>Periodo di semina:</Text>
            <Text style={styles.text}>
              {this.state.checked
                ? this.props.navigation.state.params.seeding.howIndoors
                : this.props.navigation.state.params.seeding.howOutdoors}
            </Text>
          </View>

          <View style={styles.textConteiner}>
            <Text style={styles.subTitle}>Seleziona il giorno di semina:</Text>
            <Text style={styles.text} />
            <Calendar
              style={{
                borderWidth: 1,
                borderColor: "gray"
              }}
              
            markedDates={{
                '2018-05-16': {selected: true, marked: true},
                '2018-05-17': {marked: true},
                '2018-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
                '2018-05-19': {disabled: true, disableTouchEvent: true}
              }}
              onDayPress={day => {
                this.setState({ dateSelected: day.dateString });
                console.log("selected day", day);
              }}    
              theme={{
                selectedColor: 'black'
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent("Seeding", Seeding);
