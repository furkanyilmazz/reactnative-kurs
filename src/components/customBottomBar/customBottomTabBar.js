import React, { Component } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { customColor } from "../../assets/color";
import { StyleVariables } from "../../styleVariable/StyleVariable";

export default class BottomNavigator extends Component {
  toggleOpen = () => {};

  render() {
    return (
      <View style={styles.Main}>
        <View style={styles.buttonSettings}>
          <TouchableWithoutFeedback onPress={this.toggleOpen}>
            <View style={[styles.button, styles.actionBtn]}>
              <Ionicons
                name="add"
                size={45}
                color={customColor.backgroundColor}
                style={{ marginLeft: 3 }}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.buttonBarSettings}>
          <View style={styles.icons}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert("click");
              }}
            >
              <Ionicons
                name="person-outline"
                size={32}
                color={customColor.buttonColor}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.icons}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert("click");
              }}
            >
              <Ionicons
                name="people-outline"
                size={42}
                color={customColor.buttonColor}
              />
            </TouchableOpacity>
          </View>
          {/* </View> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: customColor.secondColor,
  },
  buttonSettings: {
    position: "absolute",
    alignSelf: "center",
    width: StyleVariables.width * 0.17,
    height: StyleVariables.width * 0.17,
    borderRadius: 40,
    bottom: StyleVariables.width * 0.09,
    zIndex: 10,
  },
  buttonBarSettings: {
    position: "absolute",
    backgroundColor: customColor.gray,
    bottom: 0,
    width: "100%",
    height: StyleVariables.width * 0.17,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: StyleVariables.width * 0.01,
    paddingHorizontal: StyleVariables.width * 0.01,
    borderTopEndRadius: StyleVariables.width * 0.05,
    borderTopStartRadius: StyleVariables.width * 0.05,
  },
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: StyleVariables.width * 0.18,
    height: StyleVariables.width * 0.18,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    position: "absolute",
  },
  actionBtn: {
    backgroundColor: customColor.buttonColor,
  },
  icons: {
    alignItems: "center",
    flexDirection: "row",
  },
});
