// // import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   TextInput,
//   Button,
//   FlatList,
// } from "react-native";
// // import * as TalkRn from "@talkjs/expo";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const ChatScreen = () => {
//   // const [name, setName] = useState("");
//   // const [user, setUser] = useState(null);
//   // const [admin, setAdmin] = useState(null);
//   // useEffect(() => {
//   //   AsyncStorage.getItem("username").then((res) => {
//   //     console.log(res);
//   //     if (res === "Ciptandaru") {
//   //       setAdmin({
//   //         id: 2,
//   //         name: "Admin",
//   //         role: "admin",
//   //       });
//   //       setUser({
//   //         id: 1,
//   //         name: name,
//   //         role: "default",
//   //       });
//   //     } else {
//   //       setName(res);
//   //     }
//   //   });
//   // }, []);

//   // const me = admin || {
//   //   id: 1,
//   //   name: name,
//   //   role: "default",
//   // };
//   // const other = user || {
//   //   id: 2,
//   //   name: "Admin",
//   //   email: "EMAIL",
//   //   welcomeMessage: "Ada yang bisa saya bantu?",
//   //   role: "admin",
//   // };

//   // const conversationBuilder = TalkRn.getConversationBuilder(
//   //   TalkRn.oneOnOneId(me, other)
//   // );

//   // conversationBuilder.setParticipant(me);
//   // conversationBuilder.setParticipant(other);
//   return (
//     <View style={styles.container}>
//       {/* <TalkRn.Session appId="tuqylOOF" me={me}>
//         <TalkRn.Chatbox conversationBuilder={conversationBuilder} />
//       </TalkRn.Session> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // padding: 10,
//     backgroundColor: "#fff",
//   },
//   senderContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "flex-end",
//     marginBottom: 10,
//   },
//   receiverContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   profileImage: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginRight: 10,
//   },
//   senderContent: {
//     padding: 8,
//     borderRadius: 10,
//     backgroundColor: "#DCF8C6",
//   },
//   receiverContent: {
//     padding: 8,
//     borderRadius: 10,
//     backgroundColor: "#F4F4F4",
//   },
//   userName: {
//     fontWeight: "bold",
//     marginBottom: 2,
//   },
//   userRole: {
//     fontSize: 12,
//     color: "gray",
//     marginBottom: 4,
//   },
//   inputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 10,
//     borderTopWidth: 1,
//     borderTopColor: "#CCCCCC",
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     backgroundColor: "#F0F0F0",
//     borderRadius: 20,
//     paddingHorizontal: 10,
//     marginRight: 10,
//   },
//   sendButton: {
//     backgroundColor: "#0084FF",
//     borderRadius: 20,
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//   },
// });

// export default ChatScreen;

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const formatCurrency = (value) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(value);
};
const TransactionComponent = () => {
  const [transaksi, setTransaksi] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          const access_token = await AsyncStorage.getItem("access_token");
          const response = await fetch(`https://we-go.zuru.site/transactions`, {
            headers: {
              access_token: access_token, // Gunakan nilai token yang telah diambil
            },
          });
          const data = await response.json();

          setTransaksi(data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }, [])
  );

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      {/* <Text style={[styles.itemTitle]}>No.{item?.noTransaction}</Text> */}
      <Text style={[styles.itemTitle, styles.itemTitleWithDivider]}>
        No.{item?.noTransaction}
      </Text>
      <View style={styles.itemDetails}>
        <Text style={styles.detailText}>{item?.name}</Text>
        <Text style={styles.detailText}>{formatCurrency(item?.price)}</Text>
      </View>
      <View
        style={[
          styles.statusButton,
          { backgroundColor: item?.status === "pending" ? "gray" : "green" },
        ]}
      >
        <Text style={styles.statusText}>{item?.status}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.wrapper}>
      <Text style={styles.history}>History Transaction</Text>
      {/* <Text>{JSON.stringify(transaksi)}</Text> */}
      <FlatList
        data={transaksi}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.cartList}
      />
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
  statusButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    alignSelf: "flex-start",
    marginTop: 10,
  },
  statusText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  history: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 15,
  },
  cartItem: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    backgroundColor: "white",
    width: 350,
  },
  itemTitle: {
    fontSize: 14.5,
    fontWeight: "bold",
    marginBottom: 8,
    // backgroundColor: "#DFD7BF",
  },

  detailText: {
    fontSize: 16,
    // marginVertical: 5,
  },
  detailKey: {
    fontWeight: "bold",
  },
  cartList: {
    paddingBottom: 20,
  },
  profileBody: {
    padding: 20,
  },
  itemTitleWithDivider: {
    borderBottomWidth: 2,
    borderBottomColor: "#ddd",
    paddingBottom: 8,
    marginBottom: 8,
  },
});

export default TransactionComponent;
