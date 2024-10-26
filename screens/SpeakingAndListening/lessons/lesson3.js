import { StyleSheet, Text, View, Platform, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../Config/colors.js';
import { useFonts } from 'expo-font';

function SpeakingLesson3() {
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
              <TouchableOpacity style={styles.navbarIconContainer}
                  onPress={() => setSidebarVisible(true)}>
              </TouchableOpacity>
              <Text style={styles.navbarTitle}>"Hobby and Painting"</Text>
            </View>
        </View>

        <View style={styles.textConversationContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.conversation}>
              <Text style={{textDecorationLine: 'underline'}}>A</Text>: "Hey Bob. Whatcha you doing?" {"\n"}
              <Text style={{textDecorationLine: 'underline'}}>B</Text>: "I'm at home painting." {"\n"}
              <Text style={{textDecorationLine: 'underline'}}>A</Text>: "I didn't know you paint. What type of painting is it?" {"\n"}
              <Text style={{textDecorationLine: 'underline'}}>B</Text>: "I enjoy oil painting. I learned it in one of my extra classes in college."{"\n"}
              <Text style={{textDecorationLine: 'underline'}}>A</Text>: "That sounds so interesting. I wish I learned a hobby." {"\n"}
              <Text style={{textDecorationLine: 'underline'}}>B</Text>: "Hobbies are never too late to learn. They offer a variety of classes at the local community college. You should look into it." {"\n"}
              <Text style={{textDecorationLine: 'underline'}}>A</Text>: "I think I will. Thanks for the info." {"\n"}
            </Text>
          </View>
        </View>

        <View style={styles.quizHeader}>
          <Text style={styles.quizHeaderTitle}>Quiz - Listen to Dialogue</Text>
        </View>

        <View style={styles.quizQuestion}>
          <Text style={styles.quizQuestionText}>
            1. Where is Bob? {"\n"}
            A. At school {"\n"}
            B. At work {"\n"}
            C. At home {"\n"}
            D. In class {"\n"} {"\n"}

            2. What is Bob doing? {"\n"}
            A. Running {"\n"}
            B. Watching TV {"\n"}
            C. Painting {"\n"}
            D. Sleeping {"\n"} {"\n"}
        
            3. Where did Bob learn how to paint? {"\n"}
            A. At the local community college {"\n"}
            B. From his father {"\n"}
            C. In high school painting class {"\n"}
            D. He learned by himself {"\n"} {"\n"}

            4. What type of painting are they talking about? {"\n"}
            A. Abstract painting {"\n"}
            B. Regular painting {"\n"}
            C. House painting {"\n"}
            D. Oil painting {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"}
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

export default SpeakingLesson3;