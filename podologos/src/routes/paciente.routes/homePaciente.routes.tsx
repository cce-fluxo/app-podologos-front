import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomePodologo from '../../screens/Private/Podologo/HomePodologo';
import InfoSolicitacaoConsulta from '../../screens/Private/Podologo/InfoSolicitacaoConsulta';

const Stack = createStackNavigator();

export default function HomePacienteStack() {
  return (
    <Stack.Navigator
      initialRouteName='HomePodologo'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name='InfoSolicitacaoConsulta'
        component={InfoSolicitacaoConsulta}
      ></Stack.Screen>
      <Stack.Screen name='HomePodologo' component={HomePodologo}></Stack.Screen>
    </Stack.Navigator>
  );
}
