import { StyleSheet } from "react-native";
import { colors } from "../services/colors";

export const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: "bold",
    textAlignVertical: "center",
    textAlign: "center",
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
    paddingRight: 5,
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
    marginBottom: 10
  },
  conteiner: {
    backgroundColor: colors.secondary,
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10
  },
  sideBar: {
    flex: 1,
    backgroundColor: colors.secondary,
    width: "auto",
    height: "auto",
    paddingTop: 24
  },
  sideBarRowContainer: {
    flexDirection: "row",
    padding: 13
  },
  sideBarImage: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginRight: 20
  },
  textInputGreen: {
    width: 250,
    textAlign: "center",
    marginLeft: "auto"
  },
  setBox: {
    backgroundColor: colors.lightSecondary,
    borderWidth: 1,
    borderColor: "gray"
  },
  button:{
    backgroundColor: colors.primary ,
    marginBottom: 2,
    padding: 10
  },
  dangerButton: {
    backgroundColor: colors.danger ,
    marginBottom: 2,
    padding: 10
  },
  successButtom: {
    backgroundColor: colors.success ,
    marginBottom: 2,
    padding: 10
  }
});
