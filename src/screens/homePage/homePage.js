import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default function homePage() {
  return (
    <View style={styles.container}>
      <Text>slm şişko</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#368899",
  },
});
