import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import { Contact } from '../pages/Contact/Contact';

export function StackRoutes() {
  return (
    <Navigator>
      <Screen 
            name="home" 
            component={Home} 
            options={{
                headerShown: false
            }}
        />

        <Screen 
            name="about" 
            component={About} 
            options={{
                headerShown: false
            }}
        />

        <Screen 
            name="contact" 
            component={Contact} 
            options={{
                headerShown: false
            }}
        />
      
    </Navigator>
  );
}