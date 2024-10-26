import { StyleSheet, Text, View, Platform, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../Config/colors.js';
import { useFonts } from 'expo-font';

function SpeakingLesson4() {
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
    <ScrollView style={styles.container}>
        <View style={styles.navbarContainer}>
            <View style={styles.nav}>
              <TouchableOpacity style={styles.navbarIconContainer}
                  onPress={() => setSidebarVisible(true)}>
              </TouchableOpacity>
              <Text style={styles.navbarTitle}>"Exercise Listening"</Text>
            </View>
        </View>

        <View style={styles.textConversationContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.conversation}>
              <Text style={{textDecorationLine: 'underline'}}>A</Text>: "Hey Michael. Where are you going?" {"\n"}
              <Text style={{textDecorationLine: 'underline'}}>B</Text>: "No where special. I was just taking a walk." {"\n"}
              <Text style={{textDecorationLine: 'underline'}}>A</Text>: "What for?" {"\n"}
              <Text style={{textDecorationLine: 'underline'}}>B</Text>: "To get a little exercise. I'm so out of shape." {"\n"}
              <Text style={{textDecorationLine: 'underline'}}>A</Text>: "Hey, I play basketball with a bunch of friends twice a week. It's great exercise and it's fun too. Why don't you come out and play with us?" {"\n"}
              <Text style={{textDecorationLine: 'underline'}}>B</Text>: "That sounds great. Give me a call next time you guys play." {"\n"}
            </Text>
          </View>
        </View>

        <View style={styles.quizHeader}>
          <Text style={styles.quizHeaderTitle}>Quiz - Listen to Dialogue</Text>
        </View>

        <View style={styles.quizQuestion}>
          <Text style={styles.quizQuestionText}>
            1. Where is the conversation taking place? {"\n"}
            A. In the office {"\n"}
            B. In a classroom {"\n"}
            C. At home over the telephone {"\n"}
            D. Outside {"\n"} {"\n"}
 
            2. What is Michael currently doing? {"\n"}
            A. Studying for exams {"\n"}
            B. Listening to music {"\n"}
            C. Taking a walk {"\n"}
            D. Watching TV {"\n"} {"\n"}

            3. Where is Michael going? {"\n"}
            A. No where special {"\n"}
            B. To a special party {"\n"}
            C. On his way home {"\n"}
            D. To his favorit restaurant {"\n"} {"\n"}

            4. What sporting activity was suggested for exercise? {"\n"}
            A. Baseball {"\n"}
            B. Basketball {"\n"}
            C. Football {"\n"}
            D. Soccer {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"}
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
        paddingLeft: 65,
    },
    conversation: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white,
        paddingLeft: 25,
        marginTop: -20,
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

export default SpeakingLesson4;