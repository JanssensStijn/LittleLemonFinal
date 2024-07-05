import * as React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const WelcomeScreen = ({ navigation }) => {
  
  const navigateToSubscribe = () => {
    navigation.navigate("Subscribe");
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={require("../assets/little-lemon-logo.png")}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <View style={styles.message}>
        <Text style={styles.text}>Little Lemon, your local Mediterranean Bistro</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => navigateToSubscribe()}>
          <Text style={styles.buttonText}>Newsletter</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  imageContainer:{
    justifyContent: "center",
    marginTop: 150,
  },
  image:{
    justifyContent: "center",
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  message:{
    justifyContent: "center",
    paddingHorizontal: 50,
    marginTop: 25,
  },
  text:{
    padding: 20,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 225,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  button: {
    paddingVertical: 10,
    width:"80%",
    backgroundColor: "#3e524b",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
  }
});
