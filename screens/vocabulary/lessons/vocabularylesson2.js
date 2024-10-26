import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Platform, StatusBar, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../Config/colors.js';
import { useFonts } from 'expo-font';

function LearnGrammarScreen2() {
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
                <Text style={styles.navTitle}>Subject Verb Agreement</Text>
            </View>
            <ScrollView style={[styles.scrollView, {marginBottom: 'auto'}]}>
                <View style={styles.BoxContainer}>
                    <View style={styles.box}>
                        <Text style={{ fontSize: 20, color: colors.white }}>
                        Subject agreement is the one who ensures that the subject and the verb agrees in number ( whether it is singular or plural). 
                        </Text>
                        <Text style={{ fontSize: 18, color: colors.white, marginTop: 20 }}>There are 20 rules in subject verb agreement, this includes: </Text>
                        <View style={styles.contentBox}>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>1. Singular subjects take singular verbs.</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Example:</Text> The cat <Text style={styles.textHighlight}>runs</Text> fast.
                                </Text>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>2. Plural subjects take plural verbs.</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Example:</Text> The cats <Text style={styles.textHighlight}>runs</Text> fast.
                                </Text>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>3. Subjects joined by "and" usually take a plural verb.</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Example:</Text> Mary and John <Text style={styles.textHighlight}>are</Text> here.
                                </Text>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>4. Subjects joined by "or" or "nor" take a verb that agrees with the subject closest to it.</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Example:</Text> Either the teacher or the students <Text style={styles.textHighlight}>are</Text> wrong. Neither the students nor the teacher <Text style={styles.textHighlight}>is</Text> wrong.
                                </Text>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>5. Indefinite pronouns like everyone, someone, nobody, and each are singular.</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Example:</Text> Everyone <Text style={styles.textHighlight}>loves</Text> chocolate.
                                </Text>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>6. Some indefinite pronouns (like some, all, none) can be singular or plural, depending on the noun they refer to.</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={[styles.textExample,{fontSize: 15, fontWeight: 'bold', color: colors.black,}]}>Example:</Text>
                                    <View>
                                        <Text>Some of the water <Text style={styles.textHighlight}>is</Text> gone.</Text>
                                        <Text>Some of the apple <Text style={styles.textHighlight}>are</Text> gone.</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>7. Collective nouns (e.g., team, group, class) usually take a singular verb when considered as a single unit.</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Example:</Text> The team <Text style={styles.textHighlight}>wins</Text> the match.
                                </Text>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>8. When a collective noun refers to individual members, it takes a plural verb.</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Example:</Text> The team <Text style={styles.textHighlight}>are</Text> arguing among themselves.
                                </Text>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>9. Titles of books, movies, and other works take a singular verb, even if they sound plural.</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Example:</Text> "The Chronicles of Narnia" <Text style={styles.textHighlight}>is</Text> a popular book series.
                                </Text>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>10. Plural nouns that are singular in meaning (e.g., news, mathematics) take a singular verb.</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Example:</Text> The news <Text style={styles.textHighlight}>is</Text> interesting.
                                </Text>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>11. Words that end in -s but are not plural (e.g., physics, economics) take singular verbs.</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Example:</Text> Physics <Text style={styles.textHighlight}>is</Text> a difficult subject.
                                </Text>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>12. A singular subject followed by phrases like "as well as," "along with," or "in addition to" does not change the number of the subject.</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Example:</Text> The teacher, as well as the students, <Text style={styles.textHighlight}>is</Text> excited.
                                </Text>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>13. In sentences starting with "there is" or "there are," the subject comes after the verb.</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={[styles.textExample,{fontSize: 15, fontWeight: 'bold', color: colors.black,}]}>Example:</Text>
                                    <View>
                                        <Text> There <Text style={styles.textHighlight}>is</Text> a cat on the roof.</Text>
                                        <Text> There <Text style={styles.textHighlight}>are</Text> two cats on the roof.</Text>
                                    </View>
                                </View>
                            </View>
                            
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>14. Subjects with "each" or "every" are singular.</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={[styles.textExample,{fontSize: 15, fontWeight: 'bold', color: colors.black,}]}>Example:</Text>
                                    <View>
                                        <Text> Each student <Text style={styles.textHighlight}>has</Text> a book.</Text>
                                        <Text> Every dog and cat <Text style={styles.textHighlight}>need</Text> attention.</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>15. When using "either" or "neither," the verb agrees with the closest noun.</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={[styles.textExample,{fontSize: 15, fontWeight: 'bold', color: colors.black,}]}>Example:</Text>
                                    <View>
                                        <Text> Either the dog or the cats <Text style={styles.textHighlight}>are</Text> making noise.</Text>
                                        <Text> Neither the cats nor the dog <Text style={styles.textHighlight}>is</Text> making noise.</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>16. Gerunds (verbs ending in -ing) as subjects take a singular verb.</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Example:</Text> Swimming <Text style={styles.textHighlight}>is</Text> good exercise.
                                </Text>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>17. The phrase "the number of" takes a singular verb, while "a number of" takes a plural verb.</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={[styles.textExample,{fontSize: 15, fontWeight: 'bold', color: colors.black,}]}>Example:</Text>
                                    <View>
                                        <Text> The number of students <Text style={styles.textHighlight}>is</Text> increasing.</Text>
                                        <Text> A number of students <Text style={styles.textHighlight}>are</Text> attending the event.</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>18. Fractions and percentages agree with the noun they refer to..</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={[styles.textExample,{fontSize: 15, fontWeight: 'bold', color: colors.black,}]}>Example:</Text>
                                    <View>
                                        <Text> Fifty percent of the cake <Text style={styles.textHighlight}>is</Text> gone</Text>
                                        <Text> Fifty percent of the cakes <Text style={styles.textHighlight}>are</Text> gone</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>19. Expressions like "more than one" take a singular verb.</Text>
                                <Text style={styles.textExample}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: colors.black,}}>Example:</Text> More than one person <Text style={styles.textHighlight}>has</Text> complained.
                                </Text>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.textNumbered}>20. When using relative pronouns (who, which, that), the verb agrees with the noun that the pronoun refers to.</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={[styles.textExample,{fontSize: 15, fontWeight: 'bold', color: colors.black,}]}>Example:</Text>
                                    <View>
                                        <Text> The students who <Text style={styles.textHighlight}>study</Text> hard succeed.</Text>
                                        <Text> The student who <Text style={styles.textHighlight}>studies</Text> hard succeed.</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    
                </View>
                <View style={styles.QuizContainer}>
                    <View style={styles.QuizBox}>
                    <Text style={styles.textHeader}>Short Quiz: MULTIPLE CHOICE</Text>
                        <Text style={styles.textNumbered}>1. The cat or the dogs ___ around the yard every day.</Text>
                        <View style={styles.quizOptions}>
                            <Text style={styles.quizOptionText}>A) runs</Text>
                            <Text style={styles.quizOptionText}>B) run</Text>
                        </View>
                        <Text style={styles.textNumbered}>2. Every student ___ submitted their assignment on time. </Text>
                        <View style={styles.quizOptions}>
                            <Text style={styles.quizOptionText}>A) has </Text>
                            <Text style={styles.quizOptionText}>B) have</Text>
                        </View>
                        <Text style={styles.textNumbered}>3. Physics ___ one of my favorite subjects. </Text>
                        <View style={styles.quizOptions}>
                            <Text style={styles.quizOptionText}>A) is </Text>
                            <Text style={styles.quizOptionText}>B) are</Text>
                        </View>
                        <Text style={styles.textNumbered}>4. The team ___planning their next strategy for the match. </Text>
                        <View style={styles.quizOptions}>
                            <Text style={styles.quizOptionText}>A) is </Text>
                            <Text style={styles.quizOptionText}>B) are</Text>
                        </View>
                        <Text style={styles.textNumbered}>5. There ___ many reasons for his decision.  </Text>
                        <View style={styles.quizOptions}>
                            <Text style={styles.quizOptionText}>A) is </Text>
                            <Text style={styles.quizOptionText}>B) are</Text>
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
    textNumbered: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.watchbackground,
    },
    quizOptions: {
        width: '100%',
        height: 'auto',
        marginBottom: 15,   
    },
    quizOptionText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.black,
    },

});



export default LearnGrammarScreen2;