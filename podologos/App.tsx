import { StatusBar } from "expo-status-bar";
import React, { SafeAreaView, Text, View } from "react-native";
import Login from "./src/screens/SignedOut/Login";
import PreLogin from "./src/screens/SignedOut/PreLogin";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor='#7fffd4'></StatusBar>
      <PreLogin></PreLogin>
    </>
  );
}
