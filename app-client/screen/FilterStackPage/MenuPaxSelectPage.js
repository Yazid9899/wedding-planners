import React, {useEffect, useState} from "react";
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

import {useDispatch, useSelector} from "react-redux";

import {setGuestPax} from "../../features/inputDateBudget/dateBudgetSlice";

import {addCustomCartData} from "../../features/CartData/AddCustomerCart";

const MenuPaxSelectPage = ({navigation}) => {
  const dispatch = useDispatch();

  const budgetData = useSelector((state) => state.inputDateBudget.budget);
  const dateData = useSelector((state) => state.inputDateBudget.date);
  const venueData = useSelector((state) => state.inputDateBudget.venueId);
  const photographerData = useSelector(
    (state) => state.inputDateBudget.photographerId
  );
  const cateringData = useSelector((state) => state.inputDateBudget.cateringId);

  const guestPaxData = useSelector((state) => state.inputDateBudget.guestPax);

  const [inputValue, setInputValue] = useState("");
  const [budgetError, setBudgetError] = useState(null);
  const [inputError, setInputError] = useState(false);
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
    const cleanedText = text.replace(/[^0-9]/g, "");

    if (cleanedText !== "" && cleanedText !== "0") {
      setInputValue(cleanedText);
    } else {
      setInputValue("");
    }
  };

  let cateringPrice = 0;

  const calculateTotalPrice = () => {
    const venuePrice = venueData?.price || 0;
    const photographyPrice = photographerData?.price || 0;
    cateringPrice = cateringData?.price || 0;
    const totalPrice =
      venuePrice + photographyPrice + cateringPrice * guestPaxData;
    return totalPrice;
  };

  const nextButton = () => {
    if (inputValue === "") {
      setInputError(true);
      return;
    }
    setInputError(false);

    const totalPrice = calculateTotalPrice();

    if (totalPrice > budgetData) {
      const maxGuestPax =
        Number(inputValue) +
        Math.floor((budgetData - totalPrice) / cateringPrice);
      setBudgetError(maxGuestPax);
      return;
    }

    const cartData = {
      title: `${venueData?.name} with ${cateringData?.name} and ${photographerData?.name} for ${guestPaxData} people`,
      VenueId: venueData?.id,
      CatheringId: cateringData?.id,
      PhotographyId: photographerData?.id,
      pax: guestPaxData,
      totalPrice: calculateTotalPrice(),
    };
    console.log(cartData, "data yg akan dikirim");
    // dispatch(addCustomCartData(cartData));
    // navigation.navigate("MainFilter");
    navigation.navigate("MenuUserInput");
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
            placeholder="Enter number of guests"
            placeholderTextColor="gray"
          />
        </Animated.View>

        {inputError && (
          <Text style={styles.errorText}>Input cannot be empty</Text>
        )}

        {budgetError !== null && (
          <Text style={styles.errorText}>
            Total price exceeds budget! Maximum number of guests: {budgetError}
          </Text>
        )}

        <View style={styles.tableContainer}>
          <View style={styles.row}>
            <Text style={styles.label}>Your Budget:</Text>
            <Text style={styles.value}>
              IDR {Number(budgetData).toLocaleString()}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Your Book Date:</Text>
            <Text style={styles.value}>{dateData}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Your Venue:</Text>
            <Text style={styles.value}>{venueData?.name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Your Photographer:</Text>
            <Text style={styles.value}>{photographerData?.name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Your Catering:</Text>
            <Text style={styles.value}>{cateringData?.name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Total:</Text>
            <Text style={styles.value}>
              IDR {Number(calculateTotalPrice()).toLocaleString()}
            </Text>
          </View>
        </View>

        <View style={{height: 30}} />
        <TouchableOpacity
          style={[styles.button, {width: "100%"}]}
          onPress={nextButton}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default MenuPaxSelectPage;

const {width, height} = Dimensions.get("window");
const containerWidth = width * 0.9;
const containerHeight = height * 0.3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "400",
    marginBottom: 10,
    width: containerWidth,
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
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    backgroundColor: "#00bce1",
    marginTop: 20,
    marginVertical: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  errorText: {
    color: "red",
    marginTop: 5,
    fontSize: 14,
  },
  tableContainer: {
    width: containerWidth,
    borderWidth: 1,
    borderColor: "transparent",
    marginTop: 20,
    marginBottom: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "transparent",
  },
  label: {
    fontWeight: "bold",
    marginRight: 10,
  },
  value: {
    flex: 1,
  },
});
