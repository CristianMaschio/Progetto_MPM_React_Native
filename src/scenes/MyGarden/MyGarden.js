import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  AppRegistry,
  TouchableHighlight,
  Image,
  AsyncStorage
} from "react-native";
import { ListItem } from "react-native-elements";
import { StackNavigator } from "react-navigation";

import { greens } from "../../services/greens";
import { colors } from "../../services/colors";
import myGardenGreens from "../../utils/myGardenGreens";

export default class MyGarden extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myGardenGreens: []
    };
  }

 componentWillMount() {
    //myGardenGreens.deleteMyGarden();
    //this.setState({myGardenGreens: await myGardenGreens.getMyGardenGreens()});
    myGardenGreens.getMyGardenGreens().then(myGreens => {
      this.setState({ myGardenGreens: myGreens });
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ backgroundColor: colors.secondary, flex: 1 }}>
        <ScrollView>
          {console.log(this.state.myGardenGreens)}
          {this.state.myGardenGreens !== null &&
            this.state.myGardenGreens.map(myGreen => (
              <ListItem
                key={myGreen.greenName}
                roundAvatar
                avatar={{
                  uri: greens.find(green => {
                    return green.name === myGreen.greenName;
                  }).picture
                }}
                title={myGreen.name}
                onPress={() => navigate("Green", greens.find(green => {return green.name===myGreen.greenName}))}
                titleStyle={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: colors.dark
                }}
                containerStyle={{ backgroundColor: colors.secondary }}
                checkmark={true}
                subtitle={
                  myGreen.isSeeding
                    ? "Semina programmata per il: " + myGreen.date
                    : "Trapianto programmato per il: " + myGreen.date
                }
              />
            ))}
        </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent("MyGarden", () => MyGarden);
