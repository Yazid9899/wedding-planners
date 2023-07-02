import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  Dimensions,
  Alert,
  Linking,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailProductsData } from "../features/PackageData/PackageDetail";
import { addCartData } from "../features/CartData/AddCart";

const EventOrganizerDetailScreen = ({ route }) => {
  // const { id } = route.params;
  const { eoId } = route.params;

  console.log(eoId, "ats");
  const [selectedPax, setSelectedPax] = useState(200); // Nilai pax awal
  const [showModal, setShowModal] = useState(false); // Status modal
  const paxOptions = [200, 300, 500, 700];
  const navigation = useNavigation();
  ///state lokasi device
  const [currentLocation, setCurrentLocation] = useState(null);

  const dispatch = useDispatch();

  const productStateData = useSelector((state) => state.detailProduct.data);
  // console.log(productStateData.Venue, "============");

  // const id = route.params();
  useEffect(() => {
    console.log(eoId, "use effect dtl");
    dispatch(fetchDetailProductsData({ eoId }));
  }, [dispatch]);
  /// function for redirect to google Maps

  const openNavigation = () => {
    console.log(productStateData?.Venue, "hyvuyviuvyuyv");
    const latitude = +productStateData?.Venue?.locationGoogle[0];
    const longitude = +productStateData?.Venue?.locationGoogle[1];
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    Alert.alert(
      "Open Google Maps",
      "Do you want to open Google Maps for directions?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Open",
          onPress: () => Linking.openURL(url),
        },
      ],
      { cancelable: true }
    );
  };
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);
  };

  const { status, error } = useSelector((state) => state.addCart);
  const startingPrice = formatCurrency(
    productStateData?.price + +productStateData?.Venue?.price
  );
  const totalPrice =
    productStateData?.price +
    +productStateData?.Venue?.price +
    selectedPax * productStateData?.Cathering?.price;
  const handlePaxChange = (value) => {
    setSelectedPax(value);
  };
  const handleAddToCart = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleConfirmation = async (confirmation) => {
    setShowModal(false);

    if (confirmation === "yes") {
      // dispatch(addCartData({ eoId, selectedPax }));
      dispatch(addCartData(productStateData));
      Alert.alert(
        "Success",
        "The product has been added to the cart successfully."
      );
    }
    // if (confirmation === "yes") {
    //   try {
    //     const response = await fetch(
    //       "https://c9d4-103-138-68-174.ngrok-free.app/carts",
    //       {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //           title: productStateData?.title,
    //           PhotographyId: productStateData?.PhotographyId,
    //           CatheringId: productStateData?.CatheringId,
    //           VenueId: productStateData?.VenueId,
    //           totalPrice: totalPrice,
    //         }),
    //       }
    //     );

    //     if (response.ok) {
    //       // Cart successfully created
    //       // navigation.navigate("Cart", {
    //       //   productStateData: { ...productStateData, totalPrice: totalPrice },
    //       // });
    //       navigation.navigate("Cart");
    //     } else {
    //       // Handle error response
    //       const errorData = await response.json();
    //       console.log(errorData);
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // } else if (confirmation === "no") {
    // }
  };

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const mapHeight = windowHeight * 0.3;

  //use effect for permission for using GPS (current location)
  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          console.log("Permission to access location was denied");
          return;
        }

        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        setCurrentLocation({ latitude, longitude });
      } catch (error) {
        console.log("Error getting location", error);
      }
    })();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: productStateData?.imageUrl }}
        style={styles.image}
      />

      <View style={styles.contentContainer}>
        <Text style={styles.title}>{productStateData?.title}</Text>
        <Text style={styles.description}>{productStateData?.description}</Text>

        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <MaterialIcons name="location-on" size={20} color="#555555" />
            <Text style={styles.detailText}>
              {productStateData?.Venue?.location}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <MaterialIcons name="attach-money" size={20} color="#555555" />
            <Text style={styles.detailText}>
              Starting Price: {startingPrice}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="room-service" size={20} color="#555555" />
            <Text style={styles.detailText}>
              Price/pax: {formatCurrency(productStateData?.Cathering?.price)}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="star" size={20} color="#555555" />
            <Text style={styles.detailText}>
              Rating: {productStateData?.rating}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="location-city" size={20} color="#555555" />
            <Text style={styles.detailText}>
              Venue: {productStateData?.Venue?.name}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="person" size={20} color="#555555" />
            <Text style={styles.detailText}>
              Photographer: {productStateData?.Photography?.name}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="restaurant" size={20} color="#555555" />
            <Text style={styles.detailText}>
              Cathering: {productStateData?.Cathering?.name}
            </Text>
          </View>
        </View>

        {/* Venue */}
        <Text style={styles.sectionTitle}>Venue</Text>
        {productStateData?.Venue?.photo?.map((url, index) => (
          <Image
            key={`venue-image-${index}`}
            source={{ uri: url }}
            style={styles.sectionImage}
          />
        ))}
        <Text style={styles.sectionDescription}>
          {productStateData?.Venue?.description}
        </Text>

        {/* Cathering */}
        <Text style={styles.sectionTitle}>Cathering</Text>
        <Image
          source={{ uri: productStateData?.Cathering?.imageUrl }}
          style={styles.sectionImage}
        />
        <Text style={styles.sectionDescription}>
          {productStateData?.Cathering?.description}
        </Text>

        {/* Photographer */}
        <Text style={styles.sectionTitle}>Photographer</Text>
        {productStateData?.Photography?.photo?.map((url, index) => (
          <Image
            key={`photographer-image-${index}`}
            source={{ uri: url }}
            style={styles.sectionImage}
          />
        ))}
        <Text style={styles.sectionDescription}>
          {productStateData?.Photography?.description}
        </Text>

        <Text>Choose total pax you want order</Text>
        <View style={styles.detailRow}>
          <MaterialIcons name="group" size={20} color="#555555" />
          <Text style={styles.detailText}>Pax:</Text>
          <Picker
            style={styles.paxPicker}
            selectedValue={selectedPax}
            onValueChange={handlePaxChange}
          >
            {paxOptions?.map((option) => (
              <Picker.Item
                key={option}
                label={option.toString()}
                value={option}
              />
            ))}
          </Picker>
        </View>
        <Text style={styles.totalPriceText}>
          Total price for this order is {formatCurrency(totalPrice)}
        </Text>
        <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
          <Text style={styles.addButtonText}>Add this order to cart</Text>
        </TouchableOpacity>

        <Modal visible={showModal} animationType="slide" transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                Your total order is Rp {totalPrice}, are you sure to add this to
                cart?
              </Text>
              <View style={styles.modalButtonContainer}>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => handleConfirmation("yes")}
                >
                  <Text style={styles.modalButtonText}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => handleConfirmation("no")}
                >
                  <Text style={styles.modalButtonText}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <MapView
        style={{ width: windowWidth, height: mapHeight, paddingRight: 20 }}
        initialRegion={{
          latitude: +productStateData?.Venue?.locationGoogle[0],
          longitude: +productStateData?.Venue?.locationGoogle[1],
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={openNavigation}
      >
        <Marker
          coordinate={{
            latitude: +productStateData?.Venue?.locationGoogle[0],
            longitude: +productStateData?.Venue?.locationGoogle[1],
          }}
          title={productStateData?.name}
        />
        {currentLocation && (
          <Marker
            coordinate={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
            }}
            title="Current Location"
            pinColor="blue" // Customize the pin color for the current location marker
          />
        )}
      </MapView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 250,
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  detailsContainer: {
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  detailText: {
    marginLeft: 5,
    fontSize: 16,
  },
  paxPicker: {
    flex: 1,
    marginLeft: 5,
    fontSize: 16,
    color: "#555555",
  },
  totalPriceText: {
    marginTop: 10,
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: "#00bce1",
    borderRadius: 8,
    paddingVertical: 12,
    marginTop: 10,
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
    width: "80%",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  modalButton: {
    backgroundColor: "#00bce1",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  modalButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  noteText: {
    fontSize: 15,
    color: "gray",
    marginTop: 5,
    fontStyle: "italic",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  sectionImage: {
    width: "100%",
    height: 200,
    marginTop: 10,
  },
  sectionDescription: {
    marginTop: 10,
    marginBottom: 20,
  },
});

export default EventOrganizerDetailScreen;
