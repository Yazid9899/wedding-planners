import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Avatar, Button } from "react-native-paper";

const SelectCateringCard = ({ item }) => {
  return (
    <View style={styles.vendorCard}>
      <View style={styles.avatarContainer}>
        <Avatar.Image
          size={50}
          source={{
            uri: "https://areatopik.com/wp-content/uploads/2022/10/Kobo-Nangis.jpg",
          }}
        />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.vendorCardTextHead}>
          Double Happiness Wedding Organizer
        </Text>
        <Text style={styles.vendorCardTextSubtitle}>
          Event Organizer - Jakarta
        </Text>
      </View>

      {/* Second Row */}
      <View style={styles.row}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.imageListVendor}>
            {/* Add your multiple images here */}
            <Image
              style={styles.imageListVendorBackground}
              source={{
                uri: "https://img.freepik.com/free-photo/bride-groom-having-their-wedding-beach_23-2149043964.jpg?w=2000",
              }}
            />
            <Image
              style={styles.imageListVendorBackground}
              source={{
                uri: "https://img.freepik.com/free-photo/bride-groom-having-their-wedding-beach_23-2149043964.jpg?w=2000",
              }}
            />
            <Image
              style={styles.imageListVendorBackground}
              source={{
                uri: "https://img.freepik.com/free-photo/bride-groom-having-their-wedding-beach_23-2149043964.jpg?w=2000",
              }}
            />
            <Image
              style={styles.imageListVendorBackground}
              source={{
                uri: "https://img.freepik.com/free-photo/bride-groom-having-their-wedding-beach_23-2149043964.jpg?w=2000",
              }}
            />
          </View>
        </ScrollView>
      </View>

      {/* Third Row */}
      <View style={styles.priceContainer}>
        <Text>per @200 pax</Text>
        <Text style={styles.priceText}>IDR 5.000.000</Text>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => console.log("Add to Cart")}
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonText}
        >
          Add to Cart
        </Button>
      </View>
    </View>
  );
};

export default SelectCateringCard;

const styles = StyleSheet.create({
  vendorCard: {
    borderWidth: 0.5,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 3,
    marginHorizontal: 3,
    padding: 10,
    maxWidth: "50%",
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  titleContainer: {
    marginBottom: 10,
  },
  vendorCardTextHead: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#147dd9",
  },
  vendorCardTextSubtitle: {
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  imageListVendor: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageListVendorBackground: {
    width: 100,
    height: 100,
    marginRight: 2,
    borderRadius: 3,
  },
  priceContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  priceText: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    width: 130,
    height: 35,
    alignSelf: "flex-start",
  },
  buttonContent: {
    height: 40,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
