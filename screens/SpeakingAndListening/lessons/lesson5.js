import { StyleSheet, Text, View, Platform, ScrollView, TouchableOpacity, Image,StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../Config/colors.js';
import { useFonts } from 'expo-font';

function SpeakingLesson5() {
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
              <Text style={styles.navbarTitle}>"Health Club"</Text>
            </View>
        </View>

        <View style={styles.textConversationContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.conversation}>
              <Text style={{textDecorationLine: 'underline'}}>A</Text>: "What do you do besides work and watching TV?" {"\n"}
              <Text style={{textDecorationLine: 'underline'}}>B</Text>: "When I have some time, I like to exercise." {"\n"}
              <Text style={{textDecorationLine: 'underline'}}>A</Text>: "Do you go jogging or do you go to a health club?" {"\n"}
              <Text style={{textDecorationLine: 'underline'}}>B</Text>: "I joined Samsung Health Club a couple of months ago." {"\n"}
              <Text style={{textDecorationLine: 'underline'}}>A</Text>: "How do you exercise?" {"\n"}
              <Text style={{textDecorationLine: 'underline'}}>B</Text>: "I usually spend 30 minutes on the bicycle for the cardio, and then I lift weight for about 45 minutes." {"\n"}
              <Text style={{textDecorationLine: 'underline'}}>A</Text>: "How often do you go?" {"\n"}
              <Text style={{textDecorationLine: 'underline'}}>B</Text>: "I want to go four times a week, but I'm too lazy. Last week, I only went to workout once." {"\n"}
            </Text>
          </View>
        </View>

        <View style={styles.quizHeader}>
          <Text style={styles.quizHeaderTitle}>Quiz - Listen to Dialogue</Text>
        </View>

        <View style={styles.quizQuestion}>
          <Text style={styles.quizQuestionText}>
            1. What is the main topic of discussion? {"\n"}
            A. Work {"\n"}
            B. Television {"\n"}
            C. Exercise {"\n"}
            D. Restaurants {"\n"} {"\n"}

            2. How long ago did he join the health club? {"\n"}
            A. 1 year ago {"\n"}
            B. 1 month ago {"\n"}
            C. 2 months ago {"\n"}
            D. Last week {"\n"} {"\n"}

            3. How long does he lift weights for? {"\n"}
            A. 30 minutes {"\n"}
            B. 45 minutes {"\n"}
            C. 1 hour {"\n"}
            D. 2 hours {"\n"} {"\n"}
            
            4. What does he usually do before lifting weights? {"\n"}
            A. Stretch {"\n"}
            B. Walk around {"\n"}
            C. Jump rope for 15 minutes {"\n"}
            D. Bicycle for 30 minutes {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"}
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
        paddingLeft: 100,
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

export default SpeakingLesson5;