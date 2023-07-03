import { useState } from "react";
import { Text, View } from "react-native";

import { TextInput } from "react-native-paper";

import { useDispatch, useSelector } from "react-redux";

const MenuUserDetailFilterPage = ({ navigation }) => {
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
  const [data3, setData3] = useState("");
  const [data4, setData4] = useState("");
  const [data5, setData5] = useState("");

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

  return (
    <View style={styles.container}>
      <TextInput
        label="Data 1"
        value={data1}
        onChangeText={setData1}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Data 2"
        value={data2}
        onChangeText={setData2}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Data 3"
        value={data3}
        onChangeText={setData3}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Data 4"
        value={data4}
        onChangeText={setData4}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Data 5"
        value={data5}
        onChangeText={setData5}
        mode="outlined"
        style={styles.input}
      />
    </View>
  );
};

export default MenuUserDetailFilterPage;

const styles = {
  container: {
    marginHorizontal: 20,
  },
  input: {
    marginBottom: 10,
  },
};
