import React, { PureComponent } from "react";
import { AppRegistry, Image, ScrollView, Text, View } from "react-native";
import { colors } from "../../services/colors";
import { styles } from "../../services/styles";


export default class Home extends PureComponent {
  static navigationOptions = {
    title: "Home"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ backgroundColor: colors.secondary, flex: 1 }}>
        <ScrollView>
          <Image
             style={{ top: -150, 
              position: 'absolute'}}
            source={require("./VegetableGarden.jpg")}
          />
          <Text style={[styles.title, {marginTop: 120, color: colors.primary}]}>SmartOrto</Text>
          <Text style={[styles.text, {marginTop: 20}]}>Questa applicazione ha lo scopo principale di aiutare gli utenti nella gestione del proprio orto.</Text>
          <Text style={styles.textConteiner}>Gli utenti potranno avere: </Text>
          <Text style={styles.text}>Accesso a tutte le informazioni principali per poter crescere al meglio le proprie piante, dal seme alla raccolta</Text>
          <Text style={styles.text}>Programmare le semine e trapianti da eseguire</Text>
          <Text style={styles.text}>Accedere al proprio orto, nel quale verranno mostrate tutte le piante da seminare, trapiantare e già piantate</Text>
          <Text style={styles.text}>Inoltre sarà possibile modificare i propri ortaggi inserite nel proprio orto, avanzando di fase, modificandolo oppure eliminandoli.</Text>
   
          <Text style={styles.text}>Altro</Text>
          <Text style={styles.text}>Altro</Text>
          <Text style={styles.text}>Altro</Text>
          <Text style={styles.text}>Altro</Text>
        </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent("Home", () => Home);
