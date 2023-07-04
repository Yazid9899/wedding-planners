import {store} from "./stores/store";
import {Provider, useSelector} from "react-redux";
// Import React and React Native components
import React, {useEffect, useState} from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";
import FilterScreen from "./components/FilterScreen";
import ChatScreen from "./components/ChatScreen";
import LoginRegister from "./screen/LoginRegister";
import HomeStack from "./screen/HomeStack";
import CartScreen from "./components/CartScreen.js";
import {shadow} from "react-native-paper";
import ProfileScreen from "./screen/ProfileScreen.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeMain from "./screen/HomeMain.js";

// Create a bottom tab navigator

const App = () => {
  return (
    <Provider store={store}>
      <HomeMain />
    </Provider>
  );
};

export default App;
