// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   ScrollView,
//   TouchableOpacity,
//   Modal,
// } from "react-native";
// import axios from "axios";
// import { getCartData } from "../features/CartData/GetCart";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteCart } from "../features/CartData/DeleteCart";
// const formatCurrency = (value) => {
//   return new Intl.NumberFormat("id-ID", {
//     style: "currency",
//     currency: "IDR",
//   }).format(value);
// };

// const CartScreen = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getCartData());
//   }, [cartStateData]);
//   const cartStateData = useSelector((state) => state.cart.data);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);

//   const deleteCartItem = (id) => {
//     dispatch(deleteCart(id))
//       .then(() => {
//         // Item successfully deleted, you can update the cart data here
//         dispatch(getCartData());
//         setShowModal(false);
//         setShowSuccessModal(true);
//       })
//       .catch((error) => {
//         // Handle error
//         console.log(error);
//         setShowModal(false);
//       });
//   };

//   const grandTotal = cartStateData.reduce(
//     (total, item) => total + item.totalPrice,
//     0
//   );

//   const renderItem = ({ item }) => (
//     <View style={styles.cartItem}>
//       <Text style={styles.itemTitle}>{item?.title}</Text>
//       <View style={styles.itemDetails}>
//         <Text style={styles.detailText}>Venue: {item?.Venue?.name}</Text>
//         <Text style={styles.detailText}>
//           Photography: {item?.Photography?.name}
//         </Text>
//         <Text style={styles.detailText}>Catering: {item?.Cathering?.name}</Text>
//         <Text style={styles.detailText}>Total Pax: {item?.pax}</Text>
//         <Text style={styles.detailText}>
//           Total Price: {formatCurrency(item?.totalPrice)}
//         </Text>
//         <TouchableOpacity
//           style={styles.deleteButton}
//           onPress={() => {
//             setSelectedItem(item.id);
//             setShowModal(true);
//           }}
//         >
//           <Text style={styles.deleteButtonText}>Delete</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Cart Screen</Text>
//       <Modal
//         visible={showSuccessModal}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={() => setShowSuccessModal(false)}
//       >
//         <View style={styles.modalContainer}>
//           <Text style={styles.modalText}>
//             Order has been deleted successfully
//           </Text>
//           <TouchableOpacity
//             style={styles.modalButton}
//             onPress={() => setShowSuccessModal(false)}
//           >
//             <Text style={styles.modalButtonText}>OK</Text>
//           </TouchableOpacity>
//         </View>
//       </Modal>
//       <FlatList
//         data={cartStateData}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id.toString()}
//         contentContainerStyle={styles.cartList}
//       />
//       <View style={styles.grandTotalContainer}>
//         <Text style={styles.grandTotalText}>Grand Total</Text>
//         <Text style={styles.grandTotalPrice}>{formatCurrency(grandTotal)}</Text>
//       </View>
//       <View style={styles.payButtonContainer}>
//         <Text style={styles.payButtonText}>Bayar</Text>
//       </View>
//       <Modal
//         visible={showModal}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={() => setShowModal(false)}
//       >
//         <View style={styles.modalContainer}>
//           <Text style={styles.modalText}>Delete this order from cart?</Text>
//           <View style={styles.modalButtonContainer}>
//             <TouchableOpacity
//               style={styles.modalButton}
//               onPress={() => deleteCartItem(selectedItem)}
//             >
//               <Text style={styles.modalButtonText}>Yes</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.modalButton}
//               onPress={() => setShowModal(false)}
//             >
//               <Text style={styles.modalButtonText}>No</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//     // </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     paddingHorizontal: 20,
//     paddingTop: 40,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   cartList: {
//     paddingBottom: 20,
//   },
//   cartItem: {
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 8,
//     padding: 16,
//     marginBottom: 16,
//   },
//   itemTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 8,
//   },
//   itemDetails: {
//     marginLeft: 16,
//   },
//   detailText: {
//     fontSize: 16,
//     marginBottom: 4,
//   },
//   deleteButton: {
//     marginTop: 8,
//     backgroundColor: "red",
//     paddingVertical: 6,
//     paddingHorizontal: 12,
//     borderRadius: 8,
//     alignSelf: "flex-end",
//   },
//   deleteButtonText: {
//     color: "white",
//     fontSize: 14,
//     fontWeight: "bold",
//   },
//   grandTotalContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 16,
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderTopWidth: 1,
//     borderTopColor: "#ddd",
//   },
//   grandTotalText: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   grandTotalPrice: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "green",
//   },
//   payButtonContainer: {
//     marginTop: 16,
//     backgroundColor: "blue",
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     borderRadius: 8,
//     alignSelf: "center",
//   },
//   payButtonText: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//   },
//   modalText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 16,
//     color: "white",
//   },
//   modalButtonContainer: {
//     flexDirection: "row",
//   },
//   modalButton: {
//     backgroundColor: "red",
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 8,
//     marginRight: 8,
//   },
//   modalButtonText: {
//     color: "white",
//     fontSize: 14,
//     fontWeight: "bold",
//   },
// });

