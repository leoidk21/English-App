// VideoPlayer.js
import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar, Platform, Image, ScrollView } from 'react-native';
import { Video } from 'expo-av';
import { useNavigation, useRoute } from '@react-navigation/native';
import colors from '../Config/colors.js';

const VideoPlayer = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { videoUrl } = route.params;
    const { videoTitle } = route.params;
    const [status, setStatus] = useState(0);

    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <TouchableOpacity style={styles.navIconContainer} onPress={() => navigation.goBack()}>
                    <Image style={styles.navIcon} source={require('../assets/left-back.png')} />
                </TouchableOpacity>
                <Text style={styles.navTitle}>Video</Text>
            </View>
            <View style={styles.videoContainer}>
                <Video
                    source={videoUrl}
                    shouldPlay
                    isLooping
                    resizeMode = 'contain'
                    useNativeControls
                    style={styles.video}
                    onPlaybackStatusUpdate={(status) => setStatus(() => status)}
                    onEnd={() => navigation.goBack()}
                />
            </View>
            <View style={styles.textContainer}>
                <View style={styles.textBox}>
                    <Text style={styles.title}>{videoTitle}</Text>
                    <Text style={styles.description}>Description of the video</Text>
                </View>
            </View>
        </View>
    );
};


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
    videoContainer: {
        width: '100%',
        height: '30%',

    },
    video: {
        width: '100%',
        height: '100%',
    },
    textContainer: {
        marginTop: 20,
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBox: {
        width: '90%',
        height: 'auto',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white,
    },
    description: {
        fontSize: 15,
        color: colors.white,
    },
    imageContainer: {
        width: '100%',
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
});

export default VideoPlayer;