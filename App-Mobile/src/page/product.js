import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Button,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "../component/Header";

const Product = () => {
  const productsData = [
    {
      id: 1,
      name: "ENSEMBLE DE CUISINE ",
      price: "650 €",
      image: require("../assets/image1.jpg"),
    },
    {
      id: 2,
      name: "CHAISE SPARKS",
      price: "150 €",
      image: require("../assets/image2.jpg"),
    },
    {
      id: 3,
      name: "CHAISE SPARKS",
      price: "150 €",
      image: require("../assets/image3.jpg"),
    },
    {
      id: 4,
      name: "TABLE HARTFORD",
      price: "250 €",
      image: require("../assets/image6.jpg"),
    },
    {
      id: 5,
      name: "CHAISE SPARKS",
      price: "150 €",
      image: require("../assets/image3.jpg"),
    },
    {
      id: 6,
      name: "ENSEMBLE DE CUISINE",
      price: "750 €",
      image: require("../assets/image1.jpg"),
    },
    {
      id: 7,
      name: "TABLE DE CUISINE",
      price: "450 €",
      image: require("../assets/image7.jpg"),
    },
  ];

  const handleAddToCart = (productId) => {};

  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <Image source={item.image} style={styles.productImage} />
      <TouchableOpacity
        onPress={() => handleAddToCart(item.id)}
        style={styles.addToCartButton}
      >
        <View style={styles.buttonContent}>
          <MaterialIcons name="add" size={20} color="white" />
        </View>
      </TouchableOpacity>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </View>
  );

  const renderTwoProductItems = ({ item, index }) => {
    if (index % 2 === 0) {
      const nextItem = productsData[index + 1];
      return (
        <View style={styles.twoProductItemsContainer}>
          <View style={styles.twoProductItem}>
            {renderProductItem({ item })}
          </View>
          {nextItem && (
            <View style={styles.twoProductItem}>
              {renderProductItem({ item: nextItem })}
            </View>
          )}
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          source={require("../assets/image4.jpg")}
          style={styles.mainImage}
        />
        <Text style={styles.text}>Découvrez nos meilleurs modèles</Text>
        <Text style={styles.text2}>
          La salle de séjour, aussi appelée salon, est la pièce du logement
          dédiée aux divertissements de la famille et à la réception des
          invités. Il est alors meublé de sièges plutôt confortables, de table
          basse, table, ou éventuellement des instruments de musique volumineux.
        </Text>
        <FlatList
          data={productsData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderTwoProductItems}
          contentContainerStyle={styles.productList}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  mainImage: {
    width: 500,
    height: 200,
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 48,
    top: 24,
    textAlign: "center",
  },
  text2: {
    fontSize: 14,
    marginBottom: 62,
    textAlign: "center",
  },
  productList: {
    alignItems: "center",
  },
  productItem: {
    marginBottom: 16,
    alignItems: "center",
  },
  productImage: {
    width: 200,
    height: 200,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    marginBottom: 8,
  },
  addToCartButton: {
    position: "absolute",
    top: 6,
    right: 12,
    backgroundColor: "black",
    padding: 8,
    borderRadius: 16,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  twoProductItemsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  twoProductItem: {
    flex: 1,
    paddingHorizontal: 8,
  },
});

export default Product;
