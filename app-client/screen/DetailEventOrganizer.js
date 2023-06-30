// import { Text } from "react-native";
// const DetailEventOrganizer = () => {
//   return <Text> Ini detail Event Organizer </Text>;
// };

// export default DetailEventOrganizer;

import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

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

const EventOrganizerDetailScreen = () => {
  const eoData = {
    id: 1,
    name: "Bridal Store",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    image:
      "https://plus.unsplash.com/premium_photo-1661771928377-3c0ad5a0e85a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    location: "Jakarta",
    contact: "+62-9999-9999",
    experience: "7 years",
    startingPrice: 15000000,
    service: ["Planner", "Decoration", "Catering"],
    rating: 4.6,
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: eoData.image }} style={styles.image} />

      <View style={styles.contentContainer}>
        <Text style={styles.title}>{eoData.name}</Text>
        <Text style={styles.description}>{eoData.description}</Text>

        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <MaterialIcons name="location-on" size={20} color="#555555" />
            <Text style={styles.detailText}>{eoData.location}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="phone" size={20} color="#555555" />
            <Text style={styles.detailText}>{eoData.contact}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="access-time" size={20} color="#555555" />
            <Text style={styles.detailText}>
              Experience: {eoData.experience}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="attach-money" size={20} color="#555555" />
            <Text style={styles.detailText}>
              Starting Price: {eoData.startingPrice}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="room-service" size={20} color="#555555" />
            <Text style={styles.detailText}>
              Services: {eoData.service.join(", ")}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="star" size={20} color="#555555" />
            <Text style={styles.detailText}>Rating: {eoData.rating}</Text>
          </View>
        </View>
      </View>
    </View>
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
});

export default EventOrganizerDetailScreen;
