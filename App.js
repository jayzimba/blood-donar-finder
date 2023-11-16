import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screen/Home";
import colors from "./assets/Theme.js/colors";
import Donors from "./screen/Donors";
import Request from "./screen/Request";
import Acceptance from "./screen/Acceptance";
import Map from "./screen/Map";
import Directions from "./screen/Directions";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Login from "./screen/Login";

const Stack = createStackNavigator();

export default function App() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    fetchLocation();
    fetchLocation();
    fetchLocation();
    fetchLocation();
    fetchLocation();
    fetchLocation();
    fetchLocation();
    console.log(location);
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
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              title: "Login",
              headerTitleStyle: {
                color: colors.white,
              },
              headerStyle: {
                backgroundColor: colors.primary,
              },
            }}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{
              title: "Seacrh donors",
              headerTitleStyle: {
                color: colors.white,
              },
              headerStyle: {
                backgroundColor: colors.primary,
              },
            }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{
              title: "Donors's List",
              headerTitleStyle: {
                color: colors.white,
              },
              headerStyle: {
                backgroundColor: colors.primary,
              },
            }}
            name="Donors"
            component={Donors}
          />
          <Stack.Screen
            options={{
              title: "Blood Request",
              headerTitleStyle: {
                color: colors.white,
              },
              headerStyle: {
                backgroundColor: colors.primary,
              },
            }}
            name="Request"
            component={Request}
          />
          <Stack.Screen
            options={{
              title: "Blood Request",
              headerTitleStyle: {
                color: colors.white,
              },
              headerStyle: {
                backgroundColor: colors.primary,
              },
            }}
            name="Acceptance"
            component={Acceptance}
          />
          <Stack.Screen
            options={{
              title: "Donor lacator",
              headerTitleStyle: {
                color: colors.white,
              },
              headerStyle: {
                backgroundColor: colors.primary,
              },
            }}
            name="Directions"
            component={Directions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
