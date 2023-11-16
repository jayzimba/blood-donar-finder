import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../assets/Theme.js/colors";
import { TextInput } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
  const [blood_group, setblood_group] = useState("");
  const [address, setAddress] = useState("");

  // useEffect(() => {
  //   fetchData();
  //   fetchData();
  // }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Blood group</Text>
        <View style={styles.inputContainer}>
          <TextInput
            value={blood_group}
            placeholder="AB-"
            selectionColor={colors.primary}
            onChangeText={(text) => setblood_group(text)}
            autoCapitalize="words"
          />
          <AntDesign name="edit" size={24} color={colors.primary} />
        </View>
        <Text style={[styles.label, { marginTop: 20 }]}>location</Text>
        <View style={styles.inputContainer}>
          <TextInput
            value={address}
            placeholder="loation"
            selectionColor={colors.primary}
            onChangeText={(text) => setAddress(text)}
            autoCapitalize="none"
          />
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

      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.primary,
          padding: 15,
          borderRadius: 20,
          marginTop: 40,
        }}
        onPress={() =>
          navigation.navigate("Donors", {
            blood_group: blood_group,
            address: address,
          })
        }
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
