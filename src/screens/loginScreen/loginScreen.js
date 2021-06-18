import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import styles from "./styleLoginScreen";

//const styles = require("./styleLoginScreen");

export default function loginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tittleTop}>
        <Text style={styles.tittleText}>Design your application</Text>
      </View>
    </SafeAreaView>
  );
}
