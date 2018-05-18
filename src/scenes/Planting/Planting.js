import React, { Component } from "react";
import { AppRegistry, ScrollView, Text, View } from "react-native";
import { CheckBox } from "react-native-elements";
import AddGreen from "../../components/AddGreen/AddGreen";
import ItemHeader from "../../components/ItemHeader/ItemHeader";
import Period from "../../components/Period/Period";
import { colors } from "../../services/colors";
import { styles } from "../../services/styles";

export default class Planting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: true
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.props.navigation.state.params.name ===
      nextProps.navigation.state.params.name && this.state.checked === nextState.checked
    ) {
      return false;
    }
    return true;
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.conteiner}>
        <ScrollView>
          <ItemHeader
            title={params.name}
            image={params.picture}
          />

          <View style={styles.textConteiner}>
            <Text style={styles.subTitle}>Imposta il luogo:</Text>
            <CheckBox
              containerStyle={{
                backgroundColor: "transparent",
                borderColor: "transparent"
              }}
              title="Serra"
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
            <Text style={styles.subTitle}>Come trapiantare:</Text>
            <Text style={styles.text}>
              {params.transplant.how}
            </Text>
          </View>

          <View style={styles.textConteiner}>
            <Text style={styles.subTitle}>Quando piantare:</Text>
            {this.state.checked ? (
              <Period
                period={params.transplant.indoors}
              />
            ) : (
              <Period
                period={params.transplant.outdoors}
              />
            )}
          </View>

          <AddGreen
            greenName={params.name}
            picture={params.picture}
            isForSeeding={false}
            navigation={this.props.navigation}
          />
        </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent("Planting", Planting);
