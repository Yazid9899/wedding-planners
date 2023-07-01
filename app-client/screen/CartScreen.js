import React from "react";
import {View, Text, FlatList, StyleSheet} from "react-native";
import {IconButton} from "react-native-paper";
import {Ionicons} from "@expo/vector-icons";

export default function CartScreen() {
  const cartItems = [
    {id: 1, name: "Item 1", pax: 20, price: 10},
    {id: 2, name: "Item 2", pax: 2, price: 20},
    {id: 3, name: "Item 3", pax: 9, price: 30},
  ];

  const renderCartItem = ({item}) => {
    return (
      <View style={styles.card}>
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text style={styles.cardPrice}>{item.price}</Text>
        </View>
        <View style={styles.cardFooter}>
          <IconButton
            icon={() => <Ionicons name="trash-outline" size={24} />}
            onPress={() => handleRemoveItem(item.id)}
            color="#888"
          />
        </View>
      </View>
    );
  };

  const handleRemoveItem = (itemId) => {
    // Implement logic to remove item from the cart
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.pax,
    0
  );

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);
  };

  const handleCheckout = () => {
    // Implement logic for checkout
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCartItem}
        contentContainerStyle={styles.cartList}
      />
      <View style={styles.checkoutContainer}>
        {cartItems.map((item) => (
          <View style={styles.cartItemContainer} key={item.id}>
            <Text style={styles.cartItemText}>{item.name}</Text>
            <Text style={styles.cartItemText}>{item.pax}x</Text>
            <Text style={styles.cartItemText}>
              Total Price: {formatCurrency(item.price * item.pax)}
            </Text>
          </View>
        ))}
        <View style={styles.totalPriceContainer}>
          <Text style={styles.totalPrice}>
            Total Price: {formatCurrency(totalPrice)}
          </Text>
          <Text style={styles.buyButton} onPress={handleCheckout}>
            Buy
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  cartList: {
    paddingBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardPrice: {
    fontSize: 14,
    color: "#888",
  },
  cardFooter: {
    marginTop: 8,
  },
  checkoutContainer: {
    backgroundColor: "#00bce1",
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  cartItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  cartItemText: {
    fontSize: 16,
    color: "#fff",
  },
  totalPriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  buyButton: {
    backgroundColor: "#888",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
