import React, {useEffect} from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {fetchVenueData} from "../features/VenueData/venueSlice";

const SliderComponents = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.venue.data);

  useEffect(() => {
    dispatch(fetchVenueData({}));
  }, [dispatch]);

  const copyData = [...data];

  const randomData = copyData.sort(() => 0.5 - Math.random()).slice(0, 4);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContentContainer}
    >
      {randomData.map((item) => (
        <TouchableOpacity key={item.id}>
          <View style={styles.itemContainer}>
            <Image source={{uri: item.photo[0]}} style={styles.image} />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContentContainer: {
    paddingHorizontal: 16,
  },
  itemContainer: {
    flex: 1,
    alignItems: "center",
    marginBottom: 20,
    marginRight: 10,
  },
  image: {
    width: 365,
    height: 225,
  },
  title: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
  },
});

export default SliderComponents;
