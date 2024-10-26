import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen.js';
import SignUpScreen from './screens/signupscreen.js';

import HomeScreen from './screens/homescreen.js';
import WatchScreen from './screens/watchscreen.js';
import LearnScreen from './screens/learnscreen.js';
import AllLesson from './screens/alllessonscreen.js';
import VideoPlayer from './screens/videoplayer.js';

import AboutScreen from './screens/aboutscreen.js';

import LearnGrammar from './screens/grammar/grammarscreen.js';
import GrammarLesson1 from './screens/grammar/lessons/grammarlesson1screen.js';
import GrammarLesson2 from './screens/grammar/lessons/grammarlesson2screen.js';
import GrammarLesson3 from './screens/grammar/lessons/grammarlesson3screen.js';
import GrammarLesson4 from './screens/grammar/lessons/grammarlesson4screen.js';
import GrammarLesson5 from './screens/grammar/lessons/grammarlesson5screen.js';

import LearnVocabulary from './screens/vocabulary/vocabularyscreen.js';
import VocabularyLesson1 from './screens/vocabulary/lessons/vocabularylesson1.js';
import VocabularyLesson2 from './screens/vocabulary/lessons/vocabularylesson2.js';
import VocabularyLesson3 from './screens/vocabulary/lessons/vocabularylesson3.js';
import VocabularyLesson4 from './screens/vocabulary/lessons/vocabularylesson4.js';
import VocabularyLesson5 from './screens/vocabulary/lessons/vocabularylesson5.js';


import LearnListening from './screens/SpeakingAndListening/speakingscreen.js';
import SpeakingLesson1 from './screens/SpeakingAndListening/lessons/lesson1.js';
import SpeakingLesson2 from './screens/SpeakingAndListening/lessons/lesson2.js';
import SpeakingLesson3 from './screens/SpeakingAndListening/lessons/lesson3.js';
import SpeakingLesson4 from './screens/SpeakingAndListening/lessons/lesson4.js';
import SpeakingLesson5 from './screens/SpeakingAndListening/lessons/lesson5.js';

import LearnWriting from './screens/writing/writingscreen.js';
import WritingLesson1 from './screens/writing/lessons/lesson1.js';
import WritingLesson2 from './screens/writing/lessons/lesson2.js';
import WritingLesson3 from './screens/writing/lessons/lesson3.js';
import WritingLesson4 from './screens/writing/lessons/lesson4.js';
import WritingLesson5 from './screens/writing/lessons/lesson5.js';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignUpScreen} />

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Watch" component={WatchScreen} />        
        <Stack.Screen name="Learn" component={LearnScreen} />
        <Stack.Screen name="AllLesson" component={AllLesson} />
        <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
        
        <Stack.Screen name="About" component={AboutScreen} />

        <Stack.Screen name="Grammar" component={LearnGrammar} />
        <Stack.Screen name="GrammarLesson1" component={GrammarLesson1} />
        <Stack.Screen name="GrammarLesson2" component={GrammarLesson2} />
        <Stack.Screen name="GrammarLesson3" component={GrammarLesson3} />
        <Stack.Screen name="GrammarLesson4" component={GrammarLesson4} />
        <Stack.Screen name="GrammarLesson5" component={GrammarLesson5} />

        <Stack.Screen name="Vocabulary" component={LearnVocabulary} />
        <Stack.Screen name="VocabularyLesson1" component={VocabularyLesson1} />
        <Stack.Screen name="VocabularyLesson2" component={VocabularyLesson2} />
        <Stack.Screen name="VocabularyLesson3" component={VocabularyLesson3} />
        <Stack.Screen name="VocabularyLesson4" component={VocabularyLesson4} />
        <Stack.Screen name="VocabularyLesson5" component={VocabularyLesson5} />

        <Stack.Screen name="Listening" component={LearnListening} />
        <Stack.Screen name="Lesson1Speaking" component={SpeakingLesson1} />
        <Stack.Screen name="Lesson2Speaking" component={SpeakingLesson2} />
        <Stack.Screen name="Lesson3Speaking" component={SpeakingLesson3} />
        <Stack.Screen name="Lesson4Speaking" component={SpeakingLesson4} />
        <Stack.Screen name="Lesson5Speaking" component={SpeakingLesson5} />

        <Stack.Screen name="Writing" component={LearnWriting} />
        <Stack.Screen name="WritingLesson1" component={WritingLesson1} />
        <Stack.Screen name="WritingLesson2" component={WritingLesson2} />
        <Stack.Screen name="WritingLesson3" component={WritingLesson3} />
        <Stack.Screen name="WritingLesson4" component={WritingLesson4} />
        <Stack.Screen name="WritingLesson5" component={WritingLesson5} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}