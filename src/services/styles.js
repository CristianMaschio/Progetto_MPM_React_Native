import { StyleSheet } from "react-native";
import { colors } from "../services/colors";


export const styles = StyleSheet.create({
    title: {
      fontSize: 36,
      fontWeight: "bold",
      textAlignVertical: "center",
      color: colors.dark
    },
    subTitle: {
      fontSize: 22,
      fontWeight: "bold",
      color: colors.dark
    },
    subSubTitle: {
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
      flex: 0,
      flexDirection: "row",
      marginTop: 10
    },
    textConteiner: {
      flex: 1,
      paddingBottom: 10
    },
    conteiner: {
      backgroundColor: colors.secondary,
      flex: 1,
      paddingLeft: 10,
      paddingRight: 10,
    },
    sideBar: {
      flex: 1,
      backgroundColor: colors.secondary,
      paddingTop: 25,
      width: 'auto',
      height: 'auto'
    },
    sideBarRowContainer: {
      padding: 10,
    }
  });