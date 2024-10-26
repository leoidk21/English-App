import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Platform, StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../Config/colors.js';
import { useFonts } from 'expo-font';

function SpeakingScreen() {
    const navigation = useNavigation();

    const [loaded] = useFonts({
        'InriaSansRegular': require('../../assets/fonts/InriaSans-Regular.ttf'),
        'InriaSansBold': require('../../assets/fonts/InriaSans-Bold.ttf'),
        'InterRegular': require('../../assets/fonts/Inter_18pt-Regular.ttf'),
        'InterBold': require('../../assets/fonts/Inter_18pt-Bold.ttf'),
        'PaytoneRegular': require('../../assets/fonts/PaytoneOne-Regular.ttf'),
      });

      if (!loaded) {
        return null;
      }

    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <TouchableOpacity style={styles.navIconContainer} onPress={() => navigation.goBack()}>
                    <Image style={styles.navIcon} source={require('../../assets/left-back.png')} />
                </TouchableOpacity>
                <Text style={styles.navTitle}>Speaking and Listening</Text>
            </View>
            <View style={styles.LessonContainer}>
                <View style={styles.BoxContainer}>
                    <TouchableOpacity style={styles.LessonBox} onPress={() => navigation.navigate('Lesson1Speaking')}>
                        <View style={styles.LessonBoxNum}>
                            <Text style={styles.Number}>1</Text>
                        </View>
                        <Text style={styles.LessonBoxTitle}>LESSON</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.LessonBox} onPress={() => navigation.navigate('Lesson2Speaking')}>
                        <View style={styles.LessonBoxNum}>
                            <Text style={styles.Number}>2</Text>
                        </View>
                        <Text style={styles.LessonBoxTitle}>LESSON</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.LessonBox} onPress={() => navigation.navigate('Lesson3Speaking')}>
                        <View style={styles.LessonBoxNum}>
                            <Text style={styles.Number}>3</Text>
                        </View>
                        <Text style={styles.LessonBoxTitle}>LESSON</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.LessonBox} onPress={() => navigation.navigate('Lesson4Speaking')}>
                        <View style={styles.LessonBoxNum}>
                            <Text style={styles.Number}>4</Text>
                        </View>
                        <Text style={styles.LessonBoxTitle}>LESSON</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.LessonBox} onPress={() => navigation.navigate('Lesson5Speaking')}>
                        <View style={styles.LessonBoxNum}>
                            <Text style={styles.Number}>5</Text>
                        </View>
                        <Text style={styles.LessonBoxTitle}>LESSON</Text>
                    </TouchableOpacity>
                </View>
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
    LessonContainer: {
        width: '100%',
        height: '92%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    BoxContainer: {
        width: '80%',
        height: '100%',
    },
    LessonBox: {
        width: '100%',
        height: '17%',
        backgroundColor: colors.white,
        marginBottom: 10,
        borderRadius: 5,
        alignItems: 'center',
        flexDirection: 'row',
    },
    LessonBoxNum: {
        marginLeft: 20,
        width: '16%',
        height: '40%',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.LightPink,
    },
    Number: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.white,
    },
    LessonBoxTitle: {
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.watchbackground,
    },


});



export default SpeakingScreen;