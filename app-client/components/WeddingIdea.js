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
import {fetchProductsData} from "../features/PackageData/packageSlice";

const WeddingIdea = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.product.data);

  useEffect(() => {
    dispatch(fetchProductsData({}));
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
            <Image source={{uri: item.imageUrl}} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
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

export default WeddingIdea;
