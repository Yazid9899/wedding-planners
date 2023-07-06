import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../features/CartData/DeleteCart";
import { getCartData } from "../features/CartData/GetCart";
import { addTransactionData } from "../features/Transaction/PostTransaction";
import { WebView } from "react-native-webview";
import { changeStatusTransaction } from "../features/Transaction/ChangeStatus";
import { useFocusEffect } from "@react-navigation/native";
const formatCurrency = (value) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(value);
};
import Icon from "react-native-vector-icons/FontAwesome";

const InvoiceWebView = ({ url }) => {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: url }} />
    </View>
  );
};

function formatDate(date) {
  const options = { month: "2-digit", day: "2-digit", year: "numeric" };
  const formattedDate = new Date(date).toLocaleDateString("en-US", options);
  return formattedDate;
}

const CartScreen = () => {
  const cartStateData = useSelector((state) => state.cart.data);
  const transStateData = useSelector((state) => state.transaction.data);
  const dispatch = useDispatch();
  const [selectedInvoiceUrl, setSelectedInvoiceUrl] = useState(null);

  const openInvoiceWebView = (url) => {
    setSelectedInvoiceUrl(url);
  };

  useFocusEffect(() => {
    dispatch(getCartData());
  });

  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const deleteCartItem = (id) => {
    dispatch(deleteCart(id))
      .then(() => {
        console.log(`hapusssss cart dengan id =  ${id}`);
        // Item successfully deleted, you can update the cart data here
        dispatch(getCartData());
        setShowDeleteModal(false);
        // setShowSuccessModal(true);
      })
      .catch((error) => {
        // Handle error
        console.log(error);
        setShowDeleteModal(false);
      });
  };

  const handlePaymentConfirmation = (item) => {
    setShowPaymentModal(false);
    const transactionData = {
      // Menyesuaikan data yang diperlukan untuk transaksi
      CartId: selectedItem.id,
      title: selectedItem.title,
      totalAmount: selectedItem.totalPrice,
      // ...
    };

    console.log(transactionData, "transaction data di modal");

    dispatch(addTransactionData(transactionData))
      .then(() => {
        console.log(transStateData, "ini kah yang dicari???????");
        openInvoiceWebView(transStateData.invoiceUrl);
        setShowSuccessModal(true);
        // Transaksi berhasil, Anda dapat menampilkan modal sukses atau melakukan tindakan lainnya
        dispatch(changeStatusTransaction(transStateData.idTrans));
        setShowSuccessModal(true);
      })
      .catch((error) => {
        // Penanganan kesalahan saat melakukan transaksi
        console.log("gagalll");
        console.log(error);
      });
  };

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text style={[styles.itemTitle]}>{item?.title}</Text>
      <View style={styles.itemDetails}>
        <View style={styles.photosContainer}>
          <Image
            source={{ uri: item?.Venue?.photo?.[0] }}
            style={styles.photo}
          />
          <Image
            source={{ uri: item?.Venue?.photo?.[1] }}
            style={styles.photo}
          />
          <Image
            source={{ uri: item?.Venue?.photo?.[2] }}
            style={styles.photo}
          />
        </View>
        <Text style={styles.detailText}>
          <Text style={styles.detailKey}>Date:</Text>{" "}
          {formatDate(item?.weddingDate)}
        </Text>
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
        <Text style={styles.detailText}>
          <Text style={styles.detailKey}>Contact Person:</Text>{" "}
          {item?.contactNumber}
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.deleteButton, { backgroundColor: "#00bce1" }]}
            onPress={() => {
              setSelectedItem(item);
              setShowPaymentModal(true);
            }}
          >
            <Text style={styles.deleteButtonText}>Bayar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deleteButtonIcon}
            onPress={() => {
              setSelectedItem(item.id);
              setShowDeleteModal(true);
            }}
          >
            <Icon name="trash" size={30} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {selectedInvoiceUrl && (
        <Modal
          visible={showSuccessModal}
          animationType="slide"
          transparent={false}
          onRequestClose={() => setShowSuccessModal(false)}
        >
          <InvoiceWebView url={selectedInvoiceUrl} />
        </Modal>
      )}
      <FlatList
        data={cartStateData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.cartList}
      />
      {/*  */}

      <Modal
        visible={showDeleteModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowDeleteModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
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
                onPress={() => setShowDeleteModal(false)}
              >
                <Text style={styles.modalButtonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {/*  */}
      <Modal
        visible={showPaymentModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowPaymentModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Are you sure to process this order's payment?
            </Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => handlePaymentConfirmation(selectedItem.id)}
              >
                <Text style={styles.modalButtonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setShowPaymentModal(false)}
              >
                <Text style={styles.modalButtonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {/*  */}
      {/* <Modal
        visible={showPaymentModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setShowPaymentModal(false);
        }}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
            Are you sure to process this order's payment?
          </Text>
          <View style={styles.modalButtonContainer}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                handlePaymentConfirmation(selectedItem.id);
                // console.log(selectedItem, "di modal selected");
              }}
            >
              <Text style={styles.modalButtonText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setShowPaymentModal(false)}
            >
              <Text style={styles.modalButtonText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  photosContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 5,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginHorizontal: 5,
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
  deleteButtonIcon: {
    alignItems: "flex-end",
    marginTop: 8,
    marginRight: 20,
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
    marginVertical: 5,
  },
  detailKey: {
    fontWeight: "bold",
  },
  deleteButton: {
    marginTop: 8,
    paddingVertical: 6,
    borderRadius: 8,
    alignSelf: "flex-start",
    width: 250,
  },
  deleteButtonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
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
  //
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  //   new Modal
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
    width: "80%",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  modalButton: {
    backgroundColor: "#00bce1",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  modalButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CartScreen;

{
  /* <Modal
        visible={showDeleteModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowDeleteModal(false)}
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
              onPress={() => setShowDeleteModal(false)}
            >
              <Text style={styles.modalButtonText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal> */
}
