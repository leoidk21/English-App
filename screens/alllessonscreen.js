import { useState } from 'react';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, Platform, StatusBar } from 'react-native';
import colors from '../Config/colors.js';
import { useFonts } from 'expo-font';

function AllLearnScreen() {
    const navigation = useNavigation();
    const [sidebarVisible, setSidebarVisible] = useState(false);

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
            <View style={styles.nav}>
                <TouchableOpacity style={styles.navIconContainer} onPress={() => navigation.goBack()}>
                    <Image style={styles.navIcon} source={require('../assets/left-back.png')} />
                </TouchableOpacity>
                <Text style={styles.navTitle}>All Lessons</Text>
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
                        <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Home')}>
                            <Image style={styles.sidebarItemIcon} source={require('../assets/home-navigation.png')} />
                            <Text style={styles.sidebarItemText}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Progress')}>
                            <Image style={styles.sidebarItemIcon} source={require('../assets/progress-navigation.png')} />
                            <Text style={styles.sidebarItemText}>Progress</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Learn')}>
                            <Image style={styles.sidebarItemIcon} source={require('../assets/learn-navigation.png')} />
                            <View style={{flexDirection: 'column'}}>
                                <Text style={styles.sidebarItemTextTitle}>Learn</Text>
                                <Text style={styles.sidebarItemTextDescription}>words and phrases</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('About')}>
                            <Image style={styles.sidebarItemIcon} source={require('../assets/community-navigation.png')} />
                            <View style={{flexDirection: 'column'}}>
                                <Text style={styles.sidebarItemTextTitle}>About Us</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.sidebarItemLogout}>
                            <TouchableOpacity style={styles.sidebarItemLogoutButton} onPress={() => navigation.navigate('Login')}>
                                <Text style={styles.sidebarItemLogoutText}>Logout</Text>
                            </TouchableOpacity>
                        </View> 
                    </View>
                </View>
            )}
            <Text style={styles.heading}>
            ENGLISH LESSONS
            </Text>
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
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '5%', alignSelf: 'center', marginLeft: '2.5%', marginRight: '2.5%', marginTop: '-5%' }}>
                <TouchableOpacity
                    style={[styles.square, { backgroundColor: '#E571A9', borderRadius: 5, width: 140, height: 136, alignItems: 'center', justifyContent: 'center', marginLeft: '2.5%', marginRight: '2.5%'}]}
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

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '5%', alignSelf: 'center', marginLeft: '2.5%', marginRight: '2.5%', marginTop: '-5%' }}>
                <TouchableOpacity
                    style={[styles.square, { backgroundColor: '#0BCE83', borderRadius: 5, width: 140, height: 136, alignItems: 'center', justifyContent: 'center', margin: '2.5%' }]}
                    onPress={() => navigation.navigate('Conjunctions')}
                    >
                    <Image source={require('../assets/conjunctions.png')} style={[styles.squareIcon, { width: 100, height: 100}]} />
                    <Text style={[{ color: '#FFFFFF', textAlign: 'center', position: 'absolute', top: 145, left: 2 }, styles.grammarText]}>Conjunctions</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.square, { backgroundColor: '#E571A9', borderRadius: 5, width: 140, height: 136, alignItems: 'center', justifyContent: 'center', margin: '2.5%' }]}
                    onPress={() => navigation.navigate('Prepositions')}
                    >
                    <Image source={require('../assets/prepositions.png')} style={[styles.squareIcon, { width: 100, height: 100}]} />
                    <Text style={[{ color: '#FFFFFF', textAlign: 'center', position: 'absolute', top: 145, left: 2 }, styles.grammarText]}>Prepositions</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '5%', alignSelf: 'center', marginLeft: '2.5%', marginRight: '2.5%', marginTop: '-5%' }}>
                <TouchableOpacity
                    style={[styles.square, { backgroundColor: '#5856D6', borderRadius: 5, width: 140, height: 136, alignItems: 'center', justifyContent: 'center', margin: '2.5%' }]}
                    onPress={() => navigation.navigate('Punctuations')}
                    >
                    <Image source={require('../assets/punctuations.png')} style={[styles.squareIcon, { width: 100, height: 100}]} />
                    <Text style={[{ color: '#FFFFFF', textAlign: 'center', position: 'absolute', top: 145, left: 2 }, styles.grammarText]}>Punctuations</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.square, { backgroundColor: '#F55E55', borderRadius: 5, width: 140, height: 136, alignItems: 'center', justifyContent: 'center', margin: '2.5%' }]}
                    onPress={() => navigation.navigate('Pronouns')}
                    >
                    <Image source={require('../assets/pronouns.png')} style={[styles.squareIcon, { width: 100, height: 100}]} />
                    <Text style={[{ color: '#FFFFFF', textAlign: 'center', position: 'absolute', top: 145, left: 2 }, styles.grammarText]}>Pronouns</Text>
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
    nav: {
        flexDirection: 'row',
        width: '100%',
        height: '8%',
        alignItems: 'center',

    },
    navIconContainer: {
        width: '10%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
    },
    navIcon: {
        width: 20,
        height: 20,
        color: colors.white,
    },
    navTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white,
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
        fontWeight: 'bold',
        color: colors.primary,
    },
    profileInfoUser: {
        color: colors.white,
        fontSize: 18,
        marginBottom: -6,
    },
    profileInfoEmail: {
        color: colors.gray,
        fontSize: 15,
        textDecorationLine: 'underline',
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
        fontWeight: 'bold',
        color: colors.primary,
        marginLeft: 10,
    },
    sidebarItemTextTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.primary,
        marginLeft: 10,
    },
    sidebarItemTextDescription: {
        fontSize: 15,
        color: colors.primary,
        marginLeft: 10,
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
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.navBarProfile,
    },
    sidebarItemLogoutText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white,
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
        marginLeft: 40,
    },

});

export default AllLearnScreen;