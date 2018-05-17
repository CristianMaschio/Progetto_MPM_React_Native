import React, { Component } from "react";
import { Text, View } from "react-native";
import { colors } from "../../services/colors";
import { styles } from "../../services/styles";

export default class Period extends Component {
  static defaultProps = {
    period: ""
  };

  renderMonth(month, ideal) {
    let render;
    switch (ideal) {
      case 1:
        render = (
          <Text style={[styles.focus, { color: "#B5B370" }]}>
            {month}
          </Text>
        );
        break;
      case 2:
        render = (
          <Text style={[styles.focus, { color: "#79B26E" }]}>
            {month}
          </Text>
        );
        break;
      case 3:
        render = (
          <Text style={[styles.focus, { color: colors.success }]}>
            {month}
          </Text>
        );
        break;
      default:
        render = <Text style={[styles.focus, { color: "#A2A1A1" }]}>{month}</Text>;
    }
    return render;
  }

  render() {
      period=this.props.period;
    return (
      <View>
        <View style={styles.rowConteiner}>
          <Text style={[styles.focus, { color: colors.success }]}>
            Ideale
          </Text>
          <Text style={[styles.focus, { color: "#79B26E" }]}>
            Sicuro
          </Text>
          <Text style={[styles.focus, { color: "#B5B370" }]}>
            Poco sicuro
          </Text>
          <Text style={[styles.focus, { color: "#A2A1A1" }]}>Sconsigliato</Text>
        </View>
        <View style={styles.rowConteiner}>
          {this.renderMonth("Gen", period.gen)}
          {this.renderMonth("Feb", period.feb)}
          {this.renderMonth("Mar", period.mar)}
          {this.renderMonth("Apr", period.apr)}
          {this.renderMonth("Mag", period.mag)}
          {this.renderMonth("Giu", period.giu)}
          {this.renderMonth("Lug", period.lug)}
          {this.renderMonth("Ago", period.ago)}
          {this.renderMonth("Set", period.set)}
          {this.renderMonth("Ott", period.ott)}
          {this.renderMonth("Nov", period.nov)}
          {this.renderMonth("Dic", period.dic)}
        </View>
      </View>
    );
  }
}
