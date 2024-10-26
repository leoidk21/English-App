import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Platform, StatusBar, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../Config/colors.js';
import { useFonts } from 'expo-font';

function GrammarLesson1() {
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
                <Text style={styles.navTitle}>Part of Speech</Text>
            </View>
            <ScrollView style={[styles.scrollView, {marginBottom: 'auto'}]}>
                <View style={styles.BoxContainer}>
                    <View style={[styles.BoxRight, {backgroundColor: colors.LightGreen}]}>
                        <Text style={{ fontSize: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Noun -</Text> refers to the name of a person, place, thing, or idea. Nouns can be singular (cat) or plural (cats) and it can function as the subject or object in a sentence.
                        </Text>

                        <Text style={{ marginTop: 30, fontSize: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 25, textDecorationLine: 'underline' }}>Example:</Text> The DOG is barking.
                        </Text>
                    </View>
                    <View style={[styles.BoxLeft, {backgroundColor: colors.LightPink}]}>
                        <Text style={{ fontSize: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Pronoun -</Text> are used to replace the noun in order to avoid repetition and make the sentences smoother. a pronoun can refer to people, objects or things that have been already mentioned in a sentence.
                        </Text>

                        <Text style={{ marginTop: 30, fontSize: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 25, textDecorationLine: 'underline' }}>Example:</Text> Instead of saying “ Karl said that Karl would help Karl's friend” you could say “Karl said that HE would help HIS friend.”
                        </Text>
                    </View>
                    <View style={[styles.BoxLeft, {backgroundColor: colors.orange}]}>
                        <Text style={{ fontSize: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Verbs -</Text> refers to a word that expresses an action or a state of being.
                        </Text>

                        <Text style={{ marginTop: 30, fontSize: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 25, textDecorationLine: 'underline' }}>Example:</Text> Action verb - run, eat, jump, write ( in a sentence - “ He runs every morning.” )
                        </Text>
                        <Text style={{ marginTop: 30, fontSize: 20 }}> State of beings verb - is, are, was, feel ( in a sentence - “ He is sad” )</Text>
                    </View>
                    <View style={[styles.BoxRight, {backgroundColor: colors.LightGreen}]}>
                        <Text style={{ fontSize: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Adjectives -</Text> refers to a word that describes or gives information about a noun. Usually, adjectives tell us what kind, how many, or which one. Adjectives also add details to the sentences.
                        </Text>

                        <Text style={{ marginTop: 30, fontSize: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 25, textDecorationLine: 'underline' }}>Example:</Text> A blue bike. ( Describes the color), the three dogs ( refers to the quantity.) The beautiful painting. ( Shows quality.)
                        </Text>
                    </View>
                    <View style={[styles.BoxLeft, {backgroundColor: colors.blue}]}>
                        <Text style={{ fontSize: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Conjunction -</Text> are words used to connect words, sentences or phrases. Conjunction helps in merging ideas smoothly.
                        </Text>

                        <Text style={{ marginTop: 30, fontSize: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 25, textDecorationLine: 'underline' }}>Example:</Text>
                        </Text>

                        <Text style={{ marginTop: 15, marginLeft: 10, fontSize: 20 }}>
                            1. Coordinating conjunctions - Connects the ideas equally. “I like mango and strawberry”
                        </Text>
                        <Text style={{ marginTop: 15, marginLeft: 10, fontSize: 20 }}>
                            2. Subordinating conjunctions - Connects dependent clauses to an independent one. “ I stayed at home because it was raining.”
                        </Text>
                        <Text style={{ marginTop: 15, marginLeft: 10, fontSize: 20 }}>
                            3. Correlative conjunctions - Works in pairs. ( Either, neither, or nor) “ Either you come, or I'll leave.”
                        </Text>
                    </View>
                </View>
                
                <View style={styles.QuizContainer}>
                    <View style={styles.QuizBox}>
                        <Text style={styles.textHeader}>Short Quiz: MULTIPLE CHOICE </Text>
                        <Text style={styles.textNumbered}>1. Which of the following is NOT one of the eighth parts of speech? </Text>
                        <View style={styles.quizOptions}>
                                <Text style={styles.quizOptionText}>A) Noun</Text>
                                <Text style={styles.quizOptionText}>B) Adjective</Text>
                                <Text style={styles.quizOptionText}>C) Phrase</Text>
                                <Text style={styles.quizOptionText}>D) Verb</Text>
                        </View>
                    </View>
                    <View style={styles.QuizBox}>
                        <Text style={styles.textNumbered}>2. What part of speech describes a noun? </Text>
                        <View style={styles.quizOptions}>
                            <Text style={styles.quizOptionText}>A) Verb</Text>
                            <Text style={styles.quizOptionText}>B) Adverb</Text>
                            <Text style={styles.quizOptionText}>C) Adjective</Text>
                            <Text style={styles.quizOptionText}>D) Conjunction</Text>
                        </View>
                    </View>
                    <View style={styles.QuizBox}>
                        <Text style={styles.textNumbered}>3. Which of the following contains a pronoun? </Text>
                        <View style={styles.quizOptions}>
                            <Text style={styles.quizOptionText}>A) Chin runs fast </Text>
                            <Text style={styles.quizOptionText}>B) The dog is barking loudly</Text>
                            <Text style={styles.quizOptionText}>C) The book is on the table</Text>
                            <Text style={styles.quizOptionText}>D) He loves to play basketball</Text>
                        </View>
                    </View>
                    <View style={styles.QuizBox}>
                        <Text style={styles.textNumbered}>4. Which of the following is a conjunction?  </Text>
                        <View style={styles.quizOptions}>
                            <Text style={styles.quizOptionText}>A) And </Text>
                            <Text style={styles.quizOptionText}>B) However</Text>
                            <Text style={styles.quizOptionText}>C) Quickly</Text>
                            <Text style={styles.quizOptionText}>D) Cat</Text>
                        </View>
                    </View>
                    <View style={styles.QuizBox}>
                        <Text style={styles.textNumbered}>5. “She run quickly to the store” In this sentence what part of speech is “quickly” ?  </Text>
                        <View style={styles.quizOptions}>
                            <Text style={styles.quizOptionText}>A) Adverb </Text>
                            <Text style={styles.quizOptionText}>B) Noun</Text>
                            <Text style={styles.quizOptionText}>C) Adjective</Text>
                            <Text style={styles.quizOptionText}>D) Conjunction</Text>
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
    BoxRight: {
        borderTopRightRadius: 8,
        borderTopLeftRadius: 35,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 35,
        marginBottom: 20,
        padding: 15,
        width: '90%',
        height: 'auto',
    },
    BoxLeft: {
        borderTopRightRadius: 35,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 8,
        marginBottom: 20,
        padding: 15,
        width: '90%',
        height: 'auto',
    },

    QuizContainer: {
        marginTop: 40,
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
    },
    QuizBox: {
        marginTop: 20,
        width: '90%',
        height: 'auto',
        marginBottom: 20,
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
    },
    quizOptionText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.black,
    },

});



export default GrammarLesson1;