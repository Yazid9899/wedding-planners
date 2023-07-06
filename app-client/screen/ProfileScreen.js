import {NavigationContainer, useNavigation} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../components/HomeScreen";
import HalamanUtama, {HeaderRight} from "./HalamanUtama";
import ProfileComponent from "../components/ProfileComponent";
import TransactionComponent from "../components/TransactionComponent";

const Stack = createStackNavigator();

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileComponent}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="History"
        component={TransactionComponent}
        options={{
          headerShown: true,
          headerRight: () => <HeaderRight navigation={navigation} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileScreen;
