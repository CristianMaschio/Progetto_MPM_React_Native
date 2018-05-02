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
import * as Progress from 'react-native-progress';
import { format } from 'date-fns';

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

  getProgress(dateStart, dateEnd){
    if(new Date().getTime() >= new Date(dateEnd).getTime()) return 1
    else {
      var t2 = new Date(dateStart).getTime();
      var t1 = new Date(dateEnd).getTime();
      var t0 = new Date().getTime();

      var x = (t1-t2)/(1000 * 3600 * 24);
      var y = (t0-t2)/(1000 * 3600 * 24);
      console.log((t2-t0)+"---"+(t1-t2)+"---"+t0+"---"+x+"---"+y+"---"+((y/x))+"---");
      var z = ((y/x)*10);
      return z;
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ backgroundColor: colors.secondary, flex: 1 }}>
        <ScrollView>
          {console.log(this.state.myGardenGreens)}
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
                onPress={() => navigate("Green", greens.find(green => {return green.name===myGreen.greenName}))}
                titleStyle={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: colors.dark
                }}
                containerStyle={{ backgroundColor: colors.secondary }}
                checkmark={true}
                subtitle={
                  <View style={{marginLeft: 10}}>
                  <Text> {
                  myGreen.isSeeding
                    ? "Semina programmata per il: " + format(myGreen.date, 'DD/MM/YYYY')
                    : "Trapianto programmato per il: " + format(myGreen.date, 'DD/MM/YYYY')}</Text>
                  
                  <Progress.Bar progress={this.getProgress(myGreen.id, myGreen.date)} width={270} color={colors.success}/>
                    </View>
                }
                
              />
            ))}
        </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent("MyGarden", () => MyGarden);
