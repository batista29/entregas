import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/pages/motoBoy/login/index';
import Entregas from './src/pages/motoBoy/entregas/index';
import Cozinha from './src/pages/cozinha/index';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Entregas" component={Entregas} />
        <Stack.Screen name="Cozinha" component={Cozinha} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}