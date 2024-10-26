import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../Config/colors.js';
import { useFonts } from 'expo-font';

function WritingLesson4() {
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
              <Text style={styles.navbarTitle}>Lesson 4: Jumbled Word Categories</Text>
            </View>
        </View>

        <View style={styles.textLesson}>
          <View style={styles.textContainer}>
            <Text style={styles.lesson}>
              Lesson: {"\n"}
              Now let’s move on to categorizing words. You will first unscramble words, and then group them according to their type. Some words belong to categories like fruits, animals, or places. This lesson will help you understand the meanings of words and how to group similar things together.
            </Text>
          </View>
        </View>

        <View style={styles.Exercise}>
          <Text style={styles.ExerciseText}>
            Example: {"\n"}
            If you unscramble "eegnrao", you get "orange", which belongs to the category of fruits. {"\n"} {"\n"}

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
            <Text style={styles.instructions}>Unscramble the following words {"\n"}and then categorize them:</Text>
          </View>

          <View style={styles.jumbleWords}>
            <Text style={styles.jumble}>1. "ieplnappe" (Hint: fruits)</Text>
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
            <Text style={styles.jumble2}>2. "eegla" (Hint: birds)</Text>
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
            <Text style={styles.jumble3}>3. "ingnnru" (Hint: verb)</Text>
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
            <Text style={styles.jumble4}>4. "raihc" (Hint: furniture)</Text>
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
            <Text style={styles.jumble5}>5. "otelh" (Hint: places)</Text>
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
      marginLeft: -55,
    },
    instructions: {
      color: colors.white,
      fontWeight: 'bold',
      textAlign: 'left',
      fontSize: 16,
    },
    jumbleWords: {
      marginLeft: -230,
      marginTop: 20,
    },
    jumble: {
      color: colors.white,
      fontWeight: 'bold',
      textAlign: 'left',
      fontSize: 16,
      paddingLeft: 140,
    },
    jumble2: {
      color: colors.white,
      fontWeight: 'bold',
      textAlign: 'left',
      fontSize: 16,
      paddingLeft: 115,
    }, 
    jumble3: {
      color: colors.white,
      fontWeight: 'bold',
      textAlign: 'left',
      fontSize: 16,
      paddingLeft: 135,
    },
    jumble4: {
      color: colors.white,
      fontWeight: 'bold',
      textAlign: 'left',
      fontSize: 16,
      paddingLeft: 150,
    },
    jumble5: {
      color: colors.white,
      fontWeight: 'bold',
      textAlign: 'left',
      fontSize: 16,
      paddingLeft: 140,
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

export default WritingLesson4;