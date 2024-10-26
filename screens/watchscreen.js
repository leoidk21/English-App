import React, { useState, useCallback, useEffect, useRef  } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, Platform, StatusBar } from 'react-native';
import colors from '../Config/colors.js';
import { useFonts } from 'expo-font';


function WatchScreen() {
    const route = useRoute();
    const navigation = useNavigation();
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const video1 = React.useRef(null);
    
    const sideBarClose = () => {
        setSidebarVisible(false);
    }

    const imagePaths = [
        require('../assets/image1.jpg'),
        require('../assets/image2.jpg'),
        require('../assets/image3.jpg'),
        require('../assets/image4.jpg'),
        require('../assets/image5.jpg'),
        require('../assets/image6.jpg'),
        require('../assets/image7.jpg'),
        require('../assets/image8.jpg'),
        require('../assets/image9.jpg'),
        require('../assets/image10.jpg'),
        require('../assets/image11.jpg'),
        require('../assets/image12.jpg'),
        require('../assets/image13.jpg'),
        require('../assets/image14.jpg'),
        require('../assets/image15.jpg'),
        require('../assets/image16.jpg'),
        require('../assets/image17.jpg'),
        require('../assets/image18.jpg'),
      ];
    const videoTitles = [
        "Speak English Like a Native Speaker in 20 Minutes",
        "How To Speak English Like A Native Speaker",
        "THINK and SPEAK in English",
        "English for Beginner Level: Speak Real English",
        "Learn ENGLISH with Podcasts | Advanced Vocabulary",
        "Simple English Conversation",
        "ALL English Tenses in 20 Minutes - Basic English Grammar",
        "How to Improve English Grammar - Tips to Learn English Grammar Faster",
        "How to improve your English writing skills? - Free English lesson",
        "Unlock English Writing Fast: A 50 Minutes Crash Course [Writing]",
        "Speak English Like a Native! 20 Ways Native English is Different | Go Natural English",
        "Spoken English for Beginners | How to Speak in English Fluently?",
        "Speak With Me: 2 Hour English Speaking Practice",
        "Don't be Shy! 10 Ways to Start a Conversation with Anyone | Go Natural English ",
        "English Speaking Practice | 65 Sentences | Awal",
        "Everyday English Conversation Practice | 30 Minutes English Listening",
        "How to React When Native Speakers Answer You in English",
        "200 Action Verbs In English With Sentences | Action Verbs For Beginners | Daily Sentences",

    ]
    //   const videoUrls = [
    //     require('../assets/videos/video1.mp4'),
    //     require('../assets/videos/video2.mp4'),
    //     require('../assets/videos/video3.mp4'),
    //     require('../assets/videos/video4.mp4'),
    //     require('../assets/videos/video5.mp4'),
    //     require('../assets/videos/video6.mp4'),
    //     require('../assets/videos/video7.mp4'),
    //     require('../assets/videos/video8.mp4'),
    //     require('../assets/videos/video9.mp4'),
    //     require('../assets/videos/video10.mp4'),
    //     require('../assets/videos/video11.mp4'),
    //     require('../assets/videos/video12.mp4'),
    //     require('../assets/videos/video13.mp4'),
    //     require('../assets/videos/video14.mp4'),
    //     require('../assets/videos/video15.mp4'),
    //     require('../assets/videos/video16.mp4'),
    //     require('../assets/videos/video17.mp4'),
    //     require('../assets/videos/video18.mp4'),
    //   ]

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
                <Text style={styles.navbarTitle}>WATCH</Text>
            </View>
        </View>
        {sidebarVisible && (
            <View style={styles.sidebar}>
                <View style={styles.sideBarProfileContainer}>
                    <View style={styles.profileIcon}>
                        <Text style={styles.profileIconText}>U</Text>
                    </View>
                    <View>
                        <Text style={styles.profileInfoUser}>user</Text>
                        <Text style={styles.profileInfoEmail}>username@gmail.com</Text>
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
                    <TouchableOpacity style={styles.sidebarItem} onPress={() => {sideBarClose(); navigation.navigate('Learn'); }}>
                        <Image style={styles.sidebarItemIcon} source={require('../assets/learn-navigation.png')} />
                        <View style={{flexDirection: 'column'}}>
                            <Text style={styles.sidebarItemText}>Learn</Text>
                            <Text style={styles.sidebarItemTextDescription}>words and phrases</Text>
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

        <ScrollView style={[styles.scrollView, {marginBottom: 'auto'}]}>
            <View style={styles.watch} >
                <Image style={styles.watchImage} source={require('../assets/image0.png')} />
            </View>
            <Text style={styles.heading}>Recommended videos</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' , width: '100%', height: 'auto' }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
               <TouchableOpacity style={{ width: '40%', justifyContent: 'center',backgroundColor: colors.white,  alignItems: 'center', height: 75, borderRadius: 5, marginVertical: 5, marginHorizontal: 5 }} 
                    key={index} 
                    onPress={() => {
                    navigation.navigate('VideoPlayer', { videoUrl: videoUrls[index - 1], videoTitle: videoTitles[index - 1], selectedImageIndex: index });
                }}>
                    <Image
                    ref={video1}
                    source={imagePaths[index - 1]}
                    style={{ width: '100%', height: 75, borderRadius: 5, backgroundColor: colors.white }}
                    />
                </TouchableOpacity>
            ))}
            </View>

            <Text style={[styles.loadMore, { alignSelf: 'flex-end' }]}> see more </Text>
            <Text style={styles.heading}>Most watched videos</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' , width: '100%', height: 'auto'   }}>
            {[11, 12, 13, 14, 15, 16, 17, 18].map((index) => (
                <TouchableOpacity style={{ width: '40%', justifyContent: 'center',backgroundColor: colors.white,  alignItems: 'center', height: 75, borderRadius: 5, marginVertical: 5, marginHorizontal: 5 }} 
                    key={index} 
                    onPress={() => {
                    navigation.navigate('VideoPlayer', { videoUrl: videoUrls[index - 1], videoTitle: videoTitles[index - 1], selectedImageIndex: index });
                }}>
                    <Image
                    ref={video1}
                    source={imagePaths[index - 1]}
                    style={{ width: '100%', height: '100%', borderRadius: 5, backgroundColor: colors.white }}
                    />
                    
                </TouchableOpacity>
                
            ))}
            </View>
        </ScrollView>
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
        fontSize: 37,
        fontFamily: 'InriaSansBold',
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
        fontFamily: 'PaytoneRegular',
        color: colors.primary,
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
        width:'32%',
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
    watchImage: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
    },
    heading: {
        fontSize: 20,
        color: '#FFFFFF',
        marginTop: 37,
        marginLeft: 40,
        fontFamily: 'InriaSansBold',
    },
    loadMore: {
        color: '#FFFFFF',
        marginRight: 44,
        fontFamily: 'InriaSansBold',
    },
});

export default WatchScreen;