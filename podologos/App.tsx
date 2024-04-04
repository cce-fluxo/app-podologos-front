import { StatusBar } from "expo-status-bar";
import React, { SafeAreaView, Text, View } from "react-native";
import Routes from "./src/routes";
export default function App() {
  return (
    <>
      <StatusBar />
      <Routes />
    </>
  );
}
