import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, Platform, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../Config/colors.js';
import { useFonts } from 'expo-font';
  
function HomeScreen() {
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
        <View style={styles.container}>
            <View style={styles.navbarContainer}>
                <View style={styles.nav}>
                    <Text style={styles.navbarTitle}>Hello, User!</Text>
                    <View style={styles.profileIcon}>
                        <Text style={{color: colors.white, fontSize: 30, fontWeight: 'bold'}}>U</Text>
                    </View>
                </View>
            </View>
            <View style={styles.backgroundIconContainer}>
                    <Image style={styles.backgroundIcon} source={require('../assets/Icon-HomeScreen.png')} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textHeader}>Ready to Learn?</Text>
                <Text style={styles.textSmall}>Let's learn English!</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.buttonWatch}
                    onPress={() => navigation.navigate('Watch')}
                >
                    <View style={styles.buttonIconContainer}>
                        <Image
                            style={styles.buttonIcon}
                            source={require('../assets/watch-navigation.png')}
                        />
                    </View>
                    <View style={styles.buttonTextContainer}>
                        <Text style={styles.buttonTextTitle}>Watch</Text>
                        <Text style={styles.buttonTextDescription}>native speaker video</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.buttonLearn}
                    onPress={() => navigation.navigate('Learn')}
                >
                    <View style={styles.buttonIconContainer}>
                        <Image
                            style={styles.buttonIcon}
                            source={require('../assets/learn-navigation.png')}
                        />
                    </View>
                    <View style={styles.buttonTextContainer}>
                        <Text style={styles.buttonTextTitle}>Learn</Text>
                        <Text style={styles.buttonTextDescription}>native speaker video</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.navigationBarBottom}>
                <TouchableOpacity
                    style={styles.buttonNavigation}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Image
                        style={styles.navigationIcon}
                        source={require('../assets/home-navigation.png')}
                        
                    />
                    <Text style={styles.navigationText}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonNavigation}
                    onPress={() => navigation.navigate('Progress')}
                >
                    <Image
                        style={styles.navigationIcon}
                        source={require('../assets/progress-navigation.png')}
                        
                    />
                    <Text style={styles.navigationText}>Progress</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonNavigation}
                    onPress={() => navigation.navigate('About')}
                >
                    <Image
                        style={styles.navigationIcon}
                        source={require('../assets/community-navigation.png')}
                        
                    />
                    <Text style={styles.navigationText}>About Us</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    navbarContainer: {
        alignItems: 'center',
        marginTop: 10,
        width: '100%',
        marginBottom: 37,
    },
    nav: {
        marginTop: 10,
        width: '90%',
        height: 50,
        backgroundColor: colors.white,
        borderTopStartRadius: 35,
        borderTopEndRadius: 18,  
        borderBottomStartRadius: 18,
        borderBottomEndRadius: 35,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    navbarTitle: {
        fontSize: 30,
        color: colors.black,
        paddingLeft: 20,
        fontFamily: 'InriaSansBold',
    },
    profileIcon: {
        width: '12%',
        height: '80%', 
        backgroundColor: colors.primary, 
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },
    backgroundIconContainer: {
        width: '100%',
        height: 180,
        alignItems: 'center',
        justifyContent: 'center', 
    },
    backgroundIcon: {
        width: '45%',
        height: '100%',
    },
    textContainer: {
        width: '100%',
        height: 140,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHeader: {
        fontSize: 35,
        color: colors.white,
        fontFamily: 'PaytoneRegular',
    },
    textSmall: {
        fontSize: 20,
        color: colors.white,
        fontFamily: 'InriaSansRegular',
    },
    buttonContainer: {
        width: '100%',
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonWatch: {
        width: '80%',
        height: '100%',
        backgroundColor: colors.watchbackground,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttonLearn: {
        width: '80%',
        height: '100%',
        backgroundColor: colors.learnbackground,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttonIconContainer: {
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 25,
    },
    buttonIcon: {
        width: '100%',
        height: '100%',
    },
    buttonTextContainer: {
        width: '70%',
        height: '80%',
        justifyContent: 'center',
        marginLeft: 20,
    },  
    buttonTextTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.white,
        fontFamily: 'InriaSansBold',
    },
    buttonTextDescription: {        
        fontSize: 20,        
        color: colors.white,
        fontFamily: 'InriaSansBold',
    },
    navigationBarBottom: {    
        width: '100%',
        height: 55,
        backgroundColor: colors.white,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
    buttonNavigation: {
        width: 80,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    navigationIcon: {
        width: 30,
        height: 30,
    },
    navigationText: {
        color: colors.black,
        fontSize: 15,
        fontFamily: 'InterBold',
    },

});


export default HomeScreen;