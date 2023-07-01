// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Modal,
// } from "react-native";
// import { Picker } from "@react-native-picker/picker";
// import { MaterialIcons } from "@expo/vector-icons";
// import { NavigationContainer, useNavigation } from "@react-navigation/native";

// const EventOrganizerDetailScreen = ({ route }) => {
// const {
//   name,
//   description,
//   image,
//   lokasi,
//   contact,
//   experience,
//   startingPrice,
//   service,
//   rating,
// } = route.params;

// const EventOrganizerDetailScreen = () => {
//   const [selectedPax, setSelectedPax] = useState(200); // Nilai pax awal
//   const [showModal, setShowModal] = useState(false); // Status modal

//   const navigation = useNavigation();
//   const eoData = {
//     id: 1,
//     name: "EO Wedding A",
//     description:
//       "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
//     image:
//       "https://plus.unsplash.com/premium_photo-1661771928377-3c0ad5a0e85a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     location: "Jakarta Pusat",
//     experience: "7 years",
//     startingPrice: 60000000,
//     service: ["Planner", "Decoration", "Catering"],
//     rating: 4.6,
//     venueId: 1,
//     catheringId: 1,
//     photographerId: 1,
//     venueName: "Istora Senayan",
//     catheringName: "Warung Mama",
//     photographerName: "Dimas",
//     pax: 300,
//     isBooked: false,
//     paxOptions: [200, 300, 500, 700],
//     pricePerPax: 40000,
//   };
//   const totalPrice = eoData.startingPrice + selectedPax * eoData.pricePerPax;
//   const handlePaxChange = (value) => {
//     setSelectedPax(value);
//   };
//   const handleAddToCart = () => {
//     setShowModal(true);
//   };

//   const handleModalClose = () => {
//     setShowModal(false);
//   };
//   const handleConfirmation = (confirmation) => {
//     setShowModal(false);
//     if (confirmation === "yes") {
//       navigation.navigate("Cart"); // Navigasi ke halaman keranjang
//       // Implementasikan logika navigasi ke halaman keranjang di sini
//     } else if (confirmation === "no") {
//       // Kembali ke halaman detail event organizer
//       // Implementasikan logika navigasi ke halaman detail event organizer di sini
//     }
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Image source={{ uri: eoData.image }} style={styles.image} />

//       <View style={styles.contentContainer}>
//         <Text style={styles.title}>{eoData.name}</Text>
//         <Text style={styles.description}>{eoData.description}</Text>

//         <View style={styles.detailsContainer}>
//           <View style={styles.detailRow}>
//             <MaterialIcons name="location-on" size={20} color="#555555" />
//             <Text style={styles.detailText}>{eoData.location}</Text>
//           </View>
//           <View style={styles.detailRow}>
//             <MaterialIcons name="access-time" size={20} color="#555555" />
//             <Text style={styles.detailText}>
//               Experience: {eoData.experience}
//             </Text>
//           </View>
//           <View style={styles.detailRow}>
//             <MaterialIcons name="attach-money" size={20} color="#555555" />
//             <Text style={styles.detailText}>
//               Starting Price: Rp.{eoData.startingPrice},00
//             </Text>
//           </View>
//           <View style={styles.detailRow}>
//             <MaterialIcons name="room-service" size={20} color="#555555" />
//             <Text style={styles.detailText}>
//               Price/pax: Rp. {eoData.pricePerPax},00
//             </Text>
//           </View>
//           <View style={styles.detailRow}>
//             <MaterialIcons name="star" size={20} color="#555555" />
//             <Text style={styles.detailText}>Rating: {eoData.rating}</Text>
//           </View>
//           <View style={styles.detailRow}>
//             <MaterialIcons name="location-city" size={20} color="#555555" />
//             <Text style={styles.detailText}>Venue: {eoData.venueName}</Text>
//           </View>
//           <View style={styles.detailRow}>
//             <MaterialIcons name="person" size={20} color="#555555" />
//             <Text style={styles.detailText}>
//               Photographer: {eoData.photographerName}
//             </Text>
//           </View>
//           <View style={styles.detailRow}>
//             <MaterialIcons name="restaurant" size={20} color="#555555" />
//             <Text style={styles.detailText}>
//               Cathering: {eoData.catheringName}
//             </Text>
//           </View>
//         </View>
//         <Text>Choose total pax you want order</Text>
//         <View style={styles.detailRow}>
//           <MaterialIcons name="group" size={20} color="#555555" />
//           <Text style={styles.detailText}>Pax:</Text>
//           <Picker
//             style={styles.paxPicker}
//             selectedValue={selectedPax}
//             onValueChange={handlePaxChange}
//           >
//             {eoData.paxOptions.map((option) => (
//               <Picker.Item
//                 key={option}
//                 label={option.toString()}
//                 value={option}
//               />
//             ))}
//           </Picker>
//         </View>
//         <Text style={styles.totalPriceText}>
//           Total price for this order is Rp {totalPrice}
//         </Text>
//         <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
//           <Text style={styles.addButtonText}>Add this order to cart</Text>
//         </TouchableOpacity>

