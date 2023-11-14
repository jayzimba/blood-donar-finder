import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../assets/Theme.js/colors";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";

const Acceptance = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    fetchLocation();
  }, []);

  const fetchLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    setLocation(location.coords); // Store latitude and longitude in state
  };

  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          marginTop: 20,
          borderWidth: 0.3,
          paddingHorizontal: 15,
          paddingVertical: 5,
          borderRadius: 3,
        }}
      >
        <View style={{ marginVertical: 20 }}>
          <Text
            style={{ color: colors.black, fontSize: 14, fontWeight: "300" }}
          >
            Thank you for accepting the blood donation request
          </Text>
        </View>
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
      <View style={{ justifyContent: "center", marginVertical: 60 }}>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.primary,
            padding: 15,
            borderRadius: 5,
            marginHorizontal: 80,
          }}
          onPress={() => fetchLocation()}
          //   onPress={() => navigation.navigate("Map")}
        >
          <Text
            style={[
              styles.infor,
              { color: colors.white, fontSize: 16, fontWeight: "300" },
            ]}
          >
            GET DIRECTION
          </Text>
        </TouchableOpacity>
        {/* {location && (
          <Text>
            {location.latitude}, {latitude.longitude}
          </Text>
        )} */}
      </View>
      <View style={{ justifyContent: "center", marginTop: 250 }}>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.primary,
            padding: 15,
            borderRadius: 5,
            marginHorizontal: 20,
          }}
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: "Home" }],
            })
          }
        >
          <Text
            style={[
              styles.infor,
              { color: colors.white, fontSize: 22, fontWeight: "300" },
            ]}
          >
            Finish
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Acceptance;

const styles = StyleSheet.create({});
