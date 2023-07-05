import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SegmentedButtons } from "react-native-paper";
import SliderComponents from "../components/SliderComponents";
import WeddingIdea from "../components/WeddingIdea";
// import Photographer from "../components/Photographer";

const HalamanUtama = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.segmentedButtonsContainer}>
        <SegmentedButtons
          value={value}
          onValueChange={(newValue) => {
            setValue(newValue);
            if (newValue === "product") {
              navigation.navigate("Product");
            } else if (newValue === "customize") {
              navigation.navigate("Customize");
            }
          }}
          buttons={[
            {
              value: "product",
              label: "Product",
            },
            {
              value: "customize",
              label: "Customize",
            },
          ]}
          showSelectedCheck={false}
          theme={{
            colors: {
              secondaryContainer: "#00bce1",
              onSecondaryContainer: "white",
            },
          }}
        />
      </View>
      <Text style={styles.subtitle}>Highlights</Text>
      <SliderComponents />
      <Text style={styles.subtitle}>Wedding Ideas</Text>
      <WeddingIdea />
      <Text style={styles.subtitle}>Photographer</Text>
      {/* <Photographer /> */}
    </ScrollView>
  );
};

export const HeaderRight = ({ navigation }) => {
  const goToCart = () => {
    navigation.navigate("Cart"); // Navigasi ke halaman "Cart"
  };
  return (
    <View style={styles.iconContainer}>
      <Ionicons
        name="cart-outline"
        size={24}
        color="black"
        onPress={goToCart}
        style={{ marginRight: 15 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  segmentedButtonsContainer: {
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  iconContainer: {
    marginRight: 10,
  },
});

export default HalamanUtama;
