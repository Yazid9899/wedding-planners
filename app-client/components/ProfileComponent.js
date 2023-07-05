import React, {useEffect, useState} from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import {Octicons} from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useDispatch, useSelector} from "react-redux";
import {fetchDataUser} from "../features/UserData/fetchUserSlice";
import {useNavigation} from "@react-navigation/native";

const ProfileComponent = () => {
  const navigation = useNavigation();
  const [accessToken, setAccessToken] = useState("");
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.fetchUser.data);
  console.log(userData, "log data");

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const token = await AsyncStorage.getItem("access_token");
        setAccessToken(token);
        console.log(userData);
      } catch (error) {
        console.log("Error getting access token:", error);
      }
    };

    getAccessToken();
    dispatch(fetchDataUser());
  }, [dispatch]);

  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      Alert.alert("Logout berhasil");
    } catch (error) {
      console.log("Error logging out:", error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00bce1",
      }}
    >
      <View
        style={{
          width: 350,
          borderRadius: 20,
          padding: 10,
          textAlign: "center",
          backgroundColor: "#ededed",
        }}
      >
        <View style={{margin: 15}}>
          <Image
            source={{uri: "https://i.postimg.cc/bryMmCQB/profile-image.jpg"}}
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              alignSelf: "center",
              marginBottom: 5,
            }}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              letterSpacing: 1,
              marginTop: 10,
              textAlign: "center",
            }}
          >
            {userData.username}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              color: "gray",
              textAlign: "center",
            }}
          >
            {userData.email}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "gray",
              margin: 10,
              textAlign: "center",
            }}
          >
            {userData.phoneNumber}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              margin: 10,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
              <View style={styles.container}>
                <Ionicons name="cart-outline" size={32} color="#00bce1" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("History")}>
              <View style={styles.container}>
                <Octicons name="log" size={25} color="#00bce1" />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              margin: 20,
            }}
          >
            <TouchableOpacity
              style={{
                width: 130,
                height: 40,
                borderRadius: 10,
                backgroundColor: "#ededed",
                justifyContent: "center",
                marginLeft: 10,
                borderWidth: 1,
                borderColor: "red",
              }}
              onPress={handleLogout}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "red",
                }}
              >
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  profileCard: {
    width: 400,
    height: "auto",
    textAlign: "center",
    margin: 20,
    shadowColor: "#ccc",
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 18,
    marginBottom: 20,
    borderRadius: 10, // Menambahkan border radius
    elevation: 4, // Menambahkan efek elevasi
    backgroundColor: "#fff", // Mengubah latar belakang menjadi putih
  },
  profileBody: {
    padding: 20,
  },
  authorImg: {
    marginTop: 50,
    marginBottom: 20,
    alignItems: "center",
  },
  authorImage: {
    width: 170,
    height: 170,
    borderRadius: 85,
    padding: 5,
    backgroundColor: "#fff",
    borderWidth: 3, // Menambahkan lebar border
    borderColor: "#ccc", // Mengubah warna border
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 10, // Menambahkan margin bawah
  },
  intro: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 22,
    marginVertical: 10, // Menambahkan margin vertikal
    textAlign: "center",
  },
  logoutButton: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "stretch",
    marginHorizontal: 20,
    marginBottom: 20,
    borderWidth: 2, // Menambahkan lebar border
    borderColor: "red", // Mengubah warna border
  },
  logoutButtonText: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ProfileComponent;
