import React, { Component } from "react";
import { AppRegistry, Button, ScrollView, Text, TextInput, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import HandleError from "../../components/HandleError/HandleError";
import { colors } from "../../services/colors";
import { styles } from "../../services/styles";
import myGardenGreens from "../../utils/myGardenGreens";


export default class EditGreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myGreen: null,
      textError: "",
      title: "",
      daySelctTitle: ""
    };
    this.focus = {};
    this.handleButtomPress = this.handleButtomPress.bind(this);
    this.handleGreenName = this.handleGreenName.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
  }

  componentWillMount() {
    this.setState({
      myGreen: this.props.navigation.state.params.myGreen,
      title: this.props.navigation.state.params.myGreen.isForSeeding
        ? "Modifica la semina nel tuo orto"
        : "Modifica il trapianto nel tuo orto",
      daySelctTitle: this.props.navigation.state.params.myGreen.isForSeeding
        ? "Modifica il giorno della semina"
        : "Modifica il giorno del trapianto"
    });
  }

  
  shouldComponentUpdate(nextProps, nextState) {
    if(this.props.navigation.state.params === nextProps.navigation.state.params && this.state === nextState) {
      return false;
    }
    console.log("Aggiorno EditGreen");
    return true
  }

  static navigationOptions = {
    title: "Modifica"
  };

  handleButtomPress() {
    
    console.log("PRIMA DEL FILTER" + new Date());
    if (this.state.myGreen.greenName === "") {
      this.focus["name"].focus();
      this.setState({ textError: "Devi inserire un nome." });
      return;
    }
    if (this.state.myGreen.date === "") {
      this.setState({ textError: "Devi inserire una data." });
      return;
    }
    if (!this.state.myGreen.isForSeeding && this.state.myGreen.quantity <= 0) {
      this.focus["quantity"].focus();
      this.setState({
        textError: "Devi inserire una quantità di piante da piantare >0."
      });
      return;
    }
    myGreens = this.props.navigation.state.params.myGreens.filter(
      green => green.id !== this.state.myGreen.id
    );
    console.log("DOPO IL FILTER" + new Date());
    myGardenGreens.saveMyGardenGreens([this.state.myGreen, ...myGreens]);
    this.props.navigation.navigate("MyGarden", this.state.myGreen);
  }

  handleGreenName(text){
    let myGreen = this.state.myGreen;
    myGreen.greenName = text;
    this.setState({ myGreen: myGreen });
  }

  handleQuantity(quantity){
    let myGreen = this.state.myGreen;
    myGreen.quantity = quantity;
    this.setState({ myGreen: myGreen });
  }

  render() {
    title = this.state.title;
    greenName = this.state.myGreen.greenName;
    quantity = this.state.myGreen.quantity;
    return (
      <View style={styles.conteiner}>
        <ScrollView>
          <View style={styles.textConteiner}>
            <Text style={[styles.subTitle, { textAlign: "center" }]}>
              {title}
            </Text>
            <View style={styles.rowConteiner}>
              <Text style={[styles.focus, { fontSize: 20 }]}>Nome:</Text>
              <TextInput
                ref={ref => (this.focus["name"] = ref)}
                style={[styles.text, styles.textInputGreen, styles.setBox]}
                underlineColorAndroid="transparent"
                placeholder="inserisci il nome"
                onChangeText={this.handleGreenName}
              >
                {greenName}
              </TextInput>
            </View>

            {!this.state.myGreen.isForSeeding && (
              <View style={styles.rowConteiner}>
                <Text style={[styles.focus, { fontSize: 20 }]}>Quantità:</Text>
                <TextInput
                  ref={ref => (this.focus["quantity"] = ref)}
                  style={[styles.text, styles.textInputGreen, styles.setBox]}
                  underlineColorAndroid="transparent"
                  placeholder="inserisci la quantità"
                  keyboardType="numeric"
                  onChangeText={this.handleQuantity}
                >
                  {quantity}
                </TextInput>
              </View>
            )}
          </View>

          {this.state.myGreen.isForPlanting && (
            <View>
              <View style={[styles.textConteiner]}>
                <Text style={styles.subTitle}>{this.state.daySelctTitle}:</Text>
              </View>
              <View style={[styles.setBox, styles.textConteiner]}>
                <CalendarPicker
                  onDateChange={day => {
                    let myGreen = this.state.myGreen;
                    myGreen.date = day;
                    this.setState({ myGreen: myGreen });
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
                  selectedStartDate={this.state.myGreen.date}
                />
              </View>
            </View>
          )}

          {this.state.textError !== "" && (
            <HandleError textError={this.state.textError} />
          )}
          <View style={[styles.textConteiner]}>
            <Button
              onPress={() => this.handleButtomPress()}
              title="Effettua la modifica"
              color={colors.success}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent("EditGreen", EditGreen);
