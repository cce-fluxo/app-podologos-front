import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ConsultasAceitas from '../../screens/Private/Podologo/ConsultasAceitas';
import ConsultasRealizadas from '../../screens/Private/Podologo/ConsultasRealizadas';
import InfoConsultasAceitas from '../../screens/Private/Podologo/InfoConsultasAceitas';
import InfoConsultasRealizadas from '../../screens/Private/Podologo/InfoConsultasRealizadas';

const Stack = createStackNavigator();

function ConsultasStack() {
  return (
    <Stack.Navigator initialRouteName='ConsultasAceitas'>
      <Stack.Screen
        name='ConsultasAceitas'
        component={ConsultasAceitas}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: '#0A284D',
          title: 'Consultas',
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
        name='ConsultasRealizadas'
        component={ConsultasRealizadas}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: '#0A284D',
          title: 'Consultas',
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
        name='InfoConsultasAceitas'
        component={InfoConsultasAceitas}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: '#0A284D',
          title: 'Consultas',
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
        name='InfoConsultasRealizadas'
        component={InfoConsultasRealizadas}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: '#0A284D',
          title: 'Consultas',
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

export default ConsultasStack;
