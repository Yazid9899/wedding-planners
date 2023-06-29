import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";

import { SafeAreaView } from "react-native";
import {
  SegmentedButtons,
  Button,
  DefaultTheme,
  Searchbar,
} from "react-native-paper";

import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function FilterPage() {
  const [filterValue, setFilterValue] = useState("");

  const data = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
  ];

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  //   Search
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  //

  const renderItem = ({ item }) => (
    <View style={styles.containerFilter}>
      <Image
        source={{
          uri: "https://alexandra.bridestory.com/image/upload/dpr_1.0,f_webp,fl_progressive,q_60,c_fill,g_faces,w_560,h_280/assets/upload-GD5o4PWIb.webp",
        }}
        style={styles.imageFilter}
      />
      <View style={styles.textContainerFilter}>
        <Text style={styles.textFilter}>Your Text Goes Here</Text>
      </View>
    </View>
  );

  const renderDropdown = (text) => (
    <Dropdown
      style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={!isFocus ? `${text}` : "..."}
      searchPlaceholder="Search..."
      value={value}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={(item) => {
        setValue(item.value);
        setIsFocus(false);
      }}
      // renderLeftIcon={() => (
      //   <AntDesign
      //     style={styles.icon}
      //     color={isFocus ? "blue" : "black"}
      //     name="Safety"
      //     size={20}
      //   />
      // )}
    />
  );

  //   const theme = {
  //     ...DefaultTheme,
  //     roundness: 0, // Adjust the roundness of the button (optional)
  //     colors: {
  //       ...DefaultTheme.colors,
  //       primary: "#007aff", // Set your desired primary color
  //     },
  //   };

  const CustomButton = ({ label, onPress }) => {
    return (
      <Button
        mode="elevated"
        onPress={onPress}
        style={styles.button}
        labelStyle={styles.buttonLabel}
        contentStyle={styles.buttonContent}
      >
        {label}
      </Button>
    );
  };

  return (
    <View style={styles.screen}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <View style={styles.dropdownContainer}>
        {renderDropdown("Location")}
        {renderDropdown("Venue")}
        {renderDropdown("Price")}
      </View>
      {/* <Button
        //   icon="camera"
        mode="elevated"
        onPress={() => console.log("Pressed")}
        style={styles.button}
        labelStyle={styles.buttonLabel}
        contentStyle={styles.buttonContent}
      >
        ApaKek
      </Button> */}

      <View style={styles.row}>
        <CustomButton label="Cok" onPress={() => console.log("Apa")} />
        <CustomButton
          label="Cuk"
          onPress={() => console.log("Button 2 pressed")}
        />
        <CustomButton
          label="Tai"
          onPress={() => console.log("Button 3 pressed")}
        />
        <CustomButton
          label="Bgst"
          onPress={() => console.log("Button 4 pressed")}
        />
      </View>

      <SafeAreaView>
        <SegmentedButtons
          value={filterValue}
          onValueChange={setFilterValue}
          buttons={[
            { value: "tes1", label: "Tes1" },
            { value: "tes2", label: "Tes2" },
            { value: "tes3", label: "Tes3" },
          ]}
        />
      </SafeAreaView>
      <FlatList
        data={[1, 2]}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item) => item.toString()}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 1,
    paddingVertical: 20,
    paddingHorizontal: 8,
  },
  //   FILTER
  containerFilter: {
    width: 150, // Adjust the width as per your requirement
    height: 200, // Adjust the height as per your requirement
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 3,
  },
  flatListContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  imageFilter: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  textContainerFilter: {
    position: "absolute",
    top: "50%",
    alignSelf: "center",
    paddingHorizontal: 10,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 10,
  },
  textFilter: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginVertical: 10,
  },
  //
  dropdownContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 1,
    marginVertical: 20,
  },
  dropdown: {
    flex: 1,
    height: 35,
    //  borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginHorizontal: 2,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  flatListContainer: {
    marginTop: 20,
  },
  containerFilter: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 5,
    overflow: "hidden",
  },
  imageFilter: {
    width: "100%",
    height: 150,
  },
  textContainerFilter: {
    padding: 10,
  },
  textFilter: {
    fontSize: 16,
    fontWeight: "bold",
  },
  // Button elevated
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    flex: 1,
    height: 40,
    marginHorizontal: 5,
    borderRadius: 5,
    overflow: "hidden",
  },
  buttonLabel: {
    fontSize: 16,
    //  overflow: "hidden",
  },
  buttonContent: {
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  //  End button
});
