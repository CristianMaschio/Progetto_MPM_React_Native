import React, { Component } from "react";
import { Text, View } from "react-native";
import { styles } from "../../services/styles";
import { colors } from "../../services/colors";

/*Props {
    textError: string,
}
*/

export default class HandleError extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={[styles.textConteiner]}>
        <Text style={{ color: colors.danger }}>
          {" "}
          Attenzione: {this.props.textError}{" "}
        </Text>
      </View>
    );
  }
}
