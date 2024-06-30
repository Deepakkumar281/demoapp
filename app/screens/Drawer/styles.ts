import { StyleSheet, Dimensions, Platform } from "react-native";
import { Colors } from "react-native-paper";
import AppStyle from "../../config/styles";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#0b2948",
    backgroundColor:"#33198f"
  },
  centerFlex: {
    justifyContent: "center",
    alignItems: "center",
  },
  nameTxt: {
    fontSize: 18,
    fontFamily: AppStyle.fonts.FONT_SEMIBOLD,
    //color: "#5b88a7",
    color:"white"
  },
  degreeTxt: {
    fontSize: 14,
    fontFamily: AppStyle.fonts.MONTSERRAT_FONT_ITALIC,
    //color: "#5b88a7",
    color:"white"
  },
  drawerItemStyle: {
    flexDirection: "row",
    height: 45,
    borderRadius:5,
    alignItems: "center",
    paddingLeft: 30,
    
  },
  drawerSubItemStyle: {
    flexDirection: "row",
    height: 45,
    backgroundColor: "#fff",
    alignItems: "center",
    borderBottomColor: "#536476",
    borderBottomWidth: 0.1,
    paddingLeft: 46,
  },
  drawerSubView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "86%",
  },
  drawerItemTxt: {
    fontSize: 17,
    fontFamily: AppStyle.fonts.ROBOTO_FONT_REGULAR,
    // color: "#5b88a7",
    paddingLeft: 20,
    color:"white"
  },
});

export default styles;