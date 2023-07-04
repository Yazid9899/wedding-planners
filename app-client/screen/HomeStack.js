import {NavigationContainer, useNavigation} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";
import {AntDesign, Ionicons} from "@expo/vector-icons";
import {useEffect, useState} from "react";
// import styles from "../styles/style";
import HomeScreen from "../components/HomeScreen";
import DetailFotografer from "./DetailFotografer";
import DetailVenue from "./DetailVenue";
import DetailEventOrganizer from "./DetailEventOrganizer";
import DetailOrder from "./DetailOrder";
import FilterScreen from "../components/FilterScreen";
import CartScreen from "../components/CartScreen.js";
import HalamanUtama from "./HalamanUtama";

const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HalamanUtama} />
      <Stack.Screen name="Product" component={HomeScreen} />
      <Stack.Screen name="DetailOrder" component={DetailOrder} />
      <Stack.Screen name="DetailFotografer" component={DetailFotografer} />
      <Stack.Screen
        name="DetailEventOrganizer"
        component={DetailEventOrganizer}
      />
      <Stack.Screen name="DetailVenue" component={DetailVenue} />
      <Stack.Screen name="Customize" component={FilterScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
