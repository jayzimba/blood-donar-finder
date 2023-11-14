import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../assets/Theme.js/colors";
import { TouchableOpacity } from "react-native";
import Card from "../components/Card";

const Donors = () => {
  return (
    <View style={styles.container}>
      <Card />
      <Card />
      <Card />
      <Card />
    </View>
  );
};

export default Donors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
