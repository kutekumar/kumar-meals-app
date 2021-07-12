import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

const AboutScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Image
        style={styles.img}
        source={{
          uri: "https://lh5.googleusercontent.com/-B7jWmSMtpVg/AAAAAAAAAAI/AAAAAAAAAKw/7rVnJdI6AIM/photo.jpg",
        }}
      />
      <Text style={styles.title}>Kumar Koirala</Text>
      <Text>kutekumar@gmail.com</Text>
    </View>
  );
};

AboutScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "About Me",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
  },
});

export default AboutScreen;
