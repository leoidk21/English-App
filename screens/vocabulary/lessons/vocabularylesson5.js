import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Platform, StatusBar, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../Config/colors.js';
import { useFonts } from 'expo-font';

function LearnGrammarScreen5() {
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
                <Text style={styles.navTitle}>Verb Tenses</Text>
            </View>
            <ScrollView style={[styles.scrollView, {marginBottom: 'auto'}]}>
                <View style={styles.BoxContainer}>
                    <View style={styles.box}>
                        <View style={styles.contentBox}>
                            <Text style={{ fontSize: 20, color: colors.black ,marginBottom: 30 }}>
                            Objective: To learn about the different verb tenses in English and how to use them correctly to indicate the time of an action (past, present, or future).
                            </Text>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>What are Verb Tenses?</Text>
                                <Text style={styles.textExample}>
                                 Verb tenses show the time of action or state of being. In English, there are three basic tenses (past, present, and future), and each has four aspects: simple, continuous (progressive), perfect, and perfect continuous.
                                </Text>
                            </View>
                            <Text style={[styles.textNumbered, { marginBottom: 15}] }>The 12 Verb Tenses</Text>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>A. Present Tenses</Text>
                                <Text style={styles.textNumbered}>1. Simple Present: Describes habits, general truths, or repeated actions.</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Example:</Text> She walks to school every day.
                                </Text>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>2. Present Continuous (Present Progressive): Describes actions happening right now or around this time.</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Example:</Text> She is walking to school right now.
                                </Text>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>3. Present Perfect: Describes actions that started in the past and are still relevant or actions that occurred at an unspecified time.</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Example:</Text> She has walked to school many times.
                                </Text>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>4. Present Perfect Continuous: Describes actions that started in the past, continue in the present, and may continue into the future.</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Example:</Text> She has been walking to school for an hour.
                                </Text>
                            </View>
                            <View style={{marginBottom: 10, marginTop: 10}}>
                                <Text style={styles.textNumbered}>B. Past Tenses</Text>
                                <Text style={styles.textNumbered}>1. Simple Past: Describes completed actions in the past.</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Example:</Text> She walked to school yesterday.
                                </Text>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>2. Past Continuous (Past Progressive): Describes actions that were happening at a specific time in the past.</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Example:</Text> She was walking to school when it started to rain.
                                </Text>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>3. Past Perfect: Describes actions that were completed before another action in the past.</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Example:</Text> She had walked to school before the rain started.
                                </Text>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>4. Past Perfect Continuous: Describes actions that were happening over time in the past before another action occurred.</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Example:</Text> She had been walking to school for an hour when it started raining.
                                </Text>
                            </View>

                            <View style={{marginBottom: 10, marginTop: 10}}>
                                <Text style={styles.textNumbered}>C. Future Tenses</Text>
                                <Text style={styles.textNumbered}>1. Simple Future: Describes actions that will happen at a later time.</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Example:</Text> She will walk to school tomorrow.
                                </Text>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>2. Future Continuous (Future Progressive): Describes actions that will be happening at a specific time in the future.</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Example:</Text> She will be walking to school at 8 AM tomorrow.
                                </Text>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>3. Future Perfect: Describes actions that will be completed before a certain time in the future.</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Example:</Text> She will have walked to school by the time you arrive.
                                </Text>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>4. Future Perfect Continuous: Describes actions that will continue until a certain time in the future.</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Example:</Text> She will have been walking for an hour by the time she reaches school.
                                </Text>
                            </View>

                            <View style={{marginBottom: 10, marginTop: 10}}>
                                <Text style={styles.textNumbered}>How to Choose the Correct Tense</Text>
                                <Text style={styles.textExample}>1. Present tenses are used for actions that happen regularly or are happening now.</Text>
                                <Text style={styles.textExample}>2. Past tenses are used for actions that were completed in the past.</Text>
                                <Text style={styles.textExample}>3. Future tenses are used for actions that will occur.</Text>
                                <Text style={styles.textExample}>4. Use perfect tenses to show that one action happened before another.</Text>
                                <Text style={styles.textExample}>5. Use continuous tenses to emphasize ongoing or interrupted actions.</Text>
                            </View>

                            <View style={{marginBottom: 10, marginTop: 10}}>
                                <Text style={styles.textNumbered}>Common Errors with Verb Tensese</Text>
                                <Text style={styles.textExample}>1. Switching tenses unnecessarily:</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Incorrect:</Text> I am walking to school, and I saw a dog.
                                </Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Correct:</Text> I am walking to school, and I see a dog.
                                </Text>
                                <Text>(Both actions are in the present.)</Text>
                            </View>
                            <View style={{marginBottom: 10, marginTop: 10}}>
                                <Text style={styles.textExample}>2. Using the wrong tense for time frames::</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Incorrect:</Text> He has completed the task yesterday.
                                </Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Correct:</Text> He completed the task yesterday.
                                </Text>
                                <Text>(Use simple past for completed actions with a specific time in the past.) </Text>
                            </View>
  
                        
                            
                        </View>
                    </View>
                    
                </View>
                <View style={styles.QuizContainer}>
                    <View style={styles.QuizBox}>
                        <Text style={styles.textHeader}>Short Quiz: MULTIPLE CHOICE</Text>
                            <Text style={styles.textNumbered}>1. Choose the correct verb tense to complete the sentence:</Text>
                            <Text style={styles.textNumbered}>I usually ___ (walk) to work, but today I ___ (take) the bus.</Text>
                            <View style={styles.quizOptions}>
                                <Text style={styles.quizOptionText}>A) walk, am taking</Text>
                                <Text style={styles.quizOptionText}>B) walked, am taking</Text>
                                <Text style={styles.quizOptionText}>C) walk, took</Text>
                            </View>
                        <Text style={styles.textNumbered}>2. Pick the sentence with the correct tense:</Text>
                        <View style={styles.quizOptions}>
                                <Text style={styles.quizOptionText}>A) She will has finished the project by the end of the day.</Text>
                                <Text style={styles.quizOptionText}>B) She will have finished the project by the end of the day.</Text>
                            </View>
                        <Text style={styles.textNumbered}>3. Select the correct tense:</Text>
                        <Text style={styles.textNumbered}>By the time you arrive, they ___ (complete) the task.</Text>
                        <View style={styles.quizOptions}>
                                <Text style={styles.quizOptionText}>A) will complete</Text>
                                <Text style={styles.quizOptionText}>B) will have completed</Text>
                                <Text style={styles.quizOptionText}>C) had completed</Text>
                            </View>
                        <Text style={styles.textNumbered}>4. Choose the correct verb form:</Text>
                        <Text style={styles.textNumbered}>When I called him, he ___ (watch) TV.</Text>
                        <View style={styles.quizOptions}>
                                <Text style={styles.quizOptionText}>A) was watching</Text>
                                <Text style={styles.quizOptionText}>B) is watching</Text>
                                <Text style={styles.quizOptionText}>C) watched</Text>
                            </View>
                        <Text style={styles.textNumbered}>5. Identify the correct tense for the sentence:</Text>
                        <Text style={styles.textNumbered}>They ___ (study) for two hours before they took a break.</Text>
                        <View style={styles.quizOptions}>
                                <Text style={styles.quizOptionText}>A) had been studying</Text>
                                <Text style={styles.quizOptionText}>B) were studying</Text>
                                <Text style={styles.quizOptionText}>C) will have been studying</Text>
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



export default LearnGrammarScreen5;