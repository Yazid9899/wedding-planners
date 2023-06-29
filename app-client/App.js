// // Import React and React Native components
// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   Image,
//   FlatList,
//   ViewPropTypes,
// } from "react-native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";
// import { Ionicons } from "@expo/vector-icons";
// import Carousel from "react-native-snap-carousel";
// import PropTypes from "prop-types";
// import Icon from "react-native-vector-icons/Ionicons";

// // Define sample data for EO and venue

// const renderCarouselItem = ({ item }) => (
//   <View style={styles.successStoryItem}>
//     <Image source={{ uri: item.image }} style={styles.successStoryImage} />
//     <View style={styles.successStoryCaption}>
//       <Text style={styles.successStoryCaptionText}>{item.caption}</Text>
//     </View>
//   </View>
// );

// // Create a bottom tab navigator
// const Tab = createBottomTabNavigator();

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

// // Define the styles
// const styles = StyleSheet.create({
//   screen: {
//     flexGrow: 1,
//     paddingVertical: 20,
//     paddingHorizontal: 10,
//   },
//   subtitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#00bce1",
//     marginBottom: 10,
//     textAlign: "center",
//     textTransform: "uppercase", // Convert text to uppercase
//   },
//   promo: {
//     fontSize: 18,
//     color: "#00bce1",
//     marginBottom: 20,
//     textAlign: "center",
//     fontWeight: "bold",
//   },
//   promoDiscount: {
//     fontSize: 18,
//     color: "#ff0000",
//     fontWeight: "bold",
//   },
//   cardList: {
//     flexDirection: "row",
//     marginBottom: 20,
//   },
//   card: {
//     flex: 0.5, // Set flex to 0.5 for 2 cards per row
//     aspectRatio: 0.6, // Maintain aspect ratio of card
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     marginHorizontal: 5,
//     marginBottom: 10,
//     padding: 10,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   cardVenue: {
//     flex: 0.5, // Set flex to 0.5 for 2 cards per row
//     aspectRatio: 0.7, // Maintain aspect ratio of card
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     marginHorizontal: 5,
//     // marginBottom: 10,
//     padding: 10,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   cardImage: {
//     width: "100%",
//     height: "50%",
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
//   photographerList: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "center",
//   },
//   photographerItem: {
//     alignItems: "center",
//     margin: 10,
//   },
//   photographerImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     marginBottom: 5,
//   },
//   photographerName: {
//     fontSize: 14,
//     textAlign: "center",
//     color: "red",
//   },
//   successStoryItem: {
//     width: 200,
//     height: 200,
//     marginRight: 10,
//     borderRadius: 10,
//     overflow: "hidden",
//   },
//   successStoryImage: {
//     width: "100%",
//     height: "100%",
//   },
//   successStoryCaption: {
//     position: "absolute",
//     bottom: 0,
//     width: "100%",
//     backgroundColor: "rgba(0, 0, 0, 0.7)",
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//   },
//   successStoryCaptionText: {
//     color: "white",
//     fontSize: 14,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   locationContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   locationIcon: {
//     marginRight: 5,
//   },
//   locationText: {
//     fontSize: 12,
//     color: "#777",
//   },
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
  ViewPropTypes,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "./components/HomeScreen";
import FilterScreen from "./components/FilterScreen";
import LoginPage from "./components/LoginPage";
import ChatScreen from "./components/ChatScreen";

// Define sample data for EO and venue

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

// const FilterScreen = () => (
//   <View style={styles.screen}>
//     <Text style={styles.title}>Filter</Text>
//     {/* Add filter options */}
//   </View>
// );

const CartScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.title}>Cart</Text>
    {/* Add cart items */}
  </View>
);

// const ChatScreen = () => (
//   <View style={styles.screen}>
//     <Text style={styles.title}>Chat</Text>
//     {/* Add chat messages */}
//   </View>
// );

const TabNavigator = () => {
  return (
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
      <Tab.Screen
        name="Login"
        component={LoginPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-ellipses" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    // <ApolloProvider client={client}>
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
    // </ApolloProvider>
  );
  // <NavigationContainer>
  // <Tab.Navigator
  //   screenOptions={{
  //     tabBarActiveTintColor: "#00bce1",
  //     tabBarInactiveTintColor: "gray",
  //   }}
  // >
  //   <Tab.Screen
  //     name="Home"
  //     component={HomeScreen}
  //     options={{
  //       tabBarIcon: ({ color, size }) => (
  //         <Ionicons name="home" color={color} size={size} />
  //       ),
  //     }}
  //   />
  //   <Tab.Screen
  //     name="Filter"
  //     component={FilterScreen}
  //     options={{
  //       tabBarIcon: ({ color, size }) => (
  //         <Ionicons name="options" color={color} size={size} />
  //       ),
  //     }}
  //   />
  //   <Tab.Screen
  //     name="Cart"
  //     component={CartScreen}
  //     options={{
  //       tabBarIcon: ({ color, size }) => (
  //         <Ionicons name="cart" color={color} size={size} />
  //       ),
  //     }}
  //   />
  //   <Tab.Screen
  //     name="Chat"
  //     component={ChatScreen}
  //     options={{
  //       tabBarIcon: ({ color, size }) => (
  //         <Ionicons name="chatbubble-ellipses" color={color} size={size} />
  //       ),
  //     }}
  //   />
  // </Tab.Navigator>
  // </NavigationContainer>
};

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
export default App;
