import { useState } from 'react';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, Platform, StatusBar } from 'react-native';
import colors from '../Config/colors.js';
import { useFonts } from 'expo-font';


function LearnScreen() {
    const navigation = useNavigation();
    const [sidebarVisible, setSidebarVisible] = useState(false);
    
    const sideBarClose = () => {
        setSidebarVisible(false);
    }

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
                    <TouchableOpacity style={styles.navbarIconContainer}
                        onPress={() => setSidebarVisible(true)}
                    >
                        <Image style={styles.navbarIcon} source={require('../assets/menu-bar.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.navbarTitle}>LEARN</Text>
                </View>
             </View>
            {sidebarVisible && (
                <View style={styles.sidebar}>
                    <View style={styles.sideBarProfileContainer}>
                        <View style={styles.profileIcon}>
                            <Text style={styles.profileIconText}>U</Text>
                        </View>
                        <View>
                            <Text style={styles.profileInfoUser}>USER</Text>
                            <Text style={styles.profileInfoEmail}>user@gmail.com</Text>
                        </View>
                        <View style={styles.sidebarArrowBackContainer}>
                            <TouchableOpacity style={styles.sidebarArrowBack} onPress={() => setSidebarVisible(false)} >
                                <Image style={styles.sidebarArrowBackIcon} source={require('../assets/arrow-left.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.sidebarItemsContainer}>
                        <TouchableOpacity style={styles.sidebarItem} onPress={() => {sideBarClose(); navigation.navigate('Home')}}>
                            <Image style={styles.sidebarItemIcon} source={require('../assets/home-navigation.png')} />
                            <Text style={styles.sidebarItemText}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sidebarItem} onPress={() => {sideBarClose(); navigation.navigate('Progress')}}>
                            <Image style={styles.sidebarItemIcon} source={require('../assets/progress-navigation.png')} />
                            <Text style={styles.sidebarItemText}>Progress</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sidebarItem} onPress={() => {sideBarClose(); navigation.navigate('Watch'); }}>
                            <Image style={styles.sidebarItemIcon} source={require('../assets/watch-navigation.png')} />
                            <View style={{flexDirection: 'column'}}>
                                <Text style={styles.sidebarItemText}>Watch</Text>
                                <Text style={styles.sidebarItemTextDescription}>native speaker video</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sidebarItem} onPress={() => {sideBarClose(); navigation.navigate('About')}}>
                            <Image style={styles.sidebarItemIcon} source={require('../assets/community-navigation.png')} />
                            <View style={{flexDirection: 'column'}}>
                                <Text style={styles.sidebarItemText}>About Us</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.sidebarItemLogout}>
                            <TouchableOpacity style={styles.sidebarItemLogoutButton} onPress={() => {sideBarClose(); navigation.navigate('Login')}}>
                                <Text style={styles.sidebarItemLogoutText}>LOGOUT</Text>
                            </TouchableOpacity>
                        </View> 
                    </View>
                </View>
            )}
            <Image source={require('../assets/lesson.png')} style={styles.watch} />
            <Text style={styles.heading}>
            ENGLISH LESSONS
            </Text>

            {/* GRAMMAR BASICS AND VOCABULARY --- GRAMMAR BASICS AND VOCABULARY */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '5%', alignSelf: 'center', marginLeft: '2.5%', marginRight: '2.5%', marginTop: '-5%' }}>
            <TouchableOpacity
                style={[styles.square, { backgroundColor: '#0BCE83', borderRadius: 5, width: 140, height: 136, alignItems: 'center', justifyContent: 'center', margin: '2.5%' }]}
                onPress={() => navigation.navigate('Grammar')}
                >
                <Image source={require('../assets/grammar.png')} style={[styles.squareIcon, { width: 100, height: 100}]} />
                <Text style={[{ color: '#FFFFFF', textAlign: 'center', position: 'absolute', top: 145, left: 2 }, styles.grammarText]}>Grammar Basics</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.square, { backgroundColor: '#5856D6', borderRadius: 5, width: 140, height: 136, alignItems: 'center', justifyContent: 'center', margin: '2.5%' }]}
                onPress={() => navigation.navigate('Vocabulary')}
                >
                <Image source={require('../assets/vocabulary.png')} style={[styles.squareIcon, { width: 100, height: 100}]} />
                <Text style={[{ color: '#FFFFFF', textAlign: 'center', position: 'absolute', top: 145, left: 2 }, styles.grammarText]}>Vocabulary</Text>
            </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '5%', alignSelf: 'center', marginLeft: '2.5%', marginRight: '2.5%', marginTop: '-2.5%' }}>
            <TouchableOpacity
                style={[styles.square, { backgroundColor: '#E571A9', borderRadius: 5, width: 140, height: 136, alignItems: 'center', justifyContent: 'center', margin: '2.5%' }]}
                onPress={() => navigation.navigate('Listening')}
                >
                <Image source={require('../assets/speaking.png')} style={[styles.squareIcon, { width: 100, height: 100}]} />
                <Text style={[{ color: '#FFFFFF', textAlign: 'center', position: 'absolute', top: 145, left: 2 }, styles.grammarText]}>Listening</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.square, { backgroundColor: '#F55E55', borderRadius: 5, width: 140, height: 136, alignItems: 'center', justifyContent: 'center', margin: '2.5%' }]}
                onPress={() => navigation.navigate('Writing')}
                >
                <Image source={require('../assets/writing.png')} style={[styles.squareIcon, { width: 100, height: 100}]} />
                <Text style={[{ color: '#FFFFFF', textAlign: 'center', position: 'absolute', top: 145, left: 2 }, styles.grammarText]}>Writing</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity
            style={{ backgroundColor: '#0BCE83', borderRadius: 40, padding: '3%', width: '80%', alignSelf: 'center', marginTop: '5%', marginBottom: '5%' }}
            onPress={() => navigation.navigate('AllLesson')}>
            <Text style={{ fontSize: 18, color: '#FFFFFF', textAlign: 'center' }}>SHOW ALL LESSON</Text>
            </TouchableOpacity>
            {/* SHOW ALL LESSONS BUTTON --- SHOW ALL LESSONS BUTTON --- SHOW ALL LESSONS BUTTON */}
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
        marginTop:10,
        width: '100%',
        marginBottom: 37,
    },
    nav: {
        width: '90%',
        height: 70,
        backgroundColor: colors.white,
        borderTopStartRadius: 35,
        borderTopEndRadius: 18,  
        borderBottomStartRadius: 18,
        borderBottomEndRadius: 35,
        alignItems: 'center',
        flexDirection: 'row',
    },
    navbarTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.primary,
        paddingLeft: 10,
    },
    navbarIconContainer: {
        marginLeft: 15,
    },
    navbarIcon: {
        width: 50,
        height: 50,
    },
    sidebar: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: colors.navBarProfile,
        zIndex: 1,
        bottom: 0,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    sideBarProfileContainer: {
        backgroundColor: colors.navBarProfile,
        width: '100%',
        height: 130,
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileIcon: {
        width: 80,
        height: 80,
        backgroundColor: colors.white,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 20,
    },
    profileIconText: {
        fontSize: 50,
        color: colors.primary,
        fontFamily: 'PaytoneRegular',
    },
    profileInfoUser: {
        color: colors.white,
        fontSize: 18,
        marginBottom: -6,
        fontFamily: 'PaytoneRegular',
    },
    profileInfoEmail: {
        color: colors.gray,
        fontSize: 15,
        textDecorationLine: 'underline',
        fontFamily: 'PaytoneRegular',
    },
    sidebarArrowBackContainer: {
        width:'42%',
        height: 50,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    sidebarArrowBack: {
        width: 50,
        height: 50,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    sidebarArrowBackIcon: {
        width: 20,
        height: 20,
    },
    sidebarItemsContainer: {
        width: '100%',
        height : '85%',
        backgroundColor: colors.white,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    sidebarItem: {
        fontSize: 18,
        width: '90%',
        height: 70,
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGray,
        alignItems: 'center',
        flexDirection: 'row',
    },
    sidebarItemIcon: {
        width: 45,
        height: 45,
    },
    sidebarItemText: {
        fontSize: 20,
        color: colors.primary,
        marginLeft: 10,
        fontFamily: 'PaytoneRegular',
    },
    sidebarItemTextDescription: {
        fontSize: 15,
        color: colors.primary,
        marginLeft: 10,
        fontFamily: 'InriaSansBold',
    },
    sidebarItemLogout: {    
        width: '100%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 280,
    },
    sidebarItemLogoutButton: {
        borderRadius: 20,
        width: '80%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.navBarProfile,
    },
    sidebarItemLogoutText: {
        fontSize: 25,
        color: colors.white,
        fontFamily: 'PaytoneRegular',
    },
    watch: {
        backgroundColor: '#FFFFFF',
        width: '80%',
        height: 150,
        borderRadius: 5,
        alignSelf: 'center',
    },
    heading: {
        fontSize: 22,
        color: '#FFFFFF',
        marginTop: 37,
        marginLeft: 40,
    },

});

export default LearnScreen;