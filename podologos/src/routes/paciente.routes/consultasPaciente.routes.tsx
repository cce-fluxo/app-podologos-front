import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MinhasSolicitacoes from '../../screens/Private/Paciente/MinhasSolicitacoes';
import InfoConsultaRealizada from '../../screens/Private/Paciente/InfoConsultaRealizada';
import InfoConsultaAceita from '../../screens/Private/Paciente/InfoConsultaAceita';
import InfoConsultaSolicitada from '../../screens/Private/Paciente/InfoConsultaSolicitada';

const Stack = createStackNavigator();

function ConsultasPacientesStack() {
  return (
    <Stack.Navigator initialRouteName='MinhasSolicitacoes'>
      <Stack.Screen
        name='MinhasSolicitacoes'
        component={MinhasSolicitacoes}
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
        name='InfoConsultaRealizada'
        component={InfoConsultaRealizada}
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
        name='InfoConsultaAceita'
        component={InfoConsultaAceita}
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
        name='InfoConsultaSolicitada'
        component={InfoConsultaSolicitada}
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

export default ConsultasPacientesStack;
