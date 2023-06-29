// Import React and React Native components
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  ViewPropTypes,
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/Ionicons";
import DetailVenue from "../screen/DetailVenue";

// Define sample data for EO and venue
const eoData = [
  {
    id: 1,
    name: "EO Wedding A",
    description: "Description of EO Wedding A",
    image:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 2,
    name: "EO Wedding B",
    description: "Description of EO Wedding B",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 3,
    name: "EO Wedding C",
    description: "Description of EO Wedding C",
    image:
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 4,
    name: "EO Wedding D",
    description: "Description of EO Wedding D",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 5,
    name: "EO Wedding E",
    description: "Description of EO Wedding E",
    image:
      "https://images.unsplash.com/photo-1550005809-91ad75fb315f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80",
  },
  {
    id: 6,
    name: "EO Wedding F",
    description: "Description of EO Wedding F",
    image:
      "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  // Add more EO data if needed
  // ...
];

const venueData = [
  {
    id: 1,
    name: "Venue 1",
    description: "Description of Venue 1",
    image:
      "https://images.summitmedia-digital.com/preview/images/2019/04/26/cebu-wedding-venue-nm.jpg",
    location: "Jakarta",
  },
  {
    id: 2,
    name: "Venue 2",
    description: "Description of Venue 2",
    image:
      "https://cdn-2.tstatic.net/kaltim/foto/bank/images/venue-wedding-terbaik.jpg",
    location: "Medan",
  },
  {
    id: 3,
    name: "Venue 1",
    description: "Description of Venue 1",
    image:
      "https://images.summitmedia-digital.com/preview/images/2019/04/26/cebu-wedding-venue-nm.jpg",
    location: "Bandung",
  },
  {
    id: 4,
    name: "Venue 2",
    description: "Description of Venue 2",
    image:
      "https://medinacatering.id/wp-content/uploads/2019/10/Rekomendasi-Wedding-Venue-Terbaik-di-Jakarta-Selatan-menara-165.jpg",
    location: "Surabaya",
  },
  {
    id: 5,
    name: "Venue 1",
    description: "Description of Venue 1",
    image:
      "https://s3.ap-southeast-1.amazonaws.com/fab.thebridedept/2022/07/shutterstock_387640156-1658290895-828x552.jpg",
    location: "Jakarta",
  },
  {
    id: 6,
    name: "Venue 2",
    description: "Description of Venue 2",
    image:
      "https://assets.venuecrew.com/wp-content/uploads/2022/08/01233727/London-hotel-wedding-venue-The-Kimpton-Fitzroy-ballroom.jpg",
    location: "Jakarta",
  },
  // Add more venue data if needed
  // ...
];
// List of photographers
const photographers = [
  {
    id: 1,
    name: "Hifzul",
    image:
      "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=858&q=80",
    portofolio: [
      {
        judul: "Wedding Photoshoot",
        deskripsi: "Memorable moments captured during weddings",
        gambar:
          "https://plus.unsplash.com/premium_photo-1661281280766-8b39804dfa77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      },
      {
        judul: "Portrait Photography",
        deskripsi: "Capturing beautiful portraits of individuals",
        gambar:
          "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      },
      {
        judul: "Portrait Photography",
        deskripsi: "Capturing beautiful portraits of individuals",
        gambar:
          "https://plus.unsplash.com/premium_photo-1675107358573-e059060d7006?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      },
    ],
  },
  {
    id: 2,
    name: "Yazid",
    image:
      "https://images.unsplash.com/photo-1603574670812-d24560880210?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
    portofolio: [
      {
        judul: "Wedding Photoshoot",
        deskripsi: "Memorable moments captured during weddings",
        gambar:
          "https://plus.unsplash.com/premium_photo-1661281280766-8b39804dfa77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      },
      {
        judul: "Portrait Photography",
        deskripsi: "Capturing beautiful portraits of individuals",
        gambar:
          "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      },
      {
        judul: "Portrait Photography",
        deskripsi: "Capturing beautiful portraits of individuals",
        gambar:
          "https://plus.unsplash.com/premium_photo-1675107358573-e059060d7006?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      },
    ],
  },
  {
    id: 3,
    name: "Franky",
    image:
      "https://images.unsplash.com/photo-1521856729154-7118f7181af9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
    portofolio: [
      {
        judul: "Wedding Photoshoot",
        deskripsi: "Memorable moments captured during weddings",
        gambar:
          "https://plus.unsplash.com/premium_photo-1661281280766-8b39804dfa77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      },
      {
        judul: "Portrait Photography",
        deskripsi: "Capturing beautiful portraits of individuals",
        gambar:
          "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      },
      {
        judul: "Portrait Photography",
        deskripsi: "Capturing beautiful portraits of individuals",
        gambar:
          "https://plus.unsplash.com/premium_photo-1675107358573-e059060d7006?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      },
    ],
  },
  {
    id: 4,
    name: "Damar",
    image:
      "https://images.unsplash.com/photo-1625492922105-5914617fd869?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80",
    portofolio: [
      {
        judul: "Wedding Photoshoot",
        deskripsi: "Memorable moments captured during weddings",
        gambar:
          "https://plus.unsplash.com/premium_photo-1661281280766-8b39804dfa77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      },
      {
        judul: "Portrait Photography",
        deskripsi: "Capturing beautiful portraits of individuals",
        gambar:
          "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      },
      {
        judul: "Portrait Photography",
        deskripsi: "Capturing beautiful portraits of individuals",
        gambar:
          "https://plus.unsplash.com/premium_photo-1675107358573-e059060d7006?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      },
    ],
  },
];

const successStories = [
  {
    image:
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    caption: "Success Story 1",
  },
  {
    image:
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    caption: "Success Story 2",
  },
  {
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    caption: "Success Story 3",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    caption: "Success Story 4",
  },
];

const renderCarouselItem = ({ item }) => (
  <View style={styles.successStoryItem}>
    <Image source={{ uri: item.image }} style={styles.successStoryImage} />
    <View style={styles.successStoryCaption}>
      <Text style={styles.successStoryCaptionText}>{item.caption}</Text>
    </View>
  </View>
);

const HomeScreen = () => {
  const { navigate } = useNavigation();
  const handlePressVenue = () => {
    navigate("DetailVenue");
  };
  const handlePressFotografer = () => {
    navigate("DetailFotografer");
  };
  const handlePressEO = () => {
    navigate("DetailEventOrganizer");
  };
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Text style={styles.title}>Weddingku</Text>
      <Text style={styles.promo}>
        Book now discount <Text style={styles.promoDiscount}>5%</Text>
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardList}
      >
        {venueData.map((venue) => (
          // <View
          //   onPress={() => handlePressVenue()}
          //   // onPress={handlePressVenue}
          //   key={venue.id}
          //   style={styles.cardVenue}
          // >
          <TouchableOpacity
            onPress={() => handlePressVenue()} // Perhatikan penyesuaian di sini
            key={venue.id}
            style={styles.cardVenue}
          >
            <Image
              // onPress={() => handlePressVenue()}
              source={{ uri: venue.image }}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>{venue.name}</Text>
            <Text style={styles.cardDescription}>{venue.description}</Text>
            <View style={styles.locationContainer}>
              <Icon
                name="location-outline"
                size={16}
                color="#000"
                style={styles.locationIcon}
              />
              <Text style={styles.locationText}>{venue.location}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Text style={styles.subtitle}>List of EO:</Text>
      <FlatList
        data={eoData}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // Set number of columns to 2
        renderItem={({ item }) => (
          <TouchableOpacity onPress={handlePressEO} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Display the list of photographers */}
      <Text style={styles.subtitle}>List of Photographers:</Text>
      <View style={styles.photographerList}>
        {/* Loop through the photographer data */}
        {photographers.map((photographer) => (
          <TouchableOpacity
            key={photographer.id}
            style={styles.photographerItem}
            onPress={handlePressFotografer}
          >
            <Image
              source={{ uri: photographer.image }}
              style={styles.photographerImage}
            />
            <Text style={styles.photographerName}>{photographer.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Display the success story carousel */}
      <Text style={styles.subtitle}>Our Success Story:</Text>

      <Carousel
        data={successStories}
        renderItem={renderCarouselItem}
        sliderWidth={300}
        itemWidth={200}
      />
      <Text style={styles.testimonial}>
        Dengan Weddingku, gak perlu lagi deh pusing mikirin banyak hal
      </Text>
    </ScrollView>
  );
};

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

const FilterScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.title}>Filter</Text>
    {/* Add filter options */}
  </View>
);

const CartScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.title}>Cart</Text>
    {/* Add cart items */}
  </View>
);

const ChatScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.title}>Chat</Text>
    {/* Add chat messages */}
  </View>
);

// const App = () => (
//   <NavigationContainer>
//     <Tab.Navigator
//       screenOptions={{
//         tabBarActiveTintColor: "#00bce1",
//         tabBarInactiveTintColor: "gray",
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="home" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Filter"
//         component={FilterScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="options" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Cart"
//         component={CartScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="cart" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Chat"
//         component={ChatScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="chatbubble-ellipses" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   </NavigationContainer>
// );

// Define the styles
const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00bce1",
    marginBottom: 10,
    textAlign: "center",
    textTransform: "uppercase", // Convert text to uppercase
  },
  promo: {
    fontSize: 18,
    color: "#00bce1",
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  promoDiscount: {
    fontSize: 18,
    color: "#ff0000",
    fontWeight: "bold",
  },
  cardList: {
    flexDirection: "row",
    marginBottom: 20,
  },
  card: {
    flex: 0.5, // Set flex to 0.5 for 2 cards per row
    aspectRatio: 0.6, // Maintain aspect ratio of card
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 5,
    marginBottom: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cardVenue: {
    flex: 0.5, // Set flex to 0.5 for 2 cards per row
    aspectRatio: 0.7, // Maintain aspect ratio of card
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 5,
    // marginBottom: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    width: "100%",
    height: "50%",
    marginBottom: 10,
    borderRadius: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
  },
  testimonial: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  photographerList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  photographerItem: {
    alignItems: "center",
    margin: 10,
  },
  photographerImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 5,
  },
  photographerName: {
    fontSize: 14,
    textAlign: "center",
    color: "red",
  },
  successStoryItem: {
    width: 200,
    height: 200,
    marginRight: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  successStoryImage: {
    width: "100%",
    height: "100%",
  },
  successStoryCaption: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  successStoryCaptionText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationIcon: {
    marginRight: 5,
  },
  locationText: {
    fontSize: 12,
    color: "#777",
  },
});
export default HomeScreen;
