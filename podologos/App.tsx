import { StatusBar } from "expo-status-bar";
import React, { SafeAreaView, Text, View } from "react-native";
import Input from "./src/components/Inputs";
import { Button } from "./src/components/Button";
import Login from "./src/screens/SignedOut/Login";
import Email from "./src/screens/SignedOut/ForgotPassword/Email";
import PageTitle from "./src/components/PageTitle";
import CadastroPaciente from "./src/screens/SignedOut/CadastroPaciente";

export default function App() {
  return (
    <SafeAreaView className="flex-1">
      <CadastroPaciente></CadastroPaciente>
    </SafeAreaView>
  );
}
