import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import PerfilPodologo from '../../screens/Private/Podologo/PerfilPodologo';

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
            backgroundColor: '#FBFBFB',
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
