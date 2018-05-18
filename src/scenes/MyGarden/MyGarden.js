import { format } from "date-fns";
import React, { Component } from "react";
import { AppRegistry, ScrollView, Text, View } from "react-native";
import { Button, ListItem } from "react-native-elements";
import Overlay from "react-native-modal-overlay";
import * as Progress from "react-native-progress";
import { colors } from "../../services/colors";
import { greens } from "../../services/greens";
import { styles } from "../../services/styles";
import myGardenGreens from "../../utils/myGardenGreens";


export default class MyGarden extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myGardenGreens: [],
      isVisible: false,
      greenSelected: null
    };
    this.handleIsVisible = this.handleIsVisible.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePlanting = this.handlePlanting.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleSeeding = this.handleSeeding.bind(this);
  }

  componentWillMount() {
    // myGardenGreens.deleteMyGarden();
    console.log("MyGarden will mount");
    myGardenGreens.getMyGardenGreens().then(myGreens => {
      this.setState({ myGardenGreens: myGreens });
    });
  }

  componentWillReceiveProps() {
    console.log("MyGarden will receive props");
    myGardenGreens.getMyGardenGreens().then(myGreens => {
      this.setState({ myGardenGreens: myGreens });
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(this.state.myGardenGreens.length === nextState.myGardenGreens.length && this.state === nextState) {
      return false;
    }
    console.log("Aggiorno MyGarden");
    return true
  }
  

  static navigationOptions = {
    title: "Il mio orto"
  };

  getProgress(dateStart, dateEnd) {
    if (new Date().getTime() >= new Date(dateEnd).getTime()) return 1;
    else {
      var t2 = new Date(dateStart).getTime();
      var t1 = new Date(dateEnd).getTime();
      var t0 = new Date().getTime();

      var x = (t1 - t2) / (1000 * 3600 * 24);
      var y = (t0 - t2) / (1000 * 3600 * 24);
      var z = y / x;
      return z;
    }
  }

  handleIsVisible(green) {
    this.setState({ isVisible: !this.state.isVisible, greenSelected: green });
  }

  handleChange() {
    const myGreen = this.state.greenSelected;
    const myGreens = this.state.myGardenGreens;
    this.setState({ isVisible: false });
    this.props.navigation.navigate("EditGreen", {
      myGreen: myGreen,
      myGreens: myGreens
    });
  }

  handleSeeding() {
    myGreens = this.state.myGardenGreens.slice();
    myGreens.forEach(myGreen => {
      if (myGreen.id === this.state.greenSelected.id)
        myGreen.isForSeeding = !myGreen.isForSeeding;
    });
    console.log(myGreens);
    myGardenGreens.saveMyGardenGreens(myGreens);
    this.setState({ myGardenGreens: myGreens, isVisible: false });
  }

  handlePlanting() {
    myGreens = this.state.myGardenGreens.slice();
    myGreens.forEach(myGreen => {
      if (myGreen.id === this.state.greenSelected.id)
        myGreen.isForPlanting = !myGreen.isForPlanting;
    });
    myGardenGreens.saveMyGardenGreens(myGreens);
    this.setState({ myGardenGreens: myGreens, isVisible: false });
  }

  handleRemove() {
    myGreens = this.state.myGardenGreens.filter(green => green.id!==this.state.greenSelected.id);
    myGardenGreens.saveMyGardenGreens(myGreens);
    this.setState({ myGardenGreens: myGreens, isVisible: false });
  }

  renderOverlay() {
    return (
      <View>
        <Text style={[styles.subTitle, { textAlign: "center" }]}>
          {this.state.greenSelected.greenName}
        </Text>
        <Button
          large
          rounded={true}
          buttonStyle={styles.button}
          title="Modifica"
          onPress={this.handleChange}
        />
        {this.state.greenSelected.isForSeeding &&
          this.state.greenSelected.isForPlanting && (
            <Button
              large
              rounded={true}
              buttonStyle={styles.successButtom}
              title="Semina effettuata"
              onPress={this.handleSeeding}
            />
          )}
        {!this.state.greenSelected.isForSeeding &&
          this.state.greenSelected.isForPlanting && (
            <Button
              large
              rounded={true}
              buttonStyle={styles.successButtom}
              title="Trapianto effettuato"
              onPress={this.handlePlanting}
            />
          )}
        <Button
          large
          rounded={true}
          buttonStyle={styles.dangerButton}
          title="Rimuovi"
          onPress={this.handleRemove}
        />
      </View>
    );
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ backgroundColor: colors.secondary, flex: 1 }}>
        <ScrollView>
          {this.state.myGardenGreens &&
            this.state.myGardenGreens.map((myGreen, index) => (
              <ListItem
                key={index}
                roundAvatar
                avatar={{
                  uri: myGreen.picture
                }}
                title={myGreen.greenName}
                onPress={() =>
                  navigate(
                    "Green",
                    greens.find(green => {
                      return green.name === myGreen.name;
                    })
                  )
                }
                onLongPress={() => this.handleIsVisible(myGreen)}
                titleStyle={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: colors.dark
                }}
                containerStyle={{ backgroundColor: colors.secondary }}
                checkmark={true}
                subtitle={
                  <View style={{ marginLeft: 10 }}>
                    <Text>
                      {" "}
                      {myGreen.isForPlanting &&
                        (myGreen.isForSeeding
                          ? "Semina programmata per il: " +
                            format(myGreen.date, "DD/MM/YYYY")
                          : "Trapianto programmato per il: " +
                            format(myGreen.date, "DD/MM/YYYY"))}
                      {!myGreen.isForPlanting &&
                        "Numero di piante: " +
                          myGreen.quantity }
                    </Text>

                    {myGreen.isForPlanting && (
                      <Progress.Bar
                        progress={this.getProgress(myGreen.id, myGreen.date)}
                        width={270}
                        color={colors.success}
                      />
                    )}
                  </View>
                }
              />
            ))}
        </ScrollView>
        {this.state.greenSelected && (
          <Overlay
            visible={this.state.isVisible}
            closeOnTouchOutside
            onClose={this.handleIsVisible}
            animationType="zoomIn"
            childrenWrapperStyle={{ padding: 10 }}
            animationDuration={500}
          >
            {this.renderOverlay()}
          </Overlay>
        )}
      </View>
    );
  }
}

AppRegistry.registerComponent("MyGarden", () => MyGarden);
