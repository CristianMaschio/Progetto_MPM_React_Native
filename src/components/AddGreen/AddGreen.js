import React, { Component } from "react";
import { Text, View, TextInput, Button } from "react-native";
import CalendarPicker from "react-native-calendar-picker";

import { styles } from "../../services/styles";
import { colors } from "../../services/colors";

export default class AddGreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greenName: this.props.greenName,
      quantity: 0,
      daySelected: "",
      title: this.props.isSeeding
        ? "Semina nel tuo orto"
        : "Trapianta nel tuo orto",
      buttomTitle: this.props.isSeeding
        ? "Imposta la semina nel tuo orto"
        : "Imposta il trapianto nel tuo orto",
      daySelctTitle: this.props.isSeeding
        ? "Seleziona il giorno della semina"
        : "Seleziona il giorno del trapianto"
    };
    this.focus = {};
    this.handleButtomPress = this.handleButtomPress.bind(this);
  }
  static defaultProps = {
    greenName: "",
    isSeeding: true
  };

  handleButtomPress() {
    if (this.state.greenName === "") {
      this.focus["name"].focus();
      return;
    }
    if (!this.props.isSeeding && this.state.quantity===0) {
      this.focus["quantity"].focus();
      return;
    }
  }

  render() {
    return (
      <View>
        <View style={styles.textConteiner}>
          <Text
            style={[
              styles.title,
              { fontSize: 30, borderTopWidth: 1, marginTop: 10 }
            ]}
          >
            {this.state.title}
          </Text>
          <View style={styles.rowConteiner}>
            <Text style={[styles.focus, { fontSize: 20 }]}>Nome:</Text>
            <TextInput
              ref={ref => (this.focus["name"] = ref)}
              style={[styles.text, styles.textInputGreen, styles.setBox]}
              underlineColorAndroid="transparent"
              placeholder="inserisci il nome"
              onChangeText={text => this.setState({ greenName: text })}
            >
              {this.props.greenName}
            </TextInput>
          </View>

          {!this.props.isSeeding && (
            <View style={styles.rowConteiner}>
              <Text style={[styles.focus, { fontSize: 20 }]}>Quantità:</Text>
              <TextInput
                ref={ref => (this.focus["quantity"] = ref)}
                style={[styles.text, styles.textInputGreen, styles.setBox]}
                underlineColorAndroid="transparent"
                placeholder="inserisci la quantità"
                keyboardType="numeric"
              />
            </View>
          )}
        </View>

        <View style={[styles.textConteiner]}>
          <Text style={styles.subTitle}>{this.state.daySelctTitle}:</Text>
        </View>
        <View style={[styles.setBox, styles.textConteiner]}>
          <CalendarPicker
            onDateChange={day => {
              this.setState({ daySelected: day });
            }}
            weekdays={["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"]}
            months={[
              "Gennaio",
              "Febbraio",
              "Marzo",
              "Aprile",
              "Maggio",
              "Giugno",
              "Luglio",
              "Agosto",
              "Settebre",
              "Ottobre",
              "Novembre",
              "Dicembre"
            ]}
            todayBackgroundColor={colors.lightPrimary}
            previousTitle="<<<"
            nextTitle=">>>"
            width="350"
            textStyle={{ fontSize: 15 }}
          />
        </View>
        <View style={[styles.textConteiner]}>
          <Button
            onPress={() => this.handleButtomPress()}
            title={this.state.buttomTitle}
            color={colors.success}
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    );
  }
}
