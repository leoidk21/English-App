import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../Config/colors.js';
import { useFonts } from 'expo-font';

function WritingLesson5() {
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
        <View style={styles.navBack}>
          <TouchableOpacity style={styles.navIconContainer} onPress={() => navigation.goBack()}>
              <Image style={styles.navIcon} source={require('../../../assets/left-back.png')} />
          </TouchableOpacity>
          <Text style={styles.navTitle}>Writing</Text>
        </View>
    <ScrollView style={styles.container}>
        <View style={styles.navbarContainer}>
            <View style={styles.nav}>
              <Text style={styles.navbarTitle}>Lesson 5: Jumbled Word Definitions</Text>
            </View>
        </View>

        <View style={styles.textLesson}>
          <View style={styles.textContainer}>
            <Text style={styles.lesson}>
              Lesson: {"\n"}
              In this lesson, we will combine our skills of unscrambling with understanding the meaning of words. You’ll be given scrambled words along with definitions. Once you unscramble the word, you will match it with the correct definition. This helps you not only recognize the word but also understand its meaning.
            </Text>
          </View>
        </View>

        <View style={styles.Exercise}>
          <Text style={styles.ExerciseText}>
            Example: {"\n"}
            If you unscramble "recheat", you get "teacher", and the definition is: "A person who teaches, especially in a school." {"\n"} {"\n"}

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
            <Text style={styles.instructions}>Unscramble the words and match {"\n"}them with the correct definitions:</Text>
          </View>

          <View style={styles.jumbleWords}>
            <Text style={styles.jumble}>
              1. "poecil" {"\n"} A person who keeps law and order
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Type your answers..."
              autoCapitalize="none"
              autoCompleteType="username"
            />
          </View>

          <View style={styles.jumbleWords}>
            <Text style={styles.jumble2}>
              2. "mtoeion" {"\n"}
              Strong feeling of joy, sorrow, or anger
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Type your answers..."
              autoCapitalize="none"
              autoCompleteType="username"
            />
          </View>

          <View style={styles.jumbleWords}>
            <Text style={styles.jumble3}>
              3. "gdirbe" {"\n"}
              A structure built over water for crossing
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Type your answers..."
              autoCapitalize="none"
              autoCompleteType="username"
            />
          </View>

          <View style={styles.jumbleWords}>
            <Text style={styles.jumble4}>
              4. "aremac"{"\n"}
              A device used for taking photographs
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Type your answers..."
              autoCapitalize="none"
              autoCompleteType="username"
            />
          </View>

          <View style={styles.jumbleWords}>
            <Text style={styles.jumble5}>
              5. "aegmrna"{"\n"}
              A person in charge of a business {"\n"}or organization
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Type your answers..."
              autoCapitalize="none"
              autoCompleteType="username"
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
        paddingLeft: 16,
    },
    textLesson: {
        alignItems: 'center',
        borderTopStartRadius: 8,
        borderTopEndRadius: 35,  
        borderBottomStartRadius: 35,
        borderBottomEndRadius: 8,
        width: '85%',
        height: '31%',
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
      marginLeft: -45,
    },
    instructions: {
      color: colors.white,
      fontWeight: 'bold',
      textAlign: 'left',
      fontSize: 16,
    },
    jumbleWords: {
      marginLeft: -200,
      marginTop: 20,
    },
    jumble: {
      color: colors.white,
      fontWeight: 'bold',
      textAlign: 'left',
      fontSize: 16,
      paddingLeft: 160,
    },
    jumble2: {
      color: colors.white,
      fontWeight: 'bold',
      textAlign: 'left',
      fontSize: 16,
      paddingLeft: 190,
    }, 
    jumble3: {
      color: colors.white,
      fontWeight: 'bold',
      textAlign: 'left',
      fontSize: 16,
      paddingLeft: 210,
    },
    jumble4: {
      color: colors.white,
      fontWeight: 'bold',
      textAlign: 'left',
      fontSize: 16,
      paddingLeft: 195,
    },
    jumble5: {
      color: colors.white,
      fontWeight: 'bold',
      textAlign: 'left',
      fontSize: 16,
      paddingLeft: 170,
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
    }
});

export default WritingLesson5;