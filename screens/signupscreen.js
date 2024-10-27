import React, { useState } from "react";
import { StyleSheet, Text, View, Alert, TextInput, TouchableOpacity, Platform, StatusBar, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import colors from '../Config/colors.js';

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation();

  const isFormValid = () =>
    email.includes("@") && password === confirmPassword && password.length >= 8;

  const handleSignup = async () => {
    if (!isFormValid()) {
      Alert.alert(
        "Try again",
        "Please enter a valid email and matching passwords with at least 8 characters"
      );
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Success", "Account created successfully");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      navigation.navigate("Login");
    } catch (error) {
      Alert.alert("Error", `Error creating user: ${error.message}`);
    }
  };

  const [loaded] = useFonts({
    'InriaSansRegular': require('../assets/fonts/InriaSans-Regular.ttf'),
    'InriaSansBold': require('../assets/fonts/InriaSans-Bold.ttf'),
    'InterRegular': require('../assets/fonts/Inter_18pt-Regular.ttf'),
    'InterBold': require('../assets/fonts/Inter_18pt-Bold.ttf'),
    'PaytoneRegular': require('../assets/fonts/PaytoneOne-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>E-Learning Tool</Text>
                <Image style={styles.logo}
                source={require('../assets/logo.png')} 
                />
            </View>
            <View style={styles.subtitleHeader}>
                <Text numberOfLines={2} style={styles.subtitle}>EMPOWER YOUR ENGLISH!</Text>
            </View>
            <View style={styles.form}>
                <View style={styles.inputContainer}>
                <TextInput
                   style={styles.input}
                   placeholder="Email"
                   value={email}
                   onChangeText={setEmail}
                />
                </View>
                <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                </View>
                <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
                </View>
                <TouchableOpacity style={styles.button} onPress={handleSignup}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                
                <View style={styles.signupContainer}>
                    <Text style={styles.signupText}>
                      Have an account?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.signupLink}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

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
        fontSize: 38,
        color: colors.white,
        top: 50,
        fontFamily: 'PaytoneRegular',
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
        top: 100,
      },
      subtitle: {
        fontFamily: 'PaytoneRegular',
        color: colors.primary,
        width: '50%',
        fontSize: 30,
        textAlign: 'center',
      },
      form: {
        top: 120,
        paddingHorizontal: 20,
      },
    
      button: {
        backgroundColor: colors.primary,
        padding: 10,
        borderRadius: 30,
      },
      buttonText: {
        color: colors.white,
        fontSize: 18,
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
        marginBottom: 15,
      },
      input: {
        flex: 1,
        height: 45,
        paddingHorizontal: 5,
        fontFamily: 'InterBold',
      },
      signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
      },
      signupText: {
        fontSize: 16,
        color: colors.black,
        fontFamily: 'InterRegular',
      },
      signupLink: {
        fontSize: 16,
        color: colors.black,
        textDecorationLine: 'underline',
        fontFamily: 'InterBold',
      },
});

export default SignUpScreen;