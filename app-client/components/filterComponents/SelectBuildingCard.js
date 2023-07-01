import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Button, Card } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const SelectBuildingCard = () => {
  const LocationText = () => (
    <View style={styles.locationContainer}>
      <Ionicons
        name="location"
        size={16}
        color="white"
        style={styles.locationIcon}
      />
      <Text style={styles.locationText}>Jakarta, Indonesia</Text>
    </View>
  );

  return (
    <Card style={styles.cardStyle}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={{ uri: "https://picsum.photos/700" }}
          style={styles.imageBackground}
        >
          <LocationText />
        </ImageBackground>
      </View>
      <Card.Title
        title="E1 - 2023 Three Nights Buyout Wedding"
        subtitle="by Amanjiwo Resort - Villa / Resort"
        titleStyle={styles.title}
        subtitleStyle={styles.subtitle}
      />
      <Card.Content style={styles.cardContent}>
        <View style={styles.rowContainer}>
          <Text style={styles.cardPrice}>IDR 350.000.000</Text>
          <Button mode="contained" onPress={() => console.log("Add to Cart")}>
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
