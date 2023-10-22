import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GetStarted from './src/components/GetStarted';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='GetStarted'
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name='GetStarted' component={GetStarted}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
