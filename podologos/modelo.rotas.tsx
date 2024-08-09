// Navigation.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TabView, SceneMap } from 'react-native-tab-view';
// Importe suas telas (consultas1, consultas2, etc.)
import Consultas1Screen from './Consultas1Screen';
import Consultas2Screen from './Consultas2Screen';

const Tab = createBottomTabNavigator();

const ConsultasStack = createStackNavigator();
const ConsultasStackScreen = () => (
  <ConsultasStack.Navigator>
    <ConsultasStack.Screen name='Consultas1' component={Consultas1Screen} />
    <ConsultasStack.Screen name='Consultas2' component={Consultas2Screen} />
    {/* Adicione mais telas conforme necessário */}
  </ConsultasStack.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Consultas' component={ConsultasStackScreen} />
        {/* Adicione outras abas aqui */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
