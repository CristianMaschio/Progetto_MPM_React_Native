import React, { Component } from "react";
import { Button, Text, TextInput, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { colors } from "../../services/colors";
import { styles } from "../../services/styles";
import myGardenGreens from "../../utils/myGardenGreens";
import HandleError from "../HandleError/HandleError";


export default class AddGreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greenName: this.props.greenName,
      quantity: 0,
      daySelected: "",
      textError: "",
      title: this.props.isForSeeding
        ? "Semina nel tuo orto"
        : "Trapianta nel tuo orto",
      buttomTitle: this.props.isForSeeding
        ? "Imposta la semina nel tuo orto"
        : "Imposta il trapianto nel tuo orto",
      daySelctTitle: this.props.isForSeeding
        ? "Seleziona il giorno della semina"
        : "Seleziona il giorno del trapianto"
    };
    this.focus = {};
    this.handleButtomPress = this.handleButtomPress.bind(this);
  } 
  shouldComponentUpdate(nextProps, nextState) {
    if(this.props.greenName === nextProps.greenName && 
      this.props.isForSeeding === nextProps.isForSeeding && 
      this.state === nextState) {
      return false;
    }
    console.log("Aggiorno EditGreen");
    return true
  }
  static defaultProps = {
    greenName: "",
    isForSeeding: true
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
        greenName: this.state.greenName,
        name: this.props.greenName,
        isForSeeding: this.props.isForSeeding,
        isForPlanting: true,
        date: this.state.daySelected,
        quantity: this.state.quantity,
        picture: this.props.picture
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
        {this.state.textError !== "" && (
          <HandleError textError={this.state.textError} />
        )}
        <View style={[styles.textConteiner]}>
          <Button
            onPress={() => this.handleButtomPress()}
            title={this.state.buttomTitle}
            color={colors.success}
          />
        </View>
      </View>
    );
  }
}
