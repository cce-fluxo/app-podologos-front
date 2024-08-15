import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomePaciente from '../../screens/Private/Paciente/HomePaciente';
import NovaConsulta from '../../screens/Private/Paciente/NovaConsulta';

const Stack = createStackNavigator();

function HomePacienteStack() {
  return (
    <Stack.Navigator initialRouteName='HomePaciente'>
      <Stack.Screen
        name='HomePaciente'
        component={HomePaciente}
        options={{ headerShown: false }}
      ></Stack.Screen>

      <Stack.Screen
        name='NovaConsulta'
        component={NovaConsulta}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: '#0A284D',
          title: 'Nova Consulta',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FBFBFB',
            height: 110,
          },
          headerTitleStyle: {
            fontSize: 23,
            fontWeight: 'normal',
          },
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default HomePacienteStack;
