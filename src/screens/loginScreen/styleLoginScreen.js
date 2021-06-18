import { StyleSheet } from "react-native";
import { StyleVariables } from "../../styleVariable/StyleVariable";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
  tittleTop: {
    position: "absolute",
    width: StyleVariables.width * 1,
    height: StyleVariables.height * 0.3,
    backgroundColor: "#301934",
    borderRadius: 30,
    transform: [{ scaleX: 1, skewX: 1 }],
  },
  tittleText: {
    color: "#ffff",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 54,
  },
});

export default styles;
