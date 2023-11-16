import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { useRoute } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import MapViewDirections from "react-native-maps-directions";

const Directions = () => {
  const GOOGLE_API_KEY = "AIzaSyBa8DISdUiPcSfxr13KWOh3pZOSC1vaUSM";
  const route = useRoute();
  const mapRef = useRef();

  const { location, id } = route.params;
  const [errorMsg, setErrorMsg] = useState(null);

  const [coords, setCoords] = useState([]);
  const [destination, setDestination] = useState([]);

  useEffect(() => {
    fetchData();
    fetchData();
    console.log(id);
  }, []);

  const fetchData = async () => {
    var formdata = new FormData();

    formdata.append("donorID", id);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://www.pezabond.com/dalitso/fetchCoords.php",
        requestOptions
      );
      const data = await response.json();
      setCoords(data);
      console.log(coords);
    } catch (error) {
      console.log(error);
    }
  };

  if (!location) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <ActivityIndicator animating={true} color={"#EE3855"} size={"large"} />
        <Text style={{ marginTop: 15 }}>Locating Boarding houses</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <MapView
          ref={mapRef}
          style={styles.map}
          provider="google"
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="Hospital Location"
            description="You are here"
          />
          <MapViewDirections
            origin={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            destination={{
              latitude: -12.946635,
              longitude: 28.642504,
            }}
            mode="DRIVING"
            apikey={GOOGLE_API_KEY}
            strokeWidth={3}
            strokeColor="#124e78"
            optimizeWaypoints={true}
            onReady={(result) => {
              mapRef.current.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: 60,
                  bottom: 100,
                  left: 60,
                  top: 100,
                },
              });
            }}
          />
        </MapView>
      </View>
    );
  }
};

export default Directions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  map: {
    flex: 1,
  },
});
