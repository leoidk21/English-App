import { StyleSheet, Text, View, Platform, TouchableOpacity, Image, ScrollView, TextInput, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../Config/colors.js';
import { useFonts } from 'expo-font';

function WritingLesson1() {
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
          <Text style={styles.navTitle}>Pronouns</Text>
      </View>
      <ScrollView style={[styles.scrollView, {marginBottom: 'auto'}]}>
          <View style={styles.BoxContainer}>
              <View style={styles.box}>
                <View style={styles.boxTitle}>
                  <Text style={styles.navbarTitle}>Lesson 1: Jumbled Letters in a Word</Text>
                </View>
                <View style={styles.textContainer}>
                  <Text style={{fontWeight: 'bold', color: colors.white, fontSize: 25}}>Lesson:</Text>
                  <Text style={styles.lesson}>
                    Today, we are going to practice working with scrambled letters to form real words. When letters are jumbled, they're in the wrong order, and your job is to think about how the letters can be arranged to form a meaningful word. This exercise helps you become better at spelling and recognizing words more quickly.
                  </Text>
                </View>
                <View style={styles.textExample}>
                  <Text style={{fontWeight: 'bold', color: colors.white, fontSize: 25}}>Example:</Text>
                  <Text style={styles.lesson}>
                    If I give you the scrambled word "odg", can you guess what the correct word is? Yes, the answer is "dog".
                  </Text>
                  <Text style={[styles.lesson, {marginTop: 20}]}>
                    Now let’s try some exercises to see how well you can do this.
                  </Text>
                </View>
              </View>     
          </View>

          <View style={styles.QuizContainer}>
              <View style={styles.QuizBox}>
                  <Text style={[styles.textHeader, {borderBottomWidth: 1,borderBottomColor: colors.white,}]}>Quiz/Activity:</Text>
                  <Text style={styles.textHeader}>Unscramble the following letters to form real words:</Text>
                      <Text style={styles.textNumbered}>1. "ratc"</Text>
                      <TextInput
                          style={styles.input}
                          placeholder="Answer"
                          secureTextEntry
                          autoCapitalize="none"
                          autoCompleteType="Answer"
                      />
                      <Text style={styles.textNumbered}>2. "eurtpocm"</Text>
                      <TextInput
                          style={styles.input}
                          placeholder="Answer"
                          secureTextEntry
                          autoCapitalize="none"
                          autoCompleteType="Answer"
                      />
                      <Text style={styles.textNumbered}>3. "gnera"</Text>
                      <TextInput
                          style={styles.input}
                          placeholder="Answer"
                          secureTextEntry
                          autoCapitalize="none"
                          autoCompleteType="Answer"
                      />
                      <Text style={styles.textNumbered}>4. "lpeta"</Text>
                      <TextInput
                          style={styles.input}
                          placeholder="Answer"
                          secureTextEntry
                          autoCapitalize="none"
                          autoCompleteType="Answer"
                      />
                      <Text style={styles.textNumbered}>5. "neicamh"</Text>
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
  boxTitle: {
      width: '100%',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.white,
      borderTopStartRadius: 35,
      borderTopEndRadius: 18,  
      borderBottomStartRadius: 18,
      borderBottomEndRadius: 35,
  },
  navbarTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.black,
  },
  textContainer: {
    padding: 20,
    marginTop: 20,
    borderTopStartRadius: 8,
    borderTopEndRadius: 35,  
    borderBottomStartRadius: 35,
    borderBottomEndRadius: 8,
    width: '100%',
    height: 'auto',
    backgroundColor: colors.watchbackground,
  },
  lesson: {
    fontSize: 20,
    color: colors.white,
  },

  textExample: {
    padding: 20,
    marginTop: 20,
    borderTopStartRadius: 8,
    borderTopEndRadius: 35,  
    borderBottomStartRadius: 35,
    borderBottomEndRadius: 8,
    width: '100%',
    height: 'auto',
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
      borderRadius: 5,
  },
  textHeader: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 15,
      color: colors.white,
  },
  textNumbered: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.white,
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

export default WritingLesson1;