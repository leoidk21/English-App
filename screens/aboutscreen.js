import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Platform, StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../Config/colors.js';
import { useFonts } from 'expo-font';


function AboutScreen() {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const navigation = useNavigation();

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
                    <Text style={styles.navbarTitle}>ABOUT US</Text>
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
                        <TouchableOpacity style={styles.sidebarItem} onPress={() => {sideBarClose(); navigation.navigate('Learn')}}>
                            <Image style={styles.sidebarItemIcon} source={require('../assets/learn-navigation.png')} />
                            <View style={{flexDirection: 'column'}}>
                                <Text style={styles.sidebarItemText}>Learn</Text>
                                <Text style={styles.sidebarItemTextDescription}>words and phrases</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.sidebarItemLogout}>
                            <TouchableOpacity style={styles.sidebarItemLogoutButton} onPress={() => {sideBarClose(); navigation.navigate('Login')}}>
                                <Text style={styles.sidebarItemLogoutText}>Logout</Text>
                            </TouchableOpacity>
                        </View> 
                    </View>
                   
                </View>
            )}
           

            <ScrollView style={[styles.scrollView, {marginBottom: 'auto'}]}>
                <View style={styles.themeContainer}>
                    <Text style={styles.themeTitle}>OUR THEME</Text>
                    <Text style={styles.themeDescription}>Our English E-learning Application is designed solely to teach basic lessons and to empower the users knowledge and learning about the English language. Our app offers guided lessons that are essential language skills such as grammar basics, vocabulary and expression, listening, and writing skills. Each section is crafted to help and support users toward fluency. Additionally, our app includes a dedicated “Watch” page, where users can easily access English lessons and tutorials specialized to enhance understanding through guided, visual learning. To reinforce learning, each lesson concludes with a quiz, turning each review into a fun activity and promoting active recall. This approach not only builds essential language skills but also makes learning enjoyable and interactive. </Text>
                </View>
                <View style={styles.personContainer}>
                    <View style={styles.box}>
                        <View style={styles.personProfileContainer}>
                            <Image style={styles.personProfile} source={require('../assets/nuarin-PFP.jpg')} />
                        </View>
                        <View style={styles.personNameContainer}>
                            <Text style={styles.personName}>Nuarin Jerry</Text>
                            <Text style={styles.personPosition}>Leader</Text>
                        </View>
                        <View style={styles.personDescriptionContainer}>
                            <ScrollView nestedScrollEnabled={true}>
                                <Text style={styles.personDescription}>My specialty is UX principles and theory, which involves ensuring our application is visually appealing, user-friendly, clean, and well-organized. I accomplish this by applying various UX principles and laws, including a method known as C.R.A.P. This acronym stands for Contrast, Repetition, Alignment, and Proximity. Contrast highlights the main content through differences in color, size, and shape. Repetition maintains consistency to reduce confusion, while Alignment ensures that shapes, fonts, and elements are organized for clarity. Lastly, Proximity emphasizes the relationships between different components, making the application more user-friendly. By implementing these principles, I strive to enhance the overall user experience.</Text>
                            </ScrollView>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.personProfileContainer}>
                            <Image style={styles.personProfile} source={require('../assets/chavez-PFP.jpg')} />
                        </View>
                        <View style={styles.personNameContainer}>
                            <Text style={styles.personName}>Chavez Leo</Text>
                            <Text style={styles.personPosition}>Member</Text>
                        </View>
                        <View style={styles.personDescriptionContainer}>
                            <ScrollView nestedScrollEnabled={true}>
                                <Text style={styles.personDescription}>By applying the 60 30 10 rule, I selected color schemes that balance the design and corporate theme of our application by blending the dominant, secondary, and least colors in a way that isn’t overwhelming for the users.</Text>
                            </ScrollView>
                        </View>
                    </View>
                </View>

                <View style={styles.personContainer}>
                    <View style={styles.box}>
                        <View style={styles.personProfileContainer}>
                            <Image style={styles.personProfile} source={require('../assets/nepomuceno-PFP.jpg')} />
                        </View>
                        <View style={styles.personNameContainer}>
                            <Text style={styles.personName}>Nepomuceno Wencer</Text>
                            <Text style={styles.personPosition}>Member</Text>
                        </View>
                        <View style={styles.personDescriptionContainer}>
                            <ScrollView nestedScrollEnabled={true}>
                                <Text style={styles.personDescription}>As part of the development process for our Android application, I assisted the team with improving the User Interface (UI) spacing. This task was important to ensure that the app had a clean, organized, and user-friendly layout. By helping our group to focus on UI spacing, I contributed to enhancing the overall usability and aesthetics of our app, making it more intuitive for users.</Text>
                            </ScrollView>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.personProfileContainer}>
                            <Image style={styles.personProfile} source={require('../assets/penoliar-PFP.jpg')} />
                        </View>
                        <View style={styles.personNameContainer}>
                            <Text style={styles.personName}>Penoliar, Roi Gabriel</Text>
                            <Text style={styles.personPosition}>Member</Text>
                        </View>
                        
                        <View style={styles.personDescriptionContainer}>
                            <ScrollView nestedScrollEnabled={true}>
                                <Text style={styles.personDescription}>In our project, I focused on Typography, using the fonts Paytone, Inter, and Inria Sans to align with our "English" theme. Paytone is used for headers due to its bold, casual feel, which makes it perfect for drawing attention to key sections. For body text, Inter and Inria Sans are chosen for their clean and readable design, making it easy for users to engage with lessons and instructions. I specifically worked on the writing part of the lessons, ensuring that the combination of these fonts provides a balanced and effective learning experience.</Text>
                            </ScrollView>
                        </View>
                    </View>
                </View>

                <View style={styles.personContainer}>
                    <View style={styles.box}>
                        <View style={styles.personProfileContainer}>
                            <Image style={styles.personProfile} source={require('../assets/acosta-PFP.jpg')} />
                        </View>
                        <View style={styles.personNameContainer}>
                            <Text style={styles.personName}>Acosta, Karl Dave</Text>
                            <Text style={styles.personPosition}>Member</Text>
                        </View>
                        <View style={styles.personDescriptionContainer}>
                            <ScrollView nestedScrollEnabled={true}>
                                <Text style={styles.personDescription}>In our project, I did research about the users that will use our app and study how we’d make it, and I gathered some data that it reflects the motivations, goals, needs, frustrations, and behaviors of users on our app, user needs, and the user’s expectations from the service or recomendation to improve their experience on our app.</Text>
                            </ScrollView>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.personProfileContainer}>
                            <Image style={styles.personProfile} source={require('../assets/arenas-PFP.jpg')} />
                        </View>
                        <View style={styles.personNameContainer}>
                            <Text style={styles.personName}>Arenas, Eron</Text>
                            <Text style={styles.personPosition}>Member</Text>
                        </View>
                        <View style={styles.personDescriptionContainer}>
                            <ScrollView nestedScrollEnabled={true}>
                                <Text style={styles.personDescription}>For my part, I'm using the theme color of our app. It uses hue, saturation, lightness of the color, and also the color groups. By recommending or applying color theory to our application it helped us because it is one of the things that gives life or meaning to the color of our theme in our application. Also choosing the right colors can make designs more accessible, especially for people with visual impairments. High contrast, for example, can make content easier to read for those with low vision.</Text>
                            </ScrollView>
                        </View>
                    </View>
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

    themeContainer: {
        width: '92%',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        borderRadius: 20,
        marginBottom: 40,
        padding: 20,
    },
    themeTitle: {
        textAlign: 'center',
        fontSize: 20,
        color: colors.primary,
        marginBottom: 10,
        fontFamily: 'PaytoneRegular',
    },
    themeDescription: {
        fontSize: 15,
        color: colors.primary,
        fontFamily: 'InriaSansRegular',
    },

    personContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    box: {
        width: '45%',
        height: 250,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        borderRadius: 10,
        marginBottom: 30,
    },
    personProfileContainer: {
        width: 90,
        height: 90,
        top: -35,
    },
    personProfile: {
        width: 90,
        height: 90,
        borderRadius: 50,
        
    },
    personNameContainer: {
        width: '85%',
        height: 40,
        alignItems: 'center',
        top: -30,
    },
    personName: {
        fontSize: 17,
        color: colors.primary,
        fontFamily: 'InterBold',
    },
    personPosition: {
        fontSize: 12,
        color: colors.watchbackground,
        fontFamily: 'InterRegular',
    },
    personDescriptionContainer: {
        width: '80%',
        height: 100,
        top: -25,
    },
    personDescription: { 
        fontSize: 12,
        color: colors.primary, 
        fontFamily: 'InriaSansRegular',
    },
   
});

export default AboutScreen;