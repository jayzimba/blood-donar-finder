import { StyleSheet, Text, View, TouchableOpacit } from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../assets/Theme.js/colors";
import Donors from "./Donors";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Request = () => {

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          marginHorizontal: 10,
          borderBottomWidth: 0.6,
          paddingBottom: 10,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            textAlign: "justify",
            borderColor: colors.primary,
          }}
        >
          🩸Why Donate? Save Lives: Your donation can save up to three lives.
          It's a simple act that can have a profound impact. Emergency Support:
          Blood is crucial in emergencies, accidents, surgeries, and for
          patients with chronic illnesses. Community Support: By donating,
          you're contributing to the well-being of your community.
        </Text>
      </View>

      <View
        style={{
          marginTop: 20,
          borderWidth: 0.3,
          paddingHorizontal: 15,
          paddingVertical: 5,
          borderRadius: 3,
        }}
      >
        <Text style={{ color: colors.black, fontSize: 16, fontWeight: "500" }}>
          Blood donation Details
        </Text>
        <View style={{ marginVertical: 15 }}>
          <Text
            style={{ color: colors.black, fontSize: 14, fontWeight: "300" }}
          >
            Name
          </Text>
          <Text
            style={{ color: colors.black, fontSize: 16, fontWeight: "500" }}
          >
            UTH Blood Bank
          </Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text
            style={{ color: colors.black, fontSize: 14, fontWeight: "300" }}
          >
            Donation Type
          </Text>
          <Text
            style={{ color: colors.black, fontSize: 16, fontWeight: "500" }}
          >
            FREE
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 80,
        }}
      >
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.primary,
            padding: 15,
            borderRadius: 2,
            width: "48%",
          }}
          onPress={() => navigation.goBack()}
        >
          <Text
            style={[
              styles.infor,
              { color: colors.white, fontSize: 22, fontWeight: "300" },
            ]}
          >
            DECLINE
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.success,
            padding: 15,
            borderRadius: 5,
            width: "48%",
          }}
          onPress={() => navigation.navigate("Acceptance")}
        >
          <Text
            style={[
              styles.infor,
              { color: colors.white, fontSize: 22, fontWeight: "300" },
            ]}
          >
            ACCEPT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Request;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
