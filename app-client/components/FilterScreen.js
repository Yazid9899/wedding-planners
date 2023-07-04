import {View, Text, StyleSheet, Image} from "react-native";

import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MainFilterPage from "../screen/FilterStackPage/MainFilterPage";
import BuildingSelectPage from "../screen/FilterStackPage/BuildingSelectPage";
import PhotoSelectPage from "../screen/FilterStackPage/PhotoSelectPage";
import CateringSelectPage from "../screen/FilterStackPage/CateringSelectPage";
import MenuPaxSelectPage from "../screen/FilterStackPage/MenuPaxSelectPage";
import MenuUserDetailFilterPage from "../screen/FilterStackPage/MenuUserDetailFilterPage";

export default function FilterPage() {
  const FilterStack = createNativeStackNavigator();

  return (
    // screenOptions={{ headerShown: false }}
    <FilterStack.Navigator>
      <FilterStack.Screen
        name="MainFilter"
        component={MainFilterPage}
        options={{title: "Main Filter", headerShown: false}}
      />
      <FilterStack.Screen
        name="BuildingSelect"
        component={BuildingSelectPage}
        options={{title: "Select Building", headerShown: false}}
      />
      <FilterStack.Screen
        name="PhotoSelect"
        component={PhotoSelectPage}
        options={{title: "Select Photo", headerShown: false}}
      />
      <FilterStack.Screen
        name="CateringSelect"
        component={CateringSelectPage}
        options={{title: "Select Catering", headerShown: false}}
      />
      <FilterStack.Screen
        name="MenuPaxSelect"
        component={MenuPaxSelectPage}
        options={{title: "Select Menu Pax", headerShown: false}}
      />
      <FilterStack.Screen
        name="MenuUserInput"
        component={MenuUserDetailFilterPage}
        options={{title: "User Detail", headerShown: false}}
      />
    </FilterStack.Navigator>
  );
}
