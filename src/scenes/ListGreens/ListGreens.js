import React, { PureComponent } from "react";
import { AppRegistry, ScrollView, View } from "react-native";
import { ListItem } from "react-native-elements";
import { colors } from "../../services/colors";
import { greens } from "../../services/greens";


export default class ListGreens extends PureComponent {
  
  static navigationOptions = {
    title: 'Lista ortaggi',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ backgroundColor: colors.secondary, flex: 1}}>
        <ScrollView>
            {greens.map(green => (
              <ListItem
                key={green.name}
                roundAvatar
                avatar={{ uri: green.picture }}
                title={green.name}
                onPress={() => navigate("Green", green)}
                titleStyle={{
                  fontSize: 18,
                  fontWeight: "bold", 
                  color: colors.dark 
                }}
                containerStyle={{backgroundColor: colors.secondary}}
              />
            ))}
        </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent("ListGreens", () => ListGreens);
