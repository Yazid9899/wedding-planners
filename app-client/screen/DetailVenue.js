// import { Text } from "react-native";
// const DetailVenue = () => {
//   return <Text> Ini detail Venue </Text>;
// };

// export default DetailVenue;

import React, {useEffect, useState} from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import MapView, {Marker} from "react-native-maps";
import {useDispatch, useSelector} from "react-redux";
import {fetchVenueData} from "../features/VenueData/venueSlice";
import {useFocusEffect} from "@react-navigation/native";

const VenueDetailScreen = ({route}) => {
  const {venue} = route.params;

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const mapHeight = windowHeight * 0.3;

  return (
    <ScrollView style={styles.container}>
      <Image source={{uri: venue?.photo[0]}} style={styles.image} />

      <View style={styles.contentContainer}>
        <Text style={styles.title}>{venue?.name}</Text>
        <Text style={styles.description}>{venue?.description}</Text>

        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <MaterialIcons name="location-on" size={20} color="#555555" />
            <Text style={styles.detailText}>{venue?.location}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="people" size={20} color="#555555" />
            <Text style={styles.detailText}>Capacity: {venue?.capacity}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="room-service" size={20} color="#555555" />
            <Text style={styles.detailText}>
              Facilities: Stage, Ballroom, Parking Car
            </Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="star" size={20} color="#555555" />
            <Text style={styles.detailText}>Rating: 4.8</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="attach-money" size={20} color="#555555" />
            <Text style={styles.detailText}>
              Price: Start from Rp.{venue?.price}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="category" size={20} color="#555555" />
            <Text style={styles.detailText}>Type: Ballroom</Text>
          </View>
        </View>

        <Text style={styles.portofolioTitle}>Portfolio Image:</Text>
        <ScrollView horizontal>
          {venue?.photo?.map((portfolioImage, index) => (
            <Image
              key={index}
              source={{uri: portfolioImage}}
              style={styles.portfolioImage}
            />
          ))}
        </ScrollView>
        <Text style={styles.portofolioTitle}>Google Maps:</Text>
      </View>

      <MapView
        style={{width: windowWidth, height: mapHeight, paddingRight: 20}}
        initialRegion={{
          latitude: +venue?.locationGoogle[0],
          longitude: +venue?.locationGoogle[1],
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: +venue?.locationGoogle[0],
            longitude: +venue?.locationGoogle[1],
          }}
          title={venue?.name}
        />
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
  portofolioTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
  },
  portfolioImage: {
    width: 200,
    height: 150,
    marginRight: 10,
  },
});

export default VenueDetailScreen;
