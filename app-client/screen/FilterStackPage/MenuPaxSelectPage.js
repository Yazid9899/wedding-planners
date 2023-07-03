import { useEffect, useState } from "react";
import {
  Text,
  View,
  Animated,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";

import { setGuestPax } from "../../features/inputDateBudget/dateBudgetSlice";

const MenuPaxSelectPage = ({ navigation }) => {
  const dispatch = useDispatch();

  const budgetData = useSelector((state) => state.inputDateBudget.budget);
  const dateData = useSelector((state) => state.inputDateBudget.date);
  const venueData = useSelector((state) => state.inputDateBudget.venueId);
  const photographerData = useSelector(
    (state) => state.inputDateBudget.photographerId
  );
  const cateringData = useSelector((state) => state.inputDateBudget.cateringId);
  //
  const guestPaxData = useSelector((state) => state.inputDateBudget.guestPax);

  //
  const [inputValue, setInputValue] = useState("");
  //

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

  const nextButton = () => {
    navigation.navigate("BuildingSelect");
  };
  const previousButton = () => {
    navigation.navigate("CateringSelect");
  };

  useEffect(() => {
    dispatch(setGuestPax(inputValue));
  }, [inputValue]);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>
          Enter the number of guests you intend to invite.
        </Text>

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
            placeholder="Enter number of guest"
            placeholderTextColor="gray"
          />
        </Animated.View>

        <View>
          <Text>Your Budget: {budgetData}</Text>
          <Text>Your Book Date: {dateData}</Text>
          <Text>Your Venue: {JSON.stringify(venueData)}</Text>
          <Text>Your Photographer: {JSON.stringify(photographerData)}</Text>
          <Text>Your Catering: {JSON.stringify(cateringData)}</Text>
          <Text>
            Total: Venue+Photographer+ (Catering * @Pax:{" "}
            {JSON.stringify(guestPaxData)})
          </Text>
        </View>

        <View style={{ height: 30 }} />
        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button} onPress={previousButton}>
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={nextButton}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default MenuPaxSelectPage;

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
