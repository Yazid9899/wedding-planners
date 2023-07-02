import React, {useEffect, useState} from "react";
import {TouchableOpacity, StyleSheet, View} from "react-native";
import {Text} from "react-native-paper";
import Background from "../../components/loginRegisterComponent/Background";
import Logo from "../../components/loginRegisterComponent/Logo";
import Header from "../../components/loginRegisterComponent/Header";
import Button from "../../components/loginRegisterComponent/Button";
import TextInput from "../../components/loginRegisterComponent/TextInput";
import BackButton from "../../components/loginRegisterComponent/BackButton";
import {theme} from "../../core/theme";
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {loginData} from "../../features/UserData/loginSlice";

export default function LoginScreen({navigation}) {
  const navigate = useNavigation();
  // const dispatch = useDispatch();
  const {access_token, err} = useSelector((state) => state.users);

  useEffect(() => {
    const getToken = async () => {
      const token = await AsyncStorage.getItem("access_token");
      if (token) {
        alert("masuk");
        navigate("Home");
      } else if (err) {
        console.log(err);
      }
    };

    getToken();
  }, [access_token, err]);

  const onLogin = async (data) => {
    // await dispatch(loginData(data));
    await AsyncStorage.setItem("access_token", access_token);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    if (email === "" || password === "") {
      console.log("Error: Please fill in all the required fields.");
    } else {
      onLogin({email, password});
    }
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Welcome back.</Header>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ResetPasswordScreen")}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button
        style={{backgroundColor: "#00bce1"}}
        mode="contained"
        onPress={submitForm}
      >
        Login
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace("RegisterScreen")}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});
