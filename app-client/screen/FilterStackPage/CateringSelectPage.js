import { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  FlatList,
} from "react-native";
import { Searchbar } from "react-native-paper";

import SelectCateringCard from "../../components/filterComponents/SelectCateringCard.js";
import { useDispatch, useSelector } from "react-redux";

import { fetchCatheringsData } from "../../features/CateringData/cateringSlice.js";

const CateringSelectPage = ({ navigation }) => {
  const dispatch = useDispatch();

  const cateringStateData = useSelector((state) => state.catering.data);

  useEffect(() => {
    dispatch(fetchCatheringsData());
  }, [dispatch]);

  //
  const nextButton = () => {
    navigation.navigate("MenuPaxSelect");
  };
  const previousButton = () => {
    navigation.navigate("PhotoSelect");
  };

  //   Search
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  //
  const data = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
  ];
  return (
    //  <ScrollView>
    <View style={styles.screen}>
      <Searchbar
        placeholder="Search Catering"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchStyle}
      />

      <FlatList
        data={cateringStateData}
        renderItem={({ item }) => (
          <SelectCateringCard data={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item?.id}
        numColumns={2}
      ></FlatList>
      {/* <View style={styles.cardContainer}>
          <View style={styles.cardRow}>
            {SelectCateringCard(data)}
            {SelectCateringCard(data)}
          </View>
          <View style={styles.cardRow}>
            {SelectCateringCard(data)}
            {SelectCateringCard(data)}
          </View>
          <View style={styles.cardRow}>
            {SelectCateringCard(data)}
            {SelectCateringCard(data)}
          </View>
        </View> */}

      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} onPress={previousButton}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={nextButton}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
    //  </ScrollView>
  );
};

export default CateringSelectPage;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 1,
    paddingVertical: 20,
    paddingHorizontal: 8,
  },
  searchStyle: {
    marginBottom: 7,
  },
  cardContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  containerButton: {
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