//         <Modal visible={showModal} animationType="slide" transparent={true}>
//           <View style={styles.modalContainer}>
//             <View style={styles.modalContent}>
//               <Text style={styles.modalText}>
//                 Your total order is Rp {totalPrice}, are you sure to add this to
//                 cart?
//               </Text>
//               <View style={styles.modalButtonContainer}>
//                 <TouchableOpacity
//                   style={styles.modalButton}
//                   onPress={() => handleConfirmation("yes")}
//                 >
//                   <Text style={styles.modalButtonText}>Yes</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={styles.modalButton}
//                   onPress={() => handleConfirmation("no")}
//                 >
//                   <Text style={styles.modalButtonText}>No</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         </Modal>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   image: {
//     width: "100%",
//     height: 250,
//   },
//   contentContainer: {
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   description: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   detailsContainer: {
//     marginBottom: 20,
//   },
//   detailRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 5,
//   },
//   detailText: {
//     marginLeft: 5,
//     fontSize: 16,
//   },
//   paxPicker: {
//     flex: 1,
//     marginLeft: 5,
//     fontSize: 16,
//     color: "#555555",
//   },
//   totalPriceText: {
//     marginTop: 10,
//     color: "red",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   addButton: {
//     backgroundColor: "#00bce1",
//     borderRadius: 8,
//     paddingVertical: 12,
//     marginTop: 10,
//   },
//   addButtonText: {
//     color: "white",
//     fontSize: 16,
//     textAlign: "center",
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//   },
//   modalContent: {
//     backgroundColor: "white",
//     padding: 20,
//     borderRadius: 8,
//     width: "80%",
//   },
//   modalText: {
//     fontSize: 16,
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   modalButtonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//   },
//   modalButton: {
//     backgroundColor: "#00bce1",
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//   },
//   modalButtonText: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
// });

// export default EventOrganizerDetailScreen;

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

const EventOrganizerDetailScreen = ({ route }) => {
  const { eo } = route.params;
  const [selectedPax, setSelectedPax] = useState(200); // Nilai pax awal
  const [showModal, setShowModal] = useState(false); // Status modal
  const paxOptions = [200, 300, 500, 700];
  const navigation = useNavigation();
  ///state lokasi device
  const [currentLocation, setCurrentLocation] = useState(null);

  /// function for redirect to google Maps
  const openNavigation = () => {
    console.log(eo.Venue, "hyvuyviuvyuyv");
    const latitude = eo?.Venue.locationGoogle[0];
    const longitude = eo?.Venue.locationGoogle[1];
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

  const startingPrice = eo?.price + +eo?.Venue.price;
  const totalPrice =
    eo?.price + +eo?.Venue.price + selectedPax * eo?.Cathering?.price;
  const handlePaxChange = (value) => {
    setSelectedPax(value);
  };
  const handleAddToCart = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };
  // const handleConfirmation = (confirmation) => {
  //   setShowModal(false);
  //   if (confirmation === "yes") {
  //     navigation.navigate("Cart"); // Navigasi ke halaman keranjang
  //     // Implementasikan logika navigasi ke halaman keranjang di sini
  //   } else if (confirmation === "no") {
  //     // Kembali ke halaman detail event organizer
  //     // Implementasikan logika navigasi ke halaman detail event organizer di sini
  //   }
  // };

  const handleConfirmation = async (confirmation) => {
    setShowModal(false);

    if (confirmation === "yes") {
      try {
        const response = await fetch(
          "https://3d30-2404-c0-5c20-00-e9b-840e.ngrok-free.app/carts",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: eo?.title,
              PhotographyId: eo?.PhotographyId,
              CatheringId: eo?.CatheringId,
              VenueId: eo?.VenueId,
              totalPrice: totalPrice,
            }),
          }
        );

        if (response.ok) {
          // Cart successfully created
          navigation.navigate("Cart"); // Navigasi ke halaman keranjang
        } else {
          // Handle error response
          const errorData = await response.json();
          console.log(errorData);
        }
      } catch (error) {
        console.log(error);
      }
    } else if (confirmation === "no") {
      // Kembali ke halaman detail event organizer
      // Implementasikan logika navigasi ke halaman detail event organizer di sini
    }
  };

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const mapHeight = windowHeight * 0.3;

  // use effect for permission for using GPS (current location)
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
      <Image source={{ uri: eo?.imageUrl }} style={styles.image} />

      <View style={styles.contentContainer}>
        <Text style={styles.title}>{eo?.title}</Text>
        <Text style={styles.description}>{eo?.description}</Text>

        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <MaterialIcons name="location-on" size={20} color="#555555" />
            <Text style={styles.detailText}>{eo?.Venue.location}</Text>
          </View>
          {/* <View style={styles.detailRow}>
            <MaterialIcons name="access-time" size={20} color="#555555" />
            <Text style={styles.detailText}>Experience: {eo?.experience}</Text>
          </View> */}
          <View style={styles.detailRow}>
            <MaterialIcons name="attach-money" size={20} color="#555555" />
            <Text style={styles.detailText}>
              Starting Price: Rp.{startingPrice},00
            </Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="room-service" size={20} color="#555555" />
            <Text style={styles.detailText}>
              Price/pax: Rp. {eo?.Cathering.price},00
            </Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="star" size={20} color="#555555" />
            <Text style={styles.detailText}>Rating: {eo?.rating}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="location-city" size={20} color="#555555" />
            <Text style={styles.detailText}>Venue: {eo?.Venue.name}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="person" size={20} color="#555555" />
            <Text style={styles.detailText}>
              Photographer: {eo?.Photography.name}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="restaurant" size={20} color="#555555" />
            <Text style={styles.detailText}>
              Cathering: {eo?.Cathering.name}
            </Text>
          </View>
        </View>

        {/* Venue */}
        <Text style={styles.sectionTitle}>Venue</Text>
        {eo?.Venue?.photo?.map((url, index) => (
          <Image
            key={`venue-image-${index}`}
            source={{ uri: url }}
            style={styles.sectionImage}
          />
        ))}
        <Text style={styles.sectionDescription}>{eo?.Venue?.description}</Text>

        {/* Cathering */}
        <Text style={styles.sectionTitle}>Cathering</Text>
        <Image
          source={{ uri: eo?.Cathering?.imageUrl }}
          style={styles.sectionImage}
        />
        <Text style={styles.sectionDescription}>
          {eo?.Cathering.description}
        </Text>

        {/* Photographer */}
        <Text style={styles.sectionTitle}>Photographer</Text>
        {eo?.Photography?.photo?.map((url, index) => (
          <Image
            key={`photographer-image-${index}`}
            source={{ uri: url }}
            style={styles.sectionImage}
          />
        ))}
        <Text style={styles.sectionDescription}>
          {eo?.Photography.description}
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
          Total price for this order is Rp {totalPrice}
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
          latitude: +eo?.Venue.locationGoogle[0],
          longitude: +eo?.Venue.locationGoogle[1],
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={openNavigation}
      >
        <Marker
          coordinate={{
            latitude: +eo?.Venue.locationGoogle[0],
            longitude: +eo?.Venue.locationGoogle[1],
          }}
          title={eo?.name}
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
      <Text style={styles.noteText}>
        note: click red sign of location and click direction on bottom right to
        open Google Maps
      </Text>
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
