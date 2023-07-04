import React, {useState, useEffect} from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer, useNavigation} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useDispatch, useSelector} from "react-redux";

import {fetchProductsData} from "../features/PackageData/packageSlice";
import DetailVenue from "../screen/DetailVenue";
import {SegmentedButtons} from "react-native-paper";
import SliderComponents from "./SliderComponents";

const formatCurrency = (value) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(value);
};

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productStateData = useSelector((state) => state.product.data);
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const token = await AsyncStorage.getItem("access_token");
        setAccessToken(token);
        console.log(token);
      } catch (error) {
        console.log("Error getting access token:", error);
      }
    };

    getAccessToken();
    dispatch(fetchProductsData());
  }, [dispatch]);

  const navigation = useNavigation();

  const handlePressEO = (id) => {
    navigation.navigate("DetailEventOrganizer", {eoId: id});
  };

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Text style={styles.title}>Weddingku</Text>
      <Text style={styles.promo}>
        Book now discount <Text style={styles.promoDiscount}>5%</Text>
      </Text>
      <Text style={styles.subtitle}>Available Package</Text>
      <View style={styles.cardList}>
        {productStateData?.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => handlePressEO(item.id)}
            style={styles.card}
          >
            <Image source={{uri: item?.imageUrl}} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item?.title}</Text>
              <View style={styles.cardInfo}>
                <Ionicons name="location-outline" size={16} color="#00bce1" />
                <Text style={styles.cardInfoText}>{item?.Venue.location}</Text>
              </View>
              <View style={styles.cardInfo}>
                <Ionicons name="people-outline" size={16} color="#00bce1" />
                <Text
                  style={styles.cardInfoText}
                >{`${item?.Venue.capacity} people`}</Text>
              </View>
              <View style={styles.cardInfo}>
                <Ionicons name="pricetag-outline" size={16} color="#00bce1" />
                <Text style={styles.cardInfoText}>
                  {formatCurrency(item?.Venue.price + item?.price)}
                </Text>
              </View>
              <View style={styles.cardInfo}>
                <Ionicons name="star" size={16} color="#FFD700" />
                <Text style={styles.cardInfoText}>{item?.rating}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00bce1",
    marginBottom: 10,
    textAlign: "center",
    textTransform: "uppercase",
  },
  promo: {
    fontSize: 18,
    color: "#00bce1",
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  promoDiscount: {
    fontSize: 18,
    color: "#ff0000",
    fontWeight: "bold",
  },
  cardList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  card: {
    width: "48%",
    aspectRatio: 0.6,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    width: "100%",
    height: "50%",
    marginBottom: 10,
    borderRadius: 5,
  },
  cardContent: {
    padding: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
  },
  cardInfoText: {
    marginLeft: 4,
  },
});

export default HomeScreen;
