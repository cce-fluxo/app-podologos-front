import { StatusBar } from 'expo-status-bar';
import React, { SafeAreaView, Text, View } from 'react-native';
import Routes from './src/routes';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <>
      <AuthProvider>
        <StatusBar />
        <Routes />
      </AuthProvider>
    </>
  );
}
