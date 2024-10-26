import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'; 
import { StyleSheet, Text, View, Platform, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../Config/colors.js';
import { useFonts } from 'expo-font';

function WritingLesson3() {
  const navigation = useNavigation();

  const [text, setText] = useState('');

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
        <View style={styles.navBack}>
          <TouchableOpacity style={styles.navIconContainer} onPress={() => navigation.goBack()}>
              <Image style={styles.navIcon} source={require('../../../assets/left-back.png')} />
          </TouchableOpacity>
          <Text style={styles.navTitle}>Writing</Text>
        </View>
    <ScrollView style={[styles.scrollView, {marginBottom: 'auto'}]}>
        <View style={styles.navbarContainer}>
            <View style={styles.nav}>
              <Text style={styles.navbarTitle}>Lesson 3: Jumbled Sentences in a Paragraph</Text>
            </View>
        </View>

        <View style={styles.textLesson}>
          <View style={styles.textContainer}>
            <Text style={styles.lesson}>
              Lesson: {"\n"}
              Next, we will work on organizing sentences into a meaningful paragraph. When we write, we don’t just throw sentences together randomly. We organize them in a way that makes sense, usually starting with an introduction, then adding more details, and finally ending with a conclusion.
            </Text>
          </View>
        </View>

        <View style={styles.Exercise}>
          <Text style={styles.ExerciseText}>
            Example: {"\n"}
            If I give you the following sentences: "We ate dinner. I set the table. We cooked the food.", how would you arrange them? First, you would set the table, then cook the food, and finally eat dinner. So the correct order is: "I set the table. We cooked the food. We ate dinner." {"\n"} {"\n"}

            Now let’s try some exercises to see how well you can do this. {"\n"} {"\n"}
          </Text>
        </View>

        <View style={styles.quiz}>
          <Text style={styles.quizQuide}>
            Quiz/Activity:
          </Text>
        </View> 

        <View style={styles.quizHeader}>
          <View style={styles.underline} />
          
          <View style={styles.quizInstructions}>
            <Text style={styles.instructions}>
              Rearrange the sentences below {"\n"}to create a logical order:
            </Text>
          </View>

          <View style={styles.jumbleWords}>
            <Text style={styles.jumble}>
              "I made breakfast. My alarm rang. I got up." {"\n"}
              "He fell. He climbed the tree. He jumped." {"\n"}
              "I saw my friends. We played games. {"\n"} I went to the park." {"\n"}
              "It started to rain. I ran inside. I was playing outside." {"\n"}
              "She gave me a hug. I missed her. I met my sister." {"\n"}
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textArea}
              multiline={true}
              numberOfLines={4}
              value={text}
              onChangeText={setText}
              placeholder="Type your answer..."
            />
          </View>
          
          <Text>
            {"\n"} 
            {"\n"}
            {"\n"} 
            {"\n"}
            {"\n"}
            {"\n"} 
            {"\n"}
            {"\n"} 
            {"\n"} 
          </Text>


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
    navBack: {
      flexDirection: 'row',
      width: '100%',
      height: '8%',
      marginTop: 20,
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
    navbarContainer: {
        alignItems: 'center',
        width: '100%',
        marginBottom: 37,
    },
    nav: {
      width: '90%',
      height: 50,
      backgroundColor: colors.white,
      borderTopStartRadius: 35,
      borderTopEndRadius: 18,  
      borderBottomStartRadius: 18,
      borderBottomEndRadius: 35,
      alignItems: 'center',
      flexDirection: 'row',

    },
    navbarTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.primary,
        paddingLeft: 20,
    },
    textLesson: {
        alignItems: 'center',
        borderTopStartRadius: 8,
        borderTopEndRadius: 35,  
        borderBottomStartRadius: 35,
        borderBottomEndRadius: 8,
        width: '85%',
        height: '30%',
        position: 'relative',
        alignSelf: 'center',
        marginTop: -10,
        backgroundColor: colors.watchbackground,
    },
    lesson: {
        fontSize: 18, 
        fontWeight: 'bold',
        color: colors.white,
        paddingLeft: 25,
        marginTop: 5,
        paddingRight: 50,
        textAlign: 'left',  
        lineHeight: 40,
    },
    quiz: {
        alignItems: 'left',
        paddingLeft: 35,
    },
    quizHeader: {
      alignItems: 'center',
    },
    quizInstructions: {
      marginLeft: -60,
    },
    instructions: {
      color: colors.white,
      fontWeight: 'bold',
      textAlign: 'left',
      fontSize: 16,
    },
    jumbleWords: {
      marginLeft: 20,
      marginTop: 20,
    },
    jumble: {
      color: colors.white,
      fontWeight: 'bold',
      textAlign: 'left',
      fontSize: 16, 
      lineHeight: 30,
    },
    quizHeaderTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      color: colors.primary,
      width: '90%',
      height: 50,
      backgroundColor: colors.white,
      borderRadius: 35,
      borderTopRightRadius: 18,
      borderBottomLeftRadius: 18,
      borderBottomRightRadius: 35,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 10,
    },
    quizQuide: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.white,
    },
    ExerciseText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.white,
      paddingLeft: 35,
      marginTop: 20,
      paddingRight: 50,
      textAlign: 'left',  
      lineHeight: 30,
  },
    underline: {
      width: '80%',
      height: 2,
      backgroundColor: colors.white,
      marginVertical: 10,
  },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 15,
      width: '80%',
      paddingHorizontal: 20,
      marginBottom: 20,
      marginTop: 10,
      backgroundColor: colors.white,
    },
    input: {
      flex: 1,
      height: 40,
      paddingHorizontal: 10,
    },
    textArea: {
      height: 100,
      justifyContent: 'flex-start', 
      textAlignVertical: 'top',
      paddingTop: 10,
      paddingLeft: -30,
      borderRadius: 5, 
    },
});

export default WritingLesson3;