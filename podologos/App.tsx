import { StatusBar } from 'expo-status-bar';
import React from 'react-native';
import MainRoutes from './src/routes/main.routes';
import { AuthProvider } from './src/context/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import TesteRoutes from './src/routes';
import PodologosRoutes from './src/routes/podologo.routes';
import SocialRoutes from './src/routes/social.routes';

export default function App() {
  return (
    <>
      <AuthProvider>
        <StatusBar style='auto' backgroundColor='white' />
        <NavigationContainer>
          <SocialRoutes />
        </NavigationContainer>
      </AuthProvider>
    </>
  );
}
