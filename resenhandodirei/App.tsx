import { StatusBar } from 'react-native';
import { StyleSheet, View } from 'react-native';
import AnimationWord from './src/components/Animations/AnimationWord/AnimationWord';
import Feedbacks from './src/components/Feedbacks/Feedbacks';
import FollowUs from './src/components/FollowUs/FollowUs';
import { LinearGradient } from 'expo-linear-gradient';
import Footer from './src/components/Footer/Footer';
import Header from './src/components/Header/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Tela de exemplo
function About() {
  return (
    <View>
      <Text>Sobre nós</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen() {
  return (
    <LinearGradient colors={['#C72F64', '#41247C']} style={styles.container}>
      <Header />
      <AnimationWord />
      <Feedbacks />
      <FollowUs />
      <Footer />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
