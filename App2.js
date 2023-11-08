import By1 from './By1';
import By2 from './By2';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
export default function App2() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'By1'} component={By1} />
        <Stack.Screen name={'By2'} component={By2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
