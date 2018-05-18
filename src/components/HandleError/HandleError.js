import React, { Component } from "react";
import { Text, View } from "react-native";
import { styles } from "../../services/styles";
import { colors } from "../../services/colors";

/*Props {
    textError: string,
}
*/

export default class HandleError extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.textError === nextProps.textError) {
      return false;
    }
    return true;
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
