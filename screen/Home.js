import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../assets/Theme.js/colors";
import { TextInput } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Blood group</Text>
        <View style={styles.inputContainer}>
          <TextInput placeholder="AB-" selectionColor={colors.primary} />
          <AntDesign name="edit" size={24} color={colors.primary} />
        </View>
        <Text style={[styles.label, { marginTop: 20 }]}>Donation type</Text>
        <View style={styles.inputContainer}>
          <TextInput placeholder="AB-" selectionColor={colors.primary} />
          <AntDesign name="edit" size={24} color={colors.primary} />
        </View>
      </View>

      {/* text area */}

      <View>
        <Text style={styles.infor}>Preffered Donors' location (optional)</Text>
        <Text style={[styles.infor, { marginTop: 10 }]}>
          please enter the range (distance[km]) at which you want donors to be
          matched, The distance will be mearsured from your current location.
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 30,
        }}
      >
        <View
          style={[
            styles.inputContainer,
            {
              width: "20%",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginEnd: 10,
            },
          ]}
        >
          <TextInput
            placeholder="0"
            selectionColor={colors.primary}
            style={{
              fontSize: 22,
              padding: 0,
            }}
          />
        </View>

        <Text
          style={{ fontSize: 22, fontWeight: "bold", color: colors.primary }}
        >
          -
        </Text>

        <View
          style={[
            styles.inputContainer,
            {
              width: "30%",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 10,
            },
          ]}
        >
          <Text style={{ fontSize: 16 }}>1000</Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.primary,
          padding: 15,
          borderRadius: 20,
        }}
        onPress={() => navigation.navigate("Donors")}
      >
        <Text
          style={[
            styles.infor,
            { color: colors.white, fontSize: 22, fontWeight: "400" },
          ]}
        >
          Search
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  label: {
    color: colors.gray,
    fontWeight: "300",
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: colors.primary,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  infor: {
    color: colors.gray,
    fontWeight: "300",
    fontSize: 18,
  },
});
