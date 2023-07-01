//
import { useEffect, useState } from "react";
import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { Searchbar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
//
// Component
// import vendorCard from "../../components/filterComponents/vendorCard";
import SelectBuildingCard from "../../components/filterComponents/SelectBuildingCard";

import { useDispatch, useSelector } from "react-redux";
import { fetchVenueData } from "../../features/VenueData/venueSlice";

const BuildingSelectPage = ({ navigation }) => {
  const [venueData, setvenueData] = useState("");

  const venueStateData = useSelector((state) => state.venue.data);

  //   const venue = useSelector((state) => state.venue.value);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVenueData());
  }, [dispatch]);

  //   Search
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  //
  //   Location
  const [valueLoc, setValueLoc] = useState(null);

  const [isFocusLoc, setIsFocusLoc] = useState(false);

  const Location = [
    { label: "Jakarta Selatan", value: "jaksel" },
    { label: "Jakarta Utara", value: "jakut" },
    { label: "Jakarta Timur", value: "jaktim" },
    { label: "Jakarta Barat", value: "jakbar" },
    { label: "Tangerang Selatan", value: "tangsel" },
  ];
  const renderLocationDropdown = (text, dataDrop) => (
    <Dropdown
      style={[styles.dropdown, isFocusLoc && { borderColor: "blue" }]}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={dataDrop}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={`${text}`}
      // placeholder={!isFocus ? `${text}` : "..."}
      searchPlaceholder="Search..."
      value={valueLoc}
      onFocus={() => setIsFocusLoc(true)}
      onBlur={() => setIsFocusLoc(false)}
      onChange={(item) => {
        console.log(item);
        setValueLoc(item.value);
        setIsFocusLoc(false);
      }}
    />
  );

  // NEXT PREV button
  const nextButton = () => {
    navigation.navigate("PhotoSelect");
  };
  const previousButton = () => {
    navigation.navigate("MainFilter");
  };
  //
  return (
    //  <ScrollView>
    <View style={styles.screen}>
      <Searchbar
        placeholder="Search Venue"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <View style={styles.dropdownContainer}>
        {renderLocationDropdown("Location", Location)}
      </View>

      <FlatList
        data={venueStateData}
        renderItem={({ item }) => (
          <SelectBuildingCard data={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item?.id}
      ></FlatList>

      {/* <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} onPress={previousButton}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={nextButton}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View> */}
    </View>
    //  </ScrollView>
  );
};

export default BuildingSelectPage;

const styles = StyleSheet.create({
  showMoreContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  //
  cardContent: {
    paddingTop: 0,
    paddingBottom: 2,
  },
  //
  imageContainer: {
    overflow: "hidden", // Ensure the rounded corners are displayed properly
    borderRadius: 8, // Add borderRadius to round the edges
  },
  imageBackground: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
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
  //
  tagContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 0,
  },
  tag: {
    marginRight: 4,
    backgroundColor: "#E0E0E0",
  },
  tagText: {
    fontSize: 12,
    color: "black",
  },
  //
  screen: {
    flex: 1,
    marginTop: 1,
    paddingVertical: 20,
    paddingHorizontal: 8,
  },
  button: {
    width: 80,
    height: 30,
    backgroundColor: "blue",
    borderRadius: 4,
  },
  //   FILTER
  containerFilter: {
    width: 150, // Adjust the width as per your requirement
    height: 200, // Adjust the height as per your requirement
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 3,
  },
  flatListContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  imageFilter: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  textContainerFilter: {
    position: "absolute",
    top: "50%",
    alignSelf: "center",
    paddingHorizontal: 10,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 10,
  },
  textFilter: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginVertical: 10,
  },
  dropdownContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 1,
    marginVertical: 20,
  },
  dropdown: {
    flex: 1,
    height: 35,
    //  borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 20,
    marginHorizontal: 2,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  flatListContainer: {
    marginTop: 20,
  },
  containerFilter: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 5,
    overflow: "hidden",
  },
  // Button elevated
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  //   BUTON FIX
  containerButton: {
    //  position: "absolute",
    //  bottom: 20,
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    width: "100%",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "lightblue",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

{
  /* <Card>
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
            />
            <Card.Content style={styles.cardContent}>
              <Text>IDR 350.000.000</Text>
              <Card.Actions></Card.Actions>
            </Card.Content>
          </Card> */
}

{
  /* <View>
        <Text>Tes</Text>
        <Button onPress={() => dispatch(increment())}>Increment</Button>
        <Button onPress={() => dispatch(decrement())}>Decrement</Button>

        <Button onPress={() => dispatch(incrementByAmount({}))}>
          Increment By 5
        </Button>

        <Text>{venue}</Text>
        <Text>{JSON.stringify(venueStateData)}</Text>
      </View> */
}
