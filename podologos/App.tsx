import { StatusBar } from "expo-status-bar";
import React, { SafeAreaView, Text, View } from "react-native";
import Input from "./src/components/Inputs";
import { Button } from "./src/components/Button";
import Login from "./src/screens/SignedOut/Login";
import Email from "./src/screens/SignedOut/ForgotPassword/Email";

export default function App() {
  return (
    <Email></Email>
  );
}
