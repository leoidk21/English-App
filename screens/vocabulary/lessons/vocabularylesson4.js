import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Platform, StatusBar, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../Config/colors.js';
import { useFonts } from 'expo-font';

function LearnGrammarScreen4() {
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
                <Text style={styles.navTitle}>Modifiers</Text>
            </View>
            <ScrollView style={[styles.scrollView, {marginBottom: 'auto'}]}>
                <View style={styles.BoxContainer}>
                    <View style={styles.box}>
                        <View style={styles.contentBox}>
                            <Text style={{ fontSize: 20, color: colors.black ,marginBottom: 30 }}>
                            Objective: To learn how to use modifiers correctly in sentences, avoid common errors like misplaced or dangling modifiers, and ensure clarity in communication.
                            </Text>
                            <View style={{marginBottom: 10}}>
                                <Text style={{ fontSize: 20, color: colors.black ,marginBottom: 10 }}>5. Types of Modifiers</Text>
                                <Text style={styles.textNumbered}>Adjective Modifiers: Modify nouns or pronouns.</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Example:</Text> The bright sun shone through the window.
                                </Text>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>Adverb Modifiers: Modify verbs, adjectives, or other adverbs.</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Example:</Text> She ran quickly to catch the bus.
                                </Text>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>Prepositional Phrases as Modifiers: Begin with a preposition and modify nouns or verbs.</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Example:</Text> The book on the table is mine.
                                </Text>
                                <Text>(The prepositional phrase modifies the noun "book.")</Text>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>Participial Phrases as Modifiers: Start with a present or past participle and modify nouns or pronouns.</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Example:</Text> Running late, she hurried to the meeting.
                                </Text>
                                <Text>(The participial phrase "Running late" modifies "she.")</Text>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>Infinitive Phrases as Modifiers: Start with "to" followed by the base form of a verb and can modify nouns or verbs.</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Example:</Text> She brought a book to read.
                                </Text>
                                <Text>(The infinitive phrase "to read" modifies "book.")</Text>
                            </View>
                            
                        </View>
                    </View>
                    
                </View>
                <View style={styles.QuizContainer}>
                    <View style={styles.QuizBox}>
                        <Text style={styles.textHeader}>Short Quiz: MULTIPLE CHOICE</Text>
                            <Text style={styles.textNumbered}>1. Identify the misplaced modifier and correct the sentence:</Text>
                            <View style={styles.quizOptions}>
                                <Text style={styles.quizOptionText}>A) He served pizza on paper plates to the kids.</Text>
                                <Text style={styles.quizOptionText}>B) He served pizza to the kids on paper plates.</Text>
                            </View>
                        <Text style={styles.textNumbered}>2. Select the correct sentence:</Text>
                        <View style={styles.quizOptions}>
                            <Text style={styles.quizOptionText}>A) She found a gold woman’s necklace. </Text>
                            <Text style={styles.quizOptionText}>B) She found a woman’s gold necklace.</Text>
                        </View>
                        <Text style={styles.textNumbered}>3. Fix the dangling modifier:</Text>
                        <View style={styles.quizOptions}>
                            <Text style={styles.quizOptionText}>A) Running down the street, the car nearly hit me.</Text>
                            <Text style={styles.quizOptionText}>B) While I was running down the street, the car nearly hit me.</Text>
                        </View>
                        <Text style={styles.textNumbered}>4. Choose the sentence with the correct placement of the modifier:</Text>
                        <View style={styles.quizOptions}>
                            <Text style={styles.quizOptionText}>A) We almost ate all the pizza.</Text>
                            <Text style={styles.quizOptionText}>B) We ate almost all the pizza.</Text>
                        </View>
                        <Text style={styles.textNumbered}>5. Correct the misplaced modifier:</Text>
                        <View style={styles.quizOptions}>
                            <Text style={styles.quizOptionText}>A) The girl saw a bird sitting in the garden with binoculars.</Text>
                            <Text style={styles.quizOptionText}>B) The girl, with binoculars, saw a bird sitting in the garden.</Text>
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

});



export default LearnGrammarScreen4;