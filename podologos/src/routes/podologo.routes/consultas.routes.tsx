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
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name='ConsultasRealizadas'
        component={ConsultasRealizadas}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: 'black',
          title: 'Consultas',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FBFBFB',
            height: 110,
          },
          headerTitleStyle: {
            fontSize: 23,
            color: '#0A284D',
            fontWeight: 'medium',
          },
        }}
      ></Stack.Screen>
      <Stack.Screen
        name='InfoConsultasAceitas'
        component={InfoConsultasAceitas}
      ></Stack.Screen>
      <Stack.Screen
        name='InfoConsultasRealizadas'
        component={InfoConsultasRealizadas}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default ConsultasStack;
