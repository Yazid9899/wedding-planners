import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Button, Card } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

import { useDispatch, useSelector } from "react-redux";

import { setVenueId } from "../../features/inputDateBudget/dateBudgetSlice";

const SelectBuildingCard = ({ data, navigation }) => {
  const dispatch = useDispatch();

  // NEXT PREV button
  const nextButton = () => {
    dispatch(setVenueId(data));

    navigation.navigate("PhotoSelect");
  };
  //   const previousButton = () => {
  //     navigation.navigate("MainFilter");
  //   };
  //
  const LocationText = () => (
    <View style={styles.locationContainer}>
      <Ionicons
        name="location"
        size={16}
        color="white"
        style={styles.locationIcon}
      />
      <Text style={styles.locationText}>{data.location}, Indonesia</Text>
    </View>
  );

  return (
    <Card style={styles.cardStyle}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={{ uri: data.photo[0] }}
          style={styles.imageBackground}
        >
          <LocationText />
        </ImageBackground>
      </View>
      <Card.Title
        title={data.name}
        subtitle={data.description}
        titleStyle={styles.title}
        subtitleStyle={styles.subtitle}
      />
      <Card.Content style={styles.cardContent}>
        <View style={styles.rowContainer}>
          <Text style={styles.cardPrice}>IDR {data.price}</Text>
          <Button
            mode="contained"
            onPress={() => {
              console.log("Add to Cart");
              nextButton();
            }}
          >
            Add to Cart
          </Button>
        </View>
      </Card.Content>
    </Card>
  );
};

export default SelectBuildingCard;

const styles = StyleSheet.create({
  cardStyle: {
    marginVertical: 5,
  },
  cardContent: {
    paddingTop: 0,
    paddingBottom: 2,
    marginBottom: 5,
  },
  locationContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 8,
  },
  locationIcon: {
    marginRight: 4,
  },
  locationText: {
    color: "white",
    fontSize: 12,
  },
  imageContainer: {
    overflow: "hidden", // Ensure the rounded corners are displayed properly
    borderRadius: 8, // Add borderRadius to round the edges
  },
  imageBackground: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
  },
  cardPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
