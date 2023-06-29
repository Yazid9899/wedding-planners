import React from "react";
import {Image, StyleSheet} from "react-native";

export default function Logo() {
  return (
    <Image
      source={{
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY5LomaMWFOkfqhkRUvAEPypUWYcJLySkkacTemv8v6c-XEq5uRfIGhHHq5YjoRhCSG2Y&usqp=CAU",
      }}
      style={styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
});
