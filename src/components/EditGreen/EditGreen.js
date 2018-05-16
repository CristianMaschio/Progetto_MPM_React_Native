import React, { Component } from "react";
import { Text, View, TextInput, Button } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { StackNavigator } from "react-navigation";

import { styles } from "../../services/styles";
import { colors } from "../../services/colors";
import myGardenGreens from "../../utils/myGardenGreens";
import HandleError from "../HandleError/HandleError";

export default class EditGreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        greenName: this.props.myGreen.name,
        quantity: this.props.myGreen.quantity,
        daySelected: this.props.myGreen.date,
        textError: "",
        title: this.props.myGreen.isForSeeding
          ? "Semina nel tuo orto"
          : "Trapianta nel tuo orto",
        daySelctTitle: this.props.myGreen.isForSeeding
          ? "Seleziona il giorno della semina"
          : "Seleziona il giorno del trapianto"
      };
      this.focus = {};
      this.handleButtomPress = this.handleButtomPress.bind(this);
    }
    static defaultProps = {
      myGreen: null
    };

  async handleButtomPress() {
    if (this.state.greenName === "") {
      this.focus["name"].focus();
      this.setState({ textError: "Devi inserire un nome." });
      return;
    }
    if (this.state.daySelected === "") {
      this.setState({ textError: "Devi inserire una data." });
      return;
    }
    if (!this.props.isForSeeding && this.state.quantity <= 0) {
      this.focus["quantity"].focus();
      this.setState({
        textError: "Devi inserire una quantità di piante da piantare >0."
      });
      return;
    }
    let myGreen = [
      {
        id: new Date(),
        greenName: this.props.greenName,
        name: this.state.greenName,
        isForSeeding: this.props.isForSeeding,
        isForPlanting: true,
        date: this.state.daySelected,
        quantity: this.state.quantity
      }
    ];
    await myGardenGreens.addMyGardenGreen(myGreen);
    this.props.navigation.navigate("MyGarden", myGreen);
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

          {!this.props.isForSeeding && (
            <View style={styles.rowConteiner}>
              <Text style={[styles.focus, { fontSize: 20 }]}>Quantità:</Text>
              <TextInput
                ref={ref => (this.focus["quantity"] = ref)}
                style={[styles.text, styles.textInputGreen, styles.setBox]}
                underlineColorAndroid="transparent"
                placeholder="inserisci la quantità"
                keyboardType="numeric"
                onChangeText={text => this.setState({ quantity: text })}
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
              console.log(day);
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
            enableSwipe={false}
          />
        </View>
        {this.state.textError!=="" && (
        <HandleError textError={this.state.textError}/>
        )}
        <View style={[styles.textConteiner]}>
          <Button
            onPress={() => this.handleButtomPress()}
            title="Effettua la modifica"
            color={colors.success}
          />
        </View>
      </View>
    );
  }
}
