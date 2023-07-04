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

import {SegmentedButtons} from "react-native-paper";
import SliderComponents from "../components/SliderComponents";
import WeddingIdea from "../components/WeddingIdea";
import Photographer from "../components/Photographer";

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
      <Photographer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  segmentedButtonsContainer: {
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default HalamanUtama;
