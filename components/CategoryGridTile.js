import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
  Image,
} from "react-native";

const CategoryGridTile = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableCmp style={{ flex: 1 }} onPress={props.onSelect}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
          <Image source={{ uri: props.icon }} style={styles.bgImage} />

          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
    elevation: 5,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    overflow: "hidden",
    padding: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    color: "white",
    fontSize: 18,
    textAlign: "right",
  },
  bgImage: {
    width: "75%",
    height: "75%",
    borderRadius: 120,
    borderColor: "white",
    borderWidth: 2,
    marginRight: 15,
  },
});

export default CategoryGridTile;
