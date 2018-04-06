import { StyleSheet } from "react-native";
import { colors } from "../services/colors";


export const styles = StyleSheet.create({
    title: {
      flex: 1,
      fontSize: 36,
      fontWeight: "bold",
      textAlignVertical: "center",
      color: colors.dark
    },
    subTitle: {
      flex: 1,
      fontSize: 22,
      fontWeight: "bold",
      color: colors.dark
    },
    subSubTitle: {
      flex: 0,
      fontSize: 18,
      fontWeight: "bold",
      color: colors.dark
    },
    focus: {
      fontWeight: "bold",
      paddingRight: 3,
      color: colors.dark
    },
    text: {
      fontSize: 16,
      color: colors.dark
    },
    rowConteiner: {
      flex: 1,
      flexDirection: "row"
    },
    textConteiner: {
      flex: 1,
      paddingBottom: 10
    },
    conteiner: {
      backgroundColor: colors.secondary,
      flex: 1,
      padding: 8
    }
  });