// export default CartScreen;

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../features/CartData/DeleteCart";
import { getCartData } from "../features/CartData/GetCart";
// import { postTransaction } from "../features/Transaction/PostTransaction";

const formatCurrency = (value) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(value);
};

const CartScreen = () => {
  const cartStateData = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartData());
  }, []);

  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const deleteCartItem = (id) => {
    dispatch(deleteCart(id))
      .then(() => {
        // Item successfully deleted, you can update the cart data here
        dispatch(getCartData());
        setShowModal(false);
        setShowSuccessModal(true);
      })
      .catch((error) => {
        // Handle error
        console.log(error);
        setShowModal(false);
      });
  };

  const postTransactionItem = (item) => {
    dispatch(postTransaction(item))
      .then(() => {
        // Transaction posted successfully, handle success here
        console.log("Transaction posted successfully");
      })
      .catch((error) => {
        // Handle error
        console.log(error);
      });
  };

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text style={[styles.itemTitle]}>{item?.title}</Text>
      <View style={styles.itemDetails}>
        <Text style={styles.detailText}>
          <Text style={styles.detailKey}>Venue:</Text> {item?.Venue?.name}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.detailKey}>Photography:</Text>{" "}
          {item?.Photography?.name}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.detailKey}>Catering:</Text>{" "}
          {item?.Cathering?.name}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.detailKey}>Total Pax:</Text> {item?.pax}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.detailKey}>Total Price:</Text>{" "}
          {formatCurrency(item?.totalPrice)}
        </Text>
        <TouchableOpacity
          style={[styles.deleteButton, { backgroundColor: "red" }]}
          onPress={() => {
            setSelectedItem(item.id);
            setShowModal(true);
          }}
        >
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.deleteButton, { backgroundColor: "#00bce1" }]}
          onPress={() => postTransactionItem(item)}
        >
          <Text style={styles.deleteButtonText}>Bayar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart Screen</Text>
      <Modal
        visible={showSuccessModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowSuccessModal(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
            Order has been deleted successfully
          </Text>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => setShowSuccessModal(false)}
          >
            <Text style={styles.modalButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <FlatList
        data={cartStateData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.cartList}
      />
      <Modal
        visible={showModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Delete this order from cart?</Text>
          <View style={styles.modalButtonContainer}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => deleteCartItem(selectedItem)}
            >
              <Text style={styles.modalButtonText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setShowModal(false)}
            >
              <Text style={styles.modalButtonText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  cartList: {
    paddingBottom: 20,
  },
  cartItem: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    backgroundColor: "white",
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    // backgroundColor: "#DFD7BF",
  },
  itemDetails: {
    marginLeft: 16,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 4,
  },
  detailKey: {
    fontWeight: "bold",
  },
  deleteButton: {
    marginTop: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: "flex-end",
  },
  deleteButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    color: "white",
  },
  modalButtonContainer: {
    flexDirection: "row",
  },
  modalButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginRight: 8,
  },
  modalButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default CartScreen;
