import React, { useEffect } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchVenueData } from "../features/VenueData/venueSlice";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native-paper";

const SliderComponents = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.venue);
  const navigation = useNavigation();
  const detailVenue = (venue) => {
    navigation.navigate("DetailVenue", { venue });
  };
  useEffect(() => {
    dispatch(
      fetchVenueData({
        search: "",
        location: null,
        price: null,
        belowPrice: "100000000",
        weddingDate: "2023/12/07",
      })
    );
    console.log("><><><><><.,", status);
  }, [dispatch]);

  const copyData = [...data];
  const randomData = copyData.sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContentContainer}
    >
      {status === "loading" ? (
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" />
        </View>
      ) : status === "failed" ? (
        <View style={styles.centerContainer}>
          <Text style={styles.errorText}>Error: {error}</Text>
        </View>
      ) : (
        randomData.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => detailVenue(data[item.id - 1])}
          >
            <View style={styles.itemContainer}>
              <Image source={{ uri: item.photo[0] }} style={styles.image} />
              <View style={styles.locationContainer}>
                <Ionicons name="location" size={20} color="white" />
                <Text style={{ color: "white" }}>
                  {" "}
                  {item.location}, Indonesia
                </Text>
              </View>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
          </TouchableOpacity>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  locationContainer: {
    color: "white",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 8,
    position: "absolute",
    bottom: 60,
    left: 8,
  },
  container: {
    flex: 1,
  },
  scrollContentContainer: {
    paddingHorizontal: 16,
  },
  itemContainer: {
    flex: 1,
    alignItems: "center",
    marginBottom: 20,
    marginRight: 10,
  },
  image: {
    width: 365,
    height: 225,
  },
  title: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
  },
});

export default SliderComponents;
