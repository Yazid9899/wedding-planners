import React, {useEffect} from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {fetchPhotographData} from "../features/PhotographData/photographSlice";

const Photographer = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.photograph.data);

  useEffect(() => {
    dispatch(fetchPhotographData());
  }, [dispatch]);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity key={item.id}>
        <View style={styles.itemContainer}>
          <Image source={{uri: item.photo[0]}} style={styles.image} />
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
    >
      {data.map((item) => renderItem({item}))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 16,
  },
  itemContainer: {
    alignItems: "center",
    marginBottom: 20,
    marginRight: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  title: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 12,
    textAlign: "center",
  },
});

export default Photographer;
