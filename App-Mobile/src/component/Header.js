import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Header = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleToggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleAddToCart = (itemId) => {
    const item = produits.find((product) => product.id === itemId);
    if (item) {
      setCartItems([...cartItems, item]);
    }
  };

  const renderSidebar = () => {
    if (sidebarVisible) {
      return (
        <View style={styles.sidebarContainer}>
          {/* Contenu de votre sidebar */}
          <TouchableOpacity
            onPress={handleToggleSidebar}
            style={styles.closeButton}
          >
            <Icon name="times" size={24} style={styles.icon} />
          </TouchableOpacity>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="user" size={24} style={styles.icon} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Λｉｒｎｅｉｓ</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handleToggleSidebar}>
          <Icon name="shopping-cart" size={24} style={styles.icon} />
        </TouchableOpacity>
        <Icon name="search" size={24} style={styles.icon} />
      </View>
      {renderSidebar()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 90,
    top: 18,
    paddingHorizontal: 16,
    zIndex: 20,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 48,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  icon: {
    marginLeft: 12,
  },
  sidebarContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: 1000,
    width: Dimensions.get("window").width,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
    zIndex: 100,
  },
  closeButton: {
    position: "absolute",
    top: 24,
    right: 46,
  },
});

export default Header;
