import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomePodologo from '../../screens/Private/Podologo/HomePodologo';
import InfoSolicitacaoConsulta from '../../screens/Private/Podologo/InfoSolicitacaoConsulta';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName='HomePodologo'>
      <Stack.Screen
        name='HomePodologo'
        component={HomePodologo}
        options={{ headerShown: false }}
      ></Stack.Screen>

      <Stack.Screen
        name='InfoSolicitacaoConsulta'
        component={InfoSolicitacaoConsulta}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: 'black',
          title: 'Recuperar senha',
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
    </Stack.Navigator>
  );
}

export default HomeStack;
