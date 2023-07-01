import { useEffect, useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Searchbar } from "react-native-paper";

import SelectPhotoCard from "../../components/filterComponents/SelectPhotoCard.js";

import { useDispatch, useSelector } from "react-redux";
import { fetchPhotographData } from "../../features/PhotographData/photographSlice.js";

const PhotoSelectPage = ({ navigation }) => {
  const dispatch = useDispatch();

  const photographStateData = useSelector((state) => state.photograph.data);

  useEffect(() => {
    dispatch(fetchPhotographData());
  }, [dispatch]);
  //

  const nextButton = () => {
    navigation.navigate("CateringSelect");
  };
  const previousButton = () => {
    navigation.navigate("BuildingSelect");
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
        placeholder="Search Photographer"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchStyle}
      />
      {/* <Text>{JSON.stringify(photographStateData)}</Text> */}
      {/* {SelectPhotoCard(data)}
        {SelectPhotoCard(data)}
        {SelectPhotoCard(data)} */}

      <FlatList
        data={photographStateData}
        renderItem={({ item }) => (
          <SelectPhotoCard data={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item?.id}
      ></FlatList>
    </View>
    //  </ScrollView>
  );
};

export default PhotoSelectPage;

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
  /* <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} onPress={previousButton}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={nextButton}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View> */
}
