import { StatusBar } from 'expo-status-bar';
import React, { Appearance } from 'react-native';
import MainRoutes from './src/routes/main.routes';
import { AuthProvider } from './src/context/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import TesteRoutes from './src/routes';
import { useEffect } from 'react';

export default function App() {
  // useEffect(() => {
  //   Appearance.setColorScheme('light');
  // }, []);
  return (
    <>
      <AuthProvider>
        <StatusBar style='auto' backgroundColor='white' />
        <NavigationContainer>
          <MainRoutes />
        </NavigationContainer>
      </AuthProvider>
    </>
  );
}
