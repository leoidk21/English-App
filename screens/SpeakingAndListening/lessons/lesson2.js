import { StyleSheet, Text, View, Platform, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../Config/colors.js';
import { useFonts } from 'expo-font';

function SpeakingLesson2() {
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
              <Text style={styles.navbarTitle}>"Favorite Class"</Text>
            </View>
        </View>

        <View style={styles.textConversationContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.conversation}>
              <Text style={{textDecorationLine: 'underline'}}>A</Text>: "Hey Jack. How were your classes this semester?" {"\n"}
              <Text style={{textDecorationLine: 'underline'}}>B</Text>: "They were not too bad. I really liked my poli-sci class." {"\n"}
              <Text style={{textDecorationLine: 'underline'}}>A</Text>: "Would you consider it your favorite class?" {"\n"}
              <Text style={{textDecorationLine: 'underline'}}>B</Text>: "I don't know if I would call it my favorite, but it ranks up there." {"\n"}
              <Text style={{textDecorationLine: 'underline'}}>A</Text>: "What class was your favorite then?" {"\n"}
              <Text style={{textDecorationLine: 'underline'}}>B</Text>: "I took a business communication class last year and it was terrific." {"\n"}
              <Text style={{textDecorationLine: 'underline'}}>A</Text>: "I never took that yet. If that was your favorite, I think I will check it out." {"\n"}
            </Text>
          </View>
        </View>

        <View style={styles.quizHeader}>
          <Text style={styles.quizHeaderTitle}>Quiz - Listen to Dialogue</Text>
        </View>

        <View style={styles.quizQuestion}>
          <Text style={styles.quizQuestionText}>
            1. What is the topic of discussion? {"\n"}
            A. Classes {"\n"}
            B. Movies {"\n"}
            C. Work {"\n"}
            D. Sports {"\n"} {"\n"}

            2. What class did he really like? {"\n"}
            A. Economy 101 {"\n"}
            B. Poly-ski {"\n"}
            C. English {"\n"}
            D. Calculus {"\n"} {"\n"}
        
            3. What was his favorite class? {"\n"}
            A. Biology {"\n"}
            B. Chemistry {"\n"}
            C. Business communication {"\n"}
            D. Philosophy {"\n"} {"\n"}

            4. What word did he use to describe his favorite class? {"\n"}
            A. AAmazing {"\n"}
            B. Terrific {"\n"}
            C. Educational {"\n"}
            D. Interesting {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"}
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
        paddingLeft: 85,
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

export default SpeakingLesson2;