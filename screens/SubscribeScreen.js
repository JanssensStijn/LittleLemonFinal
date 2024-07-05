import {useState} from 'react';
import { View, StyleSheet, Image, Text, Pressable, Alert, TextInput } from 'react-native';
import {validateEmail} from '../utils';

const SubscribeScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={require("../assets/little-lemon-logo-grey.png")}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <View style={styles.message}>
        <Text style={styles.text}>Subscribe to our newsletter for our latest delicious recipes!</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        placeholder="Type your email"
      />
      {validateEmail(email) && 
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => Alert.alert("Thanks for subscribing, stay tuned!")}>
          <Text style={styles.buttonText}>Subscribe</Text>
        </Pressable>
      </View>}
      {!validateEmail(email) && 
      <View style={styles.buttonContainer}>
        <Pressable disabled style={styles.buttonDisabled} onPress={() => {}}>
          <Text style={styles.buttonText}>Subscribe</Text>
        </Pressable>
      </View>}
    </View>
  );
};

export default SubscribeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  imageContainer:{
    justifyContent: "center",
    marginTop: 30,
  },
  image:{
    justifyContent: "center",
    width: 125,
    height: 125,
    resizeMode: "contain",
  },
  message:{
    justifyContent: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  text:{
    padding: 20,
    fontSize: 20,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 25,
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
  buttonDisabled: {
    paddingVertical: 10,
    width:"80%",
    backgroundColor: "#c1c1c1",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
  },
  input: {
    width: '80%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    paddingLeft: 10,
  },
});