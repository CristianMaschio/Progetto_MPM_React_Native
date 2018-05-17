import React, { Component } from "react";
import { AppRegistry, ScrollView, Text, View } from "react-native";
import { CheckBox } from "react-native-elements";
import AddGreen from "../../components/AddGreen/AddGreen";
import ItemHeader from "../../components/ItemHeader/ItemHeader";
import Period from "../../components/Period/Period";
import { colors } from "../../services/colors";
import { styles } from "../../services/styles";



export default class Seeding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: true
    };
  }

  render() {
    return (
      <View style={styles.conteiner}>
        <ScrollView>
          <ItemHeader
            title={this.props.navigation.state.params.name}
            image={this.props.navigation.state.params.picture}
          />

          <View style={styles.textConteiner}>
            <Text style={styles.subTitle}>Imposta il luogo di semina:</Text>
            <CheckBox
              containerStyle={{
                backgroundColor: "transparent",
                borderColor: "transparent"
              }}
              title="Semenzaio"
              checkedIcon="dot-circle-o"
              checkedColor={colors.success}
              uncheckedIcon="circle-o"
              checked={this.state.checked}
              onPress={() => this.setState({ checked: !this.state.checked })}
            />
            <CheckBox
              containerStyle={{
                backgroundColor: "transparent",
                borderColor: "transparent"
              }}
              title="Aperto"
              checkedIcon="dot-circle-o"
              checkedColor={colors.success}
              uncheckedIcon="circle-o"
              checked={!this.state.checked}
              onPress={() => this.setState({ checked: !this.state.checked })}
            />
          </View>

          <View style={styles.textConteiner}>
            <Text style={styles.subTitle}>Come seminare:</Text>
            <Text style={styles.text}>
              {this.state.checked
                ? this.props.navigation.state.params.seeding.howIndoors
                : this.props.navigation.state.params.seeding.howOutdoors}
            </Text>
          </View>

          <View style={styles.textConteiner}>
            <Text style={styles.subTitle}>Periodo di semina:</Text>
            {this.state.checked ? (
              <Period
                period={this.props.navigation.state.params.seeding.indoors}
              />
            ) : (
              <Period
                period={this.props.navigation.state.params.seeding.outdoors}
              />
            )}
          </View>

          <View style={styles.rowConteiner}>
            <Text style={[styles.focus, styles.text]}>
              Temperatura per la germinazione:
            </Text>
            <Text style={[styles.text]}>
              {
                this.props.navigation.state.params.seeding
                  .temperatureGermination
              }
            </Text>
          </View>

          <View style={styles.rowConteiner}>
            <Text style={[styles.focus, styles.text]}>
              Profondità di semina:
            </Text>
            <Text style={[styles.text]}>
              {this.props.navigation.state.params.seeding.depth}
            </Text>
          </View>
            
          <AddGreen greenName={this.props.navigation.state.params.name} picture={this.props.navigation.state.params.picture} navigation={this.props.navigation} />
          
        </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent("Seeding", Seeding);
