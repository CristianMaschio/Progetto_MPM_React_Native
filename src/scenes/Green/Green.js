import React, { Component } from "react";
import { AppRegistry, ScrollView, Text, View } from "react-native";
import { Rating } from "react-native-elements";
import ItemHeader from "../../components/ItemHeader/ItemHeader";
import { colors } from "../../services/colors";
import { styles } from "../../services/styles";



export default class Green extends Component {

  render() {
    const {params} = this.props.navigation.state;
    return (
      <View style={styles.conteiner}>
        <ScrollView>
          <ItemHeader
            title={params.name}
            image={params.picture}
          />
          <View style={styles.rowConteiner}>
            <Text style={styles.subSubTitle}>Difficoltà: </Text>
            <Rating
              imageSize={20}
              type="custom"
              readonly
              ratingImage={require("./star.png")}
              startingValue={params.difficulty}
              ratingBackgroundColor={colors.secondary}
            />
          </View>

          <View style={styles.rowConteiner}>
            <Text style={[styles.focus, styles.text]}>Range temperatura:</Text>
            <Text style={[styles.text]}>
              {params.tempMin}-
              {params.tempMax}
            </Text>
          </View>

          <View style={styles.rowConteiner}>
            <Text style={[styles.focus, styles.text]}>Apporto luce:</Text>
            <Text style={[styles.text]}>
              {params.sun}
            </Text>
          </View>

          <View style={styles.rowConteiner}>
            <Text style={[styles.focus, styles.text]}>
              Distanza tra le piante:
            </Text>
            <Text style={[styles.text]}>
              {params.distancePlants}
            </Text>
          </View>
          <View style={styles.rowConteiner}>
            <Text style={[styles.focus, styles.text]}>
              Distanza tra le file:
            </Text>
            <Text style={[styles.text]}>
              {params.distanceFiles}
            </Text>
          </View>
          <View style={styles.rowConteiner}>
            <Text style={[styles.focus, styles.text]}>Litraggio vaso:</Text>
            <Text style={[styles.text]}>
              {params.literGround}
            </Text>
          </View>

          <View style={styles.textConteiner}>
            <Text style={styles.subTitle}>Descrizione</Text>
            <Text style={styles.text}>
              {params.description}
            </Text>
          </View>

          <View style={styles.textConteiner}>
            <Text style={styles.subTitle}>Clima</Text>
            <Text style={styles.text}>
              {params.climate}
            </Text>
          </View>

          <View style={styles.textConteiner}>
            <Text style={styles.subTitle}>Terreno</Text>
            <Text style={styles.text}>
              {params.ground}
            </Text>
          </View>

          <View style={styles.textConteiner}>
            <Text style={styles.subTitle}>Fertilizzazione</Text>
            <Text style={styles.text}>
              {params.fertilization}
            </Text>
          </View>

          <View style={styles.textConteiner}>
            <Text style={styles.subTitle}>Apporto d'acqua</Text>
            <Text style={styles.text}>
              {params.waterSupply}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent("Green", Green);
