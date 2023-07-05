import {NavigationContainer, useNavigation} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../components/HomeScreen";
import HalamanUtama, {HeaderRight} from "./HalamanUtama";
import ProfileComponent from "../components/ProfileComponent";

const Stack = createStackNavigator();

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileComponent}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Product"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerRight: () => <HeaderRight navigation={navigation} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileScreen;
