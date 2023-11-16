import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../assets/Theme.js/colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Location from "expo-location";

const Acceptance = () => {
  const route = useRoute();
  const { id } = route.params;
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        console.error("Location permission not granted");
        return;
      }

      try {
        const location = await Location.getCurrentPositionAsync({});
        setLocation(location.coords);
        console.log(location);
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    };

    fetchLocation();
  }, []);

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
          // onPress={() => fetchLocation()}
          onPress={() =>
            navigation.navigate("Directions", { location: location, id: id })
          }
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
