import { StyleSheet, Text, View, Platform, TouchableOpacity, Image, ScrollView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../Config/colors.js';
import { useFonts } from 'expo-font';

function SpeakingLesson1() {
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
          <Text style={styles.navTitle}>Listen to Dialogue</Text>
        </View>
    <ScrollView style={[styles.scrollView, {marginBottom: 'auto'}]}>
        <View style={styles.navbarContainer}>
            <View style={styles.nav}>
              <Text style={styles.navbarTitle}>‘Planning to watch a movie’</Text>
            </View>
        </View>

        <View style={styles.textConversationContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.conversation}>
              <Text style={{textDecorationLine: 'underline'}}>Man</Text>: "What are you doing tomorrow?" {"\n"}
              <Text style={{textDecorationLine: 'underline'}}>Woman</Text>: "Nothing really." {"\n"}
              <Text style={{textDecorationLine: 'underline'}}>Man</Text>: "Let's watch a movie or something." {"\n"}
              <Text style={{textDecorationLine: 'underline'}}>Woman</Text>: "What's on these days?" {"\n"}
              <Text style={{textDecorationLine: 'underline'}}>Man</Text>: "I think they're playing Lord of the Rings" {"\n"}
              <Text style={{textDecorationLine: 'underline'}}>Woman</Text>: "That sounds pretty good. Let's watch that." {"\n"}
              <Text style={{textDecorationLine: 'underline'}}>Man</Text>: "Where should we meet?" {"\n"}
              <Text style={{textDecorationLine: 'underline'}}>Woman</Text>: "How about at the subway entrance." {"\n"}
              <Text style={{textDecorationLine: 'underline'}}>Man</Text>: "Aright. I'll meet you there at one o'clock." {"\n"}
            </Text>
          </View>
        </View>

        <View style={styles.quizHeader}>
          <Text style={styles.quizHeaderTitle}>Quiz - Listen to Dialogue</Text>
        </View>

        <View style={styles.quizQuestion}>
          <Text style={styles.quizQuestionText}>
            1. What movie do these people plan on watching? {"\n"}
            A. Matrix Revolution {"\n"}
            B. The Two Towers {"\n"}
            C. Lord of the Rings {"\n"}
            D. The Last Samurai {"\n"} {"\n"}

            2. When do they plan on watching the movie? {"\n"}
            A. On the Weekend {"\n"}
            B. Tomorrow {"\n"}
            C. Later in the evening today {"\n"}
            D. Next Friday {"\n"} {"\n"}
        
            3. Where do they plan on meeting? {"\n"}
            A. At the subway entrance {"\n"}
            B. In front of the movie theater {"\n"}
            C. At starbucks next to the theater {"\n"}
            D. At home {"\n"} {"\n"}

            4. What time do they plan on meeting? {"\n"}
            A. At 7:30pm after dinner {"\n"}
            B. At noontime {"\n"}
            C. At one o'clock {"\n"}
            D. At 3:45pm {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"}
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
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.primary,
        paddingLeft: 50,
    },
    conversation: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white,
        paddingLeft: 25,
        paddingRight: 50,
        textAlign: 'left',  
        lineHeight: 50,
    },
    quizHeader: {
        alignItems: 'center',
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
    quizQuestionText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.white,
      paddingLeft: 25,
      marginTop: 20,
      paddingRight: 50,
      textAlign: 'left',  
      lineHeight: 30,
  }
});

export default SpeakingLesson1;