import React, { Component } from "react";
import { Text, View, ScrollView, AppRegistry } from "react-native";
import { ListItem, Button } from "react-native-elements";
import { StackNavigator } from "react-navigation";
import * as Progress from "react-native-progress";
import { format } from "date-fns";
import Overlay from "react-native-modal-overlay";

import { greens } from "../../services/greens";
import { colors } from "../../services/colors";
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
    console.log('MyGarden will mount');
    myGardenGreens.getMyGardenGreens().then(myGreens => {
      this.setState({ myGardenGreens: myGreens });
    });
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
  }

  handleSeeding() {
    this.state.myGardenGreens.forEach(myGreen => {
      if (myGreen.id === this.state.greenSelected.id)
        myGreen.isSeeding = !myGreen.isSeeding;
    });
    console.log(this.state.myGardenGreens);
    myGardenGreens.saveMyGardenGreens(this.state.myGardenGreens);
  }

  handlePlanting() {
    myGreens = this.state.myGardenGreens.forEach(myGreen => {
      if (myGreen.id === this.state.greenSelected.id)
        myGreen.isPlanting = !myGreen.isPlanting;
    });
    myGardenGreens.saveMyGardenGreens(myGreens);}

  handleRemove() {

  }


  renderOverlay() {
    return (
      <View>
        <Button
          large
          rounded={true}
          buttonStyle={styles.button}
          title="Modifica"
        />
        <Button
          large
          rounded={true}
          buttonStyle={styles.successButtom}
          title="Semina effettuata"
          onPress={this.handleSeeding}
        />
        <Button
          large
          rounded={true}
          buttonStyle={styles.successButtom}
          title="Trapianto effettuato"
          onPress={this.handlePlanting}
        />
        <Button
          large
          rounded={true}
          buttonStyle={styles.dangerButton}
          title="Rimuovi"
        />
      </View>
    );
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ backgroundColor: colors.secondary, flex: 1 }}>
        <ScrollView>
          {this.state.myGardenGreens !== null &&
            this.state.myGardenGreens.map((myGreen, index) => (
              <ListItem
                key={index}
                roundAvatar
                avatar={{
                  uri: greens.find(green => {
                    return green.name === myGreen.greenName;
                  }).picture
                }}
                title={myGreen.name}
                onPress={() =>
                  navigate(
                    "Green",
                    greens.find(green => {
                      return green.name === myGreen.greenName;
                    })
                  )
                }
                onLongPress={()=>this.handleIsVisible(myGreen)}
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
                      {myGreen.isSeeding
                        ? "Semina programmata per il: " +
                          format(myGreen.date, "DD/MM/YYYY")
                        : "Trapianto programmato per il: " +
                          format(myGreen.date, "DD/MM/YYYY")}
                    </Text>

                    <Progress.Bar
                      progress={this.getProgress(myGreen.id, myGreen.date)}
                      width={270}
                      color={colors.success}
                    />
                  </View>
                }
              />
            ))}
        </ScrollView>
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
      </View>
    );
  }
}

AppRegistry.registerComponent("MyGarden", () => MyGarden);
