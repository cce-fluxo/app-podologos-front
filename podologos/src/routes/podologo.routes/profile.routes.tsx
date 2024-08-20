import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import PerfilPodologo from '../../screens/Private/Podologo/PerfilPodologo';
import EditarPodologo from '../../screens/Private/Podologo/EditarPodologo';

const Stack = createStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator initialRouteName=''>
      <Stack.Screen
        name='PerfilPodologo'
        component={PerfilPodologo}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: '#0A284D',
          title: 'Perfil',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FFFFFF',
            height: 110,
          },
          headerTitleStyle: {
            fontSize: 23,
            fontWeight: 'medium',
          },
        }}
      ></Stack.Screen>
      <Stack.Screen
        name='EditarPodologo'
        component={EditarPodologo}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: '#0A284D',
          title: 'Perfil',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FFFFFF',
            height: 110,
          },
          headerTitleStyle: {
            fontSize: 23,
            fontWeight: 'medium',
          },
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default ProfileStack;
