import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import colors from "../assets/Theme.js/colors";
import { TouchableOpacity } from "react-native";
import Card from "../components/Card";
import { useRoute } from "@react-navigation/native";

const Donors = () => {
  const route = useRoute();
  const { blood_group, address } = route.params;
  const [loading, setLoading] = useState(false);
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    fetchData();
    fetchData();
  }, []);

  const fetchData = async () => {
    var formdata = new FormData();

    formdata.append("blood_group", blood_group);
    formdata.append("address", address);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://www.pezabond.com/dalitso/fetchDonors.php",
        requestOptions
      );
      const data = await response.json();
      setDonors(data);
    } catch (error) {
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {loading && (
        <ActivityIndicator
          size={"large"}
          color={colors.success}
          style={{ marginBottom: 20 }}
        />
      )}
      <FlatList
        data={donors}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            id={item.id}
            name={item.name}
            blood_group={item.blood_group}
            email={item.email}
            contact={item.contact}
            address={item.address}
            type={item.donation_type}
          />
        )}
      />
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
