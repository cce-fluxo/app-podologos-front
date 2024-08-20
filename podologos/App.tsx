import { StatusBar } from 'expo-status-bar';
import React, { SafeAreaView, Text, View } from 'react-native';
import MainRoutes from './src/routes/main.routes';
import { AuthProvider } from './src/context/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import TesteRoutes from './src/routes';

export default function App() {
  return (
    <>
      <AuthProvider>
        <StatusBar style='auto' backgroundColor='white' />
        <NavigationContainer>
          <TesteRoutes />
        </NavigationContainer>
      </AuthProvider>
    </>
  );
}
