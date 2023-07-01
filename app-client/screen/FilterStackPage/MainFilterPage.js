import { useState } from "react";
import {
  Text,
  View,
  Animated,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { Modal, Portal, Button, PaperProvider } from "react-native-paper";

//
import DatePicker from "react-native-modern-datepicker";
//

const MainFilterPage = ({ navigation }) => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const animatedScale = useState(new Animated.Value(1))[0];

  const handleInputFocus = () => {
    setIsFocused(true);
    Animated.spring(animatedScale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    Animated.spring(animatedScale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handleInputChange = (text) => {
    // Remove non-digit characters from the input
    const cleanedText = text.replace(/[^0-9]/g, "");
    setInputValue(cleanedText);
  };

  const [selectedDate, setSelectedDate] = useState("");

  const nextButton = () => {
    console.log(selectedDate);
    navigation.navigate("BuildingSelect");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find your ideal Wedding for your budget</Text>

      <View style={styles.gap} />
      <Animated.View
        style={[
          styles.inputContainer,
          {
            transform: [
              {
                scale: animatedScale.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.96, 1],
                }),
              },
            ],
          },
        ]}
      >
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          keyboardType="numeric"
          placeholder="Enter estimated budget"
          placeholderTextColor="gray"
        />
      </Animated.View>

      <View style={{ height: 30 }} />

      <Text style={styles.textDate}>Pick a Date</Text>

      <DatePicker
        onSelectedChange={(date) => setSelectedDate(date)}
        style={{ width: containerWidth, height: 100 }}
      />

      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={nextButton}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainFilterPage;

const { width, height } = Dimensions.get("window");
const containerWidth = width * 0.8; // Set the container width to 80% of the screen width
const containerHeight = height * 0.3; // Set the container width to 80% of the screen width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 400,
    marginBottom: 10,
  },
  gap: {
    height: 10,
  },
  textDate: {
    height: 30,
  },
  inputContainer: {
    width: containerWidth,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginTop: 5,
  },
  input: {
    fontSize: 16,
  },
  containerButton: {
    //  position: "absolute",
    //  bottom: 20,
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    width: "100%",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "lightblue",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
