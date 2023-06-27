// // Import React and React Native components
// import React from "react";
// import { View, Text, StyleSheet } from "react-native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";
// import { Ionicons } from "@expo/vector-icons";

// // Define the components for each screen
// const HomeScreen = () => (
//   <View style={styles.screen}>
//     <Text style={styles.title}>Weddingku</Text>
//     <Text style={styles.promo}>Book now discount 5%</Text>
//     {/* Add wedding EO list cards */}
//     {/* Add venue cards */}
//     <Text style={styles.testimonial}>
//       Dengan Weddingku, gak perlu lagi deh pusing mikirin banyak hal
//     </Text>
//   </View>
// );

// const FilterScreen = () => (
//   <View style={styles.screen}>
//     <Text style={styles.title}>Filter</Text>
//     {/* Add filter options */}
//   </View>
// );

// const CartScreen = () => (
//   <View style={styles.screen}>
//     <Text style={styles.title}>Cart</Text>
//     {/* Add cart items */}
//   </View>
// );

// const ChatScreen = () => (
//   <View style={styles.screen}>
//     <Text style={styles.title}>Chat</Text>
//     {/* Add chat messages */}
//   </View>
// );

// // Create a bottom tab navigator
// const Tab = createBottomTabNavigator();

// const App = () => (
//   <NavigationContainer>
//     <Tab.Navigator
//       tabBarOptions={{
//         activeTintColor: "#00bce1",
//         inactiveTintColor: "gray",
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

// // Define the styles
// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// title: {
//   fontSize: 24,
//   fontWeight: "bold",
//   color: "#00bce1",
//   marginBottom: 10,
// },
// promo: {
//   fontSize: 18,
//   color: "#00bce1",
//   marginBottom: 20,
// },
// testimonial: {
//   fontSize: 16,
//   color: "gray",
//   textAlign: "center",
//   paddingHorizontal: 20,
// },
// });

// export default App;

// Import React and React Native components
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

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
  // Add more EO data if needed
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
  },
  {
    id: 2,
    name: "Venue 2",
    description: "Description of Venue 2",
    image:
      "https://cdn-2.tstatic.net/kaltim/foto/bank/images/venue-wedding-terbaik.jpg",
  },
  {
    id: 3,
    name: "Venue 1",
    description: "Description of Venue 1",
    image:
      "https://images.summitmedia-digital.com/preview/images/2019/04/26/cebu-wedding-venue-nm.jpg",
  },
  {
    id: 4,
    name: "Venue 2",
    description: "Description of Venue 2",
    image:
      "https://cdn-2.tstatic.net/kaltim/foto/bank/images/venue-wedding-terbaik.jpg",
  },
  {
    id: 5,
    name: "Venue 1",
    description: "Description of Venue 1",
    image:
      "https://images.summitmedia-digital.com/preview/images/2019/04/26/cebu-wedding-venue-nm.jpg",
  },
  {
    id: 6,
    name: "Venue 2",
    description: "Description of Venue 2",
    image:
      "https://cdn-2.tstatic.net/kaltim/foto/bank/images/venue-wedding-terbaik.jpg",
  },
  // Add more venue data if needed
  // ...
];

// Define the components for each screen
// const HomeScreen = () => (
//   <View contentContainerStyle={styles.screen}>
//     <Text style={styles.title}>Weddingku</Text>
//     <Text style={styles.promo}>Book now discount 5%</Text>
//     <ScrollView
//       horizontal
//       showsHorizontalScrollIndicator={false}
//       contentContainerStyle={styles.cardList}
//     >
//       {venueData.map((venue) => (
//         <View key={venue.id} style={styles.card}>
//           <Image source={{ uri: venue.image }} style={styles.cardImage} />
//           <Text style={styles.cardTitle}>{venue.name}</Text>
//           <Text style={styles.cardDescription}>{venue.description}</Text>
//         </View>
//       ))}
//     </ScrollView>
//     <FlatList
//       data={eoData}
//       keyExtractor={(item) => item.id.toString()}
//       renderItem={({ item }) => (
//         <View style={styles.card}>
//           <Image source={{ uri: item.image }} style={styles.cardImage} />
//           <Text style={styles.cardTitle}>{item.name}</Text>
//           <Text style={styles.cardDescription}>{item.description}</Text>
//         </View>
//       )}
//     />
//     <Text style={styles.testimonial}>
//       Dengan Weddingku, gak perlu lagi deh pusing mikirin banyak hal
//     </Text>
//   </View>
// );

