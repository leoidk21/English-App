import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Platform, StatusBar, ScrollView, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../Config/colors.js';
import { useFonts } from 'expo-font';

function LearnVocabularyScreen1() {
    const navigation = useNavigation();

    const [loaded] = useFonts({
        'InriaSansRegular': require('../../../assets/fonts/InriaSans-Regular.ttf'),
        'InriaSansBold': require('../../../assets/fonts/InriaSans-Bold.ttf'),
        'InterRegular': require('../../../assets/fonts/Inter_18pt-Regular.ttf'),
        'InterBold': require('../../../assets/fonts/Inter_18pt-Bold.ttf'),
        'PaytoneRegular': require('../../../assets/fonts/PaytoneOne-Regular.ttf'),
      });

      if (!loaded) {
        return null;
      }

    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <TouchableOpacity style={styles.navIconContainer} onPress={() => navigation.goBack()}>
                    <Image style={styles.navIcon} source={require('../../../assets/left-back.png')} />
                </TouchableOpacity>
                <Text style={styles.navTitle}>Common Nouns</Text>
            </View>
            <ScrollView style={[styles.scrollView, {marginBottom: 'auto'}]}>
                <View style={styles.BoxContainer}>
                    <View style={styles.box}>
                        <View style={styles.contentBox}>
                            <Text style={{ fontSize: 20, color: colors.black ,marginBottom: 30 }}>
                            This lesson introduces basic nouns that are used to name everyday objects. Students will learn words related to things they encounter in their daily lives, such as a house, car, book, chair, and tree.
                            </Text>

                            <View style={{marginBottom: 10, marginTop: 10}}>
                                <Text style={styles.textExample}>1. House</Text>
                                <Text style={styles.textExample}>2. Car</Text>
                                <Text style={styles.textExample}>3. Book</Text>
                                <Text style={styles.textExample}>4. Chair</Text>
                                <Text style={styles.textExample}>5. Tree</Text>
                            </View>                
                        </View>
                    </View>
                    
                </View>
                <View style={styles.QuizContainer}>
                    <View style={styles.QuizBox}>
                        <Text style={styles.textHeader}>Short Quiz: ANSWER THE FOLLOWING</Text>
                            <Text style={styles.textNumbered}>1. What do you live in?</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Answer"
                                secureTextEntry
                                autoCapitalize="none"
                                autoCompleteType="Answer"
                            />
                            <Text style={styles.textNumbered}>2. What do you drive to get to places?</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Answer"
                                secureTextEntry
                                autoCapitalize="none"
                                autoCompleteType="Answer"
                            />
                            <Text style={styles.textNumbered}>3. What do you sit on?</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Answer"
                                secureTextEntry
                                autoCapitalize="none"
                                autoCompleteType="Answer"
                            />
                            <Text style={styles.textNumbered}>4. What do you read?</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Answer"
                                secureTextEntry
                                autoCapitalize="none"
                                autoCompleteType="Answer"
                            />
                            <Text style={styles.textNumbered}>5. What grows in the ground and has leaves?</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Answer"
                                secureTextEntry
                                autoCapitalize="none"
                                autoCompleteType="Answer"
                            />
                        
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
    BoxContainer: {
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box : {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentBox: {
        width: '100%',
        height: 'auto',
        backgroundColor: colors.white,
        borderRadius: 5,
        padding: 20,
    },
    textNumbered: {
        fontSize: 20,
        color: colors.black,
    },
    textExample: {
        fontSize: 15,
        color: colors.black,
    },
    textHighlight: {
        fontSize: 15,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    QuizContainer: {
        borderRadius: 5,
        marginTop: 40,
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',

    },
    QuizBox: {
        padding: 20,
        marginTop: 20,
        width: '90%',
        height: 'auto',
        marginBottom: 20,
        backgroundColor: colors.white,
        borderRadius: 5,
    },
    textHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    textNumbered: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.watchbackground,
    },
    quizOptions: {
        width: '100%',
        height: 'auto',
        marginBottom: 20,
    },
    quizOptionText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.black,
    },
    input: {
        height: 40,
        margin: 12,
        borderBottomWidth: 2,
        boxShadow: 5,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#f2f2f2',
    },

});



export default LearnVocabularyScreen1;