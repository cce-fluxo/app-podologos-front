import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import PerfilPaciente from '../../screens/Private/Paciente/PerfilPaciente';
import EditarPaciente from '../../screens/Private/Paciente/EditarPaciente';

const Stack = createStackNavigator();

function ProfilePacienteStack() {
  return (
    <Stack.Navigator initialRouteName='PerfilPaciente'>
      <Stack.Screen
        name='PerfilPaciente'
        component={PerfilPaciente}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: '#0A284D',
          title: 'Perfil',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FBFBFB',
            height: 110,
          },
          headerTitleStyle: {
            fontSize: 23,
            fontWeight: 'medium',
          },
        }}
      ></Stack.Screen>
      <Stack.Screen
        name='EditarPaciente'
        component={EditarPaciente}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default ProfilePacienteStack;
