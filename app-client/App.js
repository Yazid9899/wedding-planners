import { store } from "./stores/store.js";
import { Provider } from "react-redux";

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
// import Carousel from "react-native-snap-carousel";
// import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "./components/HomeScreen";
import FilterScreen from "./components/FilterScreen";
import LoginPage from "./components/LoginPage";
import ChatScreen from "./components/ChatScreen";
import LoginRegister from "./screen/LoginRegister";
import HomeStack from "./screen/HomeStack";

// Define sample data for EO and venue

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

const CartScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.title}>Cart</Text>
    {/* Add cart items */}
  </View>
);

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
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Filter"
        component={FilterScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="options" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" color={color} size={size} />
          ),
          headerShown: false,
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
        component={LoginRegister}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-ellipses" color={color} size={size} />
          ),
          // headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    // <ApolloProvider client={client}>
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
    // </ApolloProvider>
  );
};

export default App;
