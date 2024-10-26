import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Platform, StatusBar, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../Config/colors.js';
import { useFonts } from 'expo-font';

function LearnGrammarScreen3() {
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
                <Text style={styles.navTitle}>Pronouns and Antecedents</Text>
            </View>
            <ScrollView style={[styles.scrollView, {marginBottom: 'auto'}]}>
                <View style={styles.BoxContainer}>
                    <View style={styles.box}>
                        <View style={styles.contentBox}>
                            <Text style={{ fontSize: 20, color: colors.black ,marginBottom: 10 }}>
                                Objective: To understand how pronouns must agree with their antecedents in gender, number, and person.
                            </Text>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>1. What is a Pronoun?</Text>
                                <Text>A pronoun is a word that takes the place of a noun to avoid repetition. Common pronouns include he, she, it, they, we, us, his, her, our, their, etc.</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Example:</Text> Instead of saying "John went to John's car," you can say "John went to his car."
                                </Text>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>2. What is an Antecedent?</Text>
                                <Text>The antecedent is the noun or noun phrase that the pronoun refers to or replaces.</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Example:</Text> Sarah gave her book to Jane." Here, "Sarah" is the antecedent and "her" is the pronoun.
                                </Text>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>3. Pronoun-Antecedent Agreement</Text>
                                <Text>A pronoun must agree with its antecedent in number (singular or plural), gender (male, female, or neutral), and person (first, second, or third).</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Example:</Text> Sarah gave her book to Jane." Here, "Sarah" is the antecedent and "her" is the pronoun.
                                </Text>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>4. Rules for Pronoun-Antecedent Agreement</Text>
                                <Text>Rule 1: Singular antecedents require singular pronouns.</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Example:</Text> The boy forgot his lunch.
                                </Text>
                                <Text>Rule 2: Plural antecedents require plural pronouns.</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Example:</Text> The students completed their homework.
                                </Text>
                                <Text>Rule 3: For compound antecedents joined by "or" or "nor," the pronoun agrees with the closest antecedent.</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Example:</Text> Neither Sarah nor the boys brought their books. Neither the boys nor Sarah brought her book.
                                </Text>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>5. Special Case: Singular "They"</Text>
                                <Text>When the gender of a person is unknown or nonbinary, "they" can be used as a singular pronoun. This is now widely accepted in modern English.</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Example:</Text> Someone left their phone on the table.
                                </Text>
                            </View>
                            
                        </View>
                    </View>
                    
                </View>
                <View style={styles.QuizContainer}>
                    <View style={styles.QuizBox}>
                    <Text style={styles.textHeader}>Short Quiz: MULTIPLE CHOICE</Text>
                        <Text style={styles.textNumbered}>1. Select the correct pronoun to complete the sentence:</Text>
                        <Text style={styles.textNumbered}>Neither John nor Mike brought ___ lunch to school.</Text>
                        <View style={styles.quizOptions}>
                            <Text style={styles.quizOptionText}>A) his</Text>
                            <Text style={styles.quizOptionText}>B) their</Text>
                        </View>
                        <Text style={styles.textNumbered}>2. Choose the correct pronoun:</Text>
                        <Text style={styles.textNumbered}>The committee has made ___ decision.</Text>
                        <View style={styles.quizOptions}>
                            <Text style={styles.quizOptionText}>A) its </Text>
                            <Text style={styles.quizOptionText}>B) their</Text>
                        </View>
                        <Text style={styles.textNumbered}>3. Pick the correct pronoun for the sentence:</Text>
                        <Text style={styles.textNumbered}>Each student should submit ___ homework by Friday.</Text>
                        <View style={styles.quizOptions}>
                            <Text style={styles.quizOptionText}>A) his or her</Text>
                            <Text style={styles.quizOptionText}>B) their</Text>
                        </View>
                        <Text style={styles.textNumbered}>4. Complete the sentence:</Text>
                        <Text style={styles.textNumbered}>The teachers and the principal are preparing for ___ meeting.</Text>
                        <View style={styles.quizOptions}>
                            <Text style={styles.quizOptionText}>A) his</Text>
                            <Text style={styles.quizOptionText}>B) their</Text>
                        </View>
                        <Text style={styles.textNumbered}>5. Which pronoun fits the sentence?</Text>
                        <Text style={styles.textNumbered}>Someone left ___ umbrella at the door.</Text>
                        <View style={styles.quizOptions}>
                            <Text style={styles.quizOptionText}>A) his or her</Text>
                            <Text style={styles.quizOptionText}>B) their</Text>
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
    quizOptions: {
        width: '100%',
        height: 'auto',
        marginBottom: 20,
    },
    textNumbered: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.watchbackground,
    },
    quizOptionText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.black,
    },

});



export default LearnGrammarScreen3;