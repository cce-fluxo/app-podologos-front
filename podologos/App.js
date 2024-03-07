import { StatusBar } from "expo-status-bar";
import React, { Text, View } from "react-native";
import Input from "./src/components/Inputs";
import { Button } from "./src/components/Button";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center gap-4 bg-branco">
      <Input placeholder="Entrar"></Input>
      <Text className="text-azul">Esqueci minha senha</Text>
      <Button className="" placeholder="Entrar"></Button>
      <StatusBar style="auto" />
    </View>
  );
}
