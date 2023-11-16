import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../assets/Theme.js/colors";
import { useNavigation } from "@react-navigation/native";

const Card = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        elevation: 10,
        backgroundColor: colors.lightgray,
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
      }}
      onPress={() =>
        navigation.navigate("Request", {
          id: props.id,
          name: props.name,
          address: props.address,
        })
      }
    >
      <View
        style={{
          backgroundColor: colors.primary,
          height: 60,
          width: 60,
          borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
          marginEnd: 20,
        }}
      >
        <Text style={{ color: colors.white, fontSize: 18 }}>
          {props.blood_group}
        </Text>
      </View>
      <View>
        <View>
          <Text
            style={{ color: colors.black, fontWeight: "500", fontSize: 18 }}
          >
            {props.name}
          </Text>
          <Text style={{ color: colors.gray, fontWeight: "300", fontSize: 18 }}>
            {props.address}
          </Text>
        </View>
        <View style={{ justifyContent: "space-between" }}>
          <Text
            style={{
              color: "gray",
              fontWeight: "300",
            }}
          >
            Posted date {"22 sept, 2033"}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({});
