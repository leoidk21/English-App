import React from 'react';
import {StyleSheet, Text, View, Image, StatusBar, Platform, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../Config/colors.js';
import { useFonts } from 'expo-font';

function SignUpScreen() {
    const navigation = useNavigation();

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
                    autoCapitalize="none"
                    autoCompleteType="email"
                />
                </View>
                <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    autoCapitalize="none"
                    autoCompleteType="username"
                />
                </View>
                <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    autoCapitalize="none"
                    autoCompleteType="password"
                />
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <View style={styles.signupContainer}>
                <Text style={styles.signupText}>Have an account? </Text>
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