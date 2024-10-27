import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, TouchableOpacity, Alert, Platform, StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../Config/colors.js';
import { useFonts } from 'expo-font';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Correctly destructure the return values from useFonts
  const [loaded, error] = useFonts({
    'InriaSansRegular': require('../assets/fonts/InriaSans-Regular.ttf'),
    'InriaSansBold': require('../assets/fonts/InriaSans-Bold.ttf'),
    'InterRegular': require('../assets/fonts/Inter_18pt-Regular.ttf'),
    'InterBold': require('../assets/fonts/Inter_18pt-Bold.ttf'),
    'PaytoneRegular': require('../assets/fonts/PaytoneOne-Regular.ttf'),
  });

  useEffect(() => {
    if (error) {
      console.error("Error loading fonts:", error);
    }
  }, [error]);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User logged in successfully:", user);
        navigation.navigate("Home");
      })
      .catch((error) => {
        Alert.alert("Error", "Invalid credentials");
      });
  };

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>E-LEARNING TOOL</Text>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
      </View>
      <View style={styles.subtitleHeader}>
        <Text numberOfLines={2} style={styles.subtitle}>EMPOWER YOUR ENGLISH!</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <View style={styles.inputIconContainer}>
            <Image source={require('../assets/user-icon.png')} style={styles.inputIcon} />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Username"
            autoCapitalize="none"
            autoCompleteType="username"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputIconContainer}>
            <Image source={require('../assets/lock-icon.png')} style={styles.inputIcon} />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            autoCapitalize="none"
            autoCompleteType="password"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}>
            <Text style={styles.signupLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      },
      header: {
        height: 280,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderBottomEndRadius: 80,
        borderBottomStartRadius: 80
      },
      title: {
        width: '100%',
        textAlign: 'center',
        fontFamily: 'PaytoneRegular',
        fontSize: 36,
        color: colors.white,
        top: 50,
      },
      logo: {
        width: 194,
        height: 204,
        resizeMode: 'contain',
        marginBottom: 20,
        top: 105,
      },
      subtitleHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 90,
        top: 100,
      },
      subtitle: {
        color: colors.primary,
        width: '60%',
        height: '100%',
        fontSize: 35,
        textAlign: 'center',
        fontFamily: 'PaytoneRegular',
      },
      form: {
        top: 150,
        paddingHorizontal: 20,
      },
    
      button: {
        backgroundColor: colors.primary,
        padding: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
      },
      buttonText: {
        color: colors.white,
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'InterBold',
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 20,
        marginBottom: 20,
      },
      inputIconContainer: {
        paddingRight: 10,
      },
      inputIcon: {
        width: 20,
        height: 20,
      },
      input: {
        flex: 1,
        height: 50,
        paddingHorizontal: 10,
        fontFamily: 'InterBold',
        fontSize: 16,
      },
      signupContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        fontFamily: 'InterBold',
      },
      signupText: {
        fontSize: 16,
        color: colors.black,
      },
      signupLink: {
        fontSize: 16,
        color: colors.black,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontFamily: 'InterBold',
      },
});


export default LoginScreen;