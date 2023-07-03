import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Avatar, Button } from "react-native-paper";

import { useDispatch, useSelector } from "react-redux";

import { setPhotographerId } from "../../features/inputDateBudget/dateBudgetSlice";

const SelectPhotoCard = ({ data, navigation }) => {
  const dispatch = useDispatch();

  const nextButton = () => {
    dispatch(setPhotographerId(data));

    navigation.navigate("CateringSelect");
  };

  const slicedDescription = data?.description?.slice(0, 30);

  console.log(data.photo);
  return (
    <View style={styles.vendorCard}>
      <View style={styles.row}>
        <View style={styles.avatarContainer}>
          <Avatar.Image
            size={50}
            source={{
              uri: "https://areatopik.com/wp-content/uploads/2022/10/Kobo-Nangis.jpg",
            }}
            style={{ marginTop: 5 }}
          />
        </View>
        <View style={styles.column}>
          <Text style={styles.vendorCardTextHead}>{data?.name}</Text>
          <Text>{slicedDescription}</Text>
        </View>
      </View>
      {/* Second Row */}
      <View style={styles.row}>
        <ScrollView horizontal>
          <View style={styles.imageListVendor}>
            {data?.photo &&
              data.photo.map((photo, index) => (
                <Image
                  key={index}
                  style={styles.imageListVendorBackground}
                  source={{
                    uri: photo,
                  }}
                />
              ))}
          </View>
        </ScrollView>
      </View>

      {/* Third Row */}
      <View style={styles.row}>
        <View style={styles.rowText}>
          <Text>IDR {Number(data.price).toLocaleString()}</Text>
        </View>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => {
            console.log("Add to Cart");
            nextButton();
          }}
        >
          Add to Cart
        </Button>
      </View>
    </View>
  );
};

export default SelectPhotoCard;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  rowText: {
    flexDirection: "column",
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  avatarContainer: {
    marginRight: 10,
  },
  column: {
    flexDirection: "column",
    flex: 1,
  },
  button: {
    width: 150, // Adjust the width to your preference
    height: 40, // Adjust the height to your preference
  },
  vendorCard: {
    flex: 1,
    borderWidth: 0.5,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 5,
  },
  vendorCardTextHead: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#147dd9",
    marginBottom: 5,
  },
  imageListVendor: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  imageListVendorBackground: {
    width: 140, // Adjust the desired width
    height: 110, // Adjust the desired height
    marginRight: 2, // Add some spacing between images
    borderRadius: 3,
  },
});