// // Create a bottom tab navigator
// const Tab = createBottomTabNavigator();

// const App = () => (
//   <NavigationContainer>
//     <Tab.Navigator
//       tabBarOptions={{
//         activeTintColor: "#00bce1",
//         inactiveTintColor: "gray",
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
//       {/* Add other tab screens */}
//     </Tab.Navigator>
//   </NavigationContainer>
// );

// // Define the styles
// const styles = StyleSheet.create({
//   screen: {
//     flexGrow: 1,
//     paddingVertical: 20,
//     paddingHorizontal: 10,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#00bce1",
//     marginBottom: 10,
//   },
//   promo: {
//     fontSize: 18,
//     color: "#00bce1",
//     marginBottom: 20,
//   },
//   cardList: {
//     flexDirection: "row",
//     marginBottom: 20,
//   },
//   card: {
//     width: 200,
//     height: 250,
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     marginHorizontal: 10,
//     padding: 10,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   cardImage: {
//     width: 180,
//     height: 120,
//     marginBottom: 10,
//     borderRadius: 5,
//   },
//   cardTitle: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   cardDescription: {
//     fontSize: 14,
//     color: "gray",
//     textAlign: "center",
//   },
//   testimonial: {
//     fontSize: 16,
//     color: "gray",
//     textAlign: "center",
//     paddingHorizontal: 20,
//   },
// });
const HomeScreen = () => (
  <ScrollView contentContainerStyle={styles.screen}>
    <Text style={styles.title}>Weddingku</Text>
    <Text style={styles.promo}>Book now discount 5%</Text>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.cardList}
    >
      {venueData.map((venue) => (
        <View key={venue.id} style={styles.card}>
          <Image source={{ uri: venue.image }} style={styles.cardImage} />
          <Text style={styles.cardTitle}>{venue.name}</Text>
          <Text style={styles.cardDescription}>{venue.description}</Text>
        </View>
      ))}
    </ScrollView>
    <FlatList
      data={eoData}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2} // Set number of columns to 2
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.cardImage} />
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text style={styles.cardDescription}>{item.description}</Text>
        </View>
      )}
    />
    <Text style={styles.testimonial}>
      Dengan Weddingku, gak perlu lagi deh pusing mikirin banyak hal
    </Text>
  </ScrollView>
);

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

// const App = () => (
//   <NavigationContainer>
//     <Tab.Navigator
//       tabBarOptions={{
//         activeTintColor: "#00bce1",
//         inactiveTintColor: "gray",
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
//       {/* Add other tab screens */}
//     </Tab.Navigator>
//   </NavigationContainer>
// );
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
const App = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#00bce1",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Filter"
        component={FilterScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="options" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-ellipses" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

// Define the styles
const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00bce1",
    marginBottom: 10,
  },
  promo: {
    fontSize: 18,
    color: "#00bce1",
    marginBottom: 20,
  },
  // testimonial: {
  //   fontSize: 16,
  //   color: "gray",
  //   textAlign: "center",
  //   paddingHorizontal: 20,
  // },
  cardList: {
    flexDirection: "row",
    marginBottom: 20,
  },
  card: {
    flex: 0.5, // Set flex to 0.5 for 2 cards per row
    aspectRatio: 1, // Maintain aspect ratio of card
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 5,
    marginBottom: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    width: "100%",
    height: "70%",
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
});
export default App;